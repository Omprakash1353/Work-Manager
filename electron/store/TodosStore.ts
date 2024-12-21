import { DataStore } from "./abstract/DataStore";
import { StoreKey, Todo } from "./types";

type TodoCache = {
  byId: Map<string, Todo>;
  byDrawing: Map<string, Set<string>>;
  byPriority: Map<string, Set<string>>;
  completed: Set<string>;
  pending: Set<string>;
  order: string[];
};

export class TodosStore extends DataStore<Todo> {
  protected readonly dataKey: Extract<StoreKey, `${string}s`> = "todos";
  protected readonly orderKey: Extract<StoreKey, `${string}List`> = "todosList";

  private cache: TodoCache = {
    byId: new Map(),
    byDrawing: new Map(),
    byPriority: new Map(),
    completed: new Set(),
    pending: new Set(),
    order: [],
  };

  constructor(store: any) {
    super(store);
    this.initializeCache();
  }

  private initializeCache(): void {
    const todos = this.getStoreData(this.dataKey) as Record<string, Todo>;
    const order = this.getStoreData(this.orderKey) as string[];

    // Initialize basic caches
    this.cache.byId = new Map(Object.entries(todos));
    this.cache.order = order;

    // Initialize specialized indexes
    this.cache.byId.forEach((todo) => {
      // By completion status
      if (todo.completed) {
        this.cache.completed.add(todo.id);
      } else {
        this.cache.pending.add(todo.id);
      }

      // By drawing
      if (todo.drawingId) {
        const drawingTodos =
          this.cache.byDrawing.get(todo.drawingId) || new Set();
        drawingTodos.add(todo.id);
        this.cache.byDrawing.set(todo.drawingId, drawingTodos);
      }

      // By priority
      if (todo.priority) {
        const priorityTodos =
          this.cache.byPriority.get(todo.priority) || new Set();
        priorityTodos.add(todo.id);
        this.cache.byPriority.set(todo.priority, priorityTodos);
      }
    });
  }

  get(id: string): Todo | undefined {
    return this.cache.byId.get(id);
  }

  getAll(): Todo[] {
    return this.cache.order.map((id) => this.cache.byId.get(id)!);
  }

  protected createItem(data: Omit<Todo, "id">): Todo {
    return {
      ...data,
      id: Date.now().toString(),
      created: new Date().toISOString(),
      completed: data.completed ?? false,
    };
  }

  add(data: Omit<Todo, "id">): Todo {
    const item = this.createItem(data);

    // Update main cache
    this.cache.byId.set(item.id, item);
    this.cache.order.unshift(item.id);

    // Update indexes
    if (item.completed) {
      this.cache.completed.add(item.id);
    } else {
      this.cache.pending.add(item.id);
    }

    if (item.drawingId) {
      const drawingTodos =
        this.cache.byDrawing.get(item.drawingId) || new Set();
      drawingTodos.add(item.id);
      this.cache.byDrawing.set(item.drawingId, drawingTodos);
    }

    if (item.priority) {
      const priorityTodos =
        this.cache.byPriority.get(item.priority) || new Set();
      priorityTodos.add(item.id);
      this.cache.byPriority.set(item.priority, priorityTodos);
    }

    // Update store
    const todos = Object.fromEntries(this.cache.byId);
    this.setStoreData(this.dataKey, todos as any);
    this.setStoreData(this.orderKey, this.cache.order);

    return item;
  }

  update(id: string, updates: Partial<Todo>): void {
    const item = this.cache.byId.get(id);
    if (!item) return;

    const updatedItem = { ...item, ...updates };

    // Update completion status index
    if (
      updates.completed !== undefined &&
      updates.completed !== item.completed
    ) {
      if (updates.completed) {
        this.cache.pending.delete(id);
        this.cache.completed.add(id);
      } else {
        this.cache.completed.delete(id);
        this.cache.pending.add(id);
      }
    }

    // Update priority index
    if (updates.priority !== undefined && updates.priority !== item.priority) {
      if (item.priority) {
        const oldPrioritySet = this.cache.byPriority.get(item.priority);
        oldPrioritySet?.delete(id);
      }
      if (updates.priority) {
        const newPrioritySet =
          this.cache.byPriority.get(updates.priority) || new Set();
        newPrioritySet.add(id);
        this.cache.byPriority.set(updates.priority, newPrioritySet);
      }
    }

    // Update drawing index
    if (
      updates.drawingId !== undefined &&
      updates.drawingId !== item.drawingId
    ) {
      if (item.drawingId) {
        const oldDrawingSet = this.cache.byDrawing.get(item.drawingId);
        oldDrawingSet?.delete(id);
      }
      if (updates.drawingId) {
        const newDrawingSet =
          this.cache.byDrawing.get(updates.drawingId) || new Set();
        newDrawingSet.add(id);
        this.cache.byDrawing.set(updates.drawingId, newDrawingSet);
      }
    }

    // Update main cache
    this.cache.byId.set(id, updatedItem);

    // Update store
    const todos = Object.fromEntries(this.cache.byId);
    this.setStoreData(this.dataKey, todos as any);
  }

  delete(id: string): void {
    const item = this.cache.byId.get(id);
    if (!item) return;

    // Remove from all indexes
    this.cache.byId.delete(id);
    this.cache.order = this.cache.order.filter((tid) => tid !== id);

    if (item.completed) {
      this.cache.completed.delete(id);
    } else {
      this.cache.pending.delete(id);
    }

    if (item.drawingId) {
      const drawingSet = this.cache.byDrawing.get(item.drawingId);
      drawingSet?.delete(id);
    }

    if (item.priority) {
      const prioritySet = this.cache.byPriority.get(item.priority);
      prioritySet?.delete(id);
    }

    // Update store
    const todos = Object.fromEntries(this.cache.byId);
    this.setStoreData(this.dataKey, todos as any);
    this.setStoreData(this.orderKey, this.cache.order);
  }

  // Specialized queries using indexes
  getDrawingTodos(drawingId: string): Todo[] {
    const todoIds = this.cache.byDrawing.get(drawingId);
    if (!todoIds) return [];
    return Array.from(todoIds).map((id) => this.cache.byId.get(id)!);
  }

  getCompletedTodos(): Todo[] {
    return Array.from(this.cache.completed).map(
      (id) => this.cache.byId.get(id)!
    );
  }

  getPendingTodos(): Todo[] {
    return Array.from(this.cache.pending).map((id) => this.cache.byId.get(id)!);
  }

  getTodosByPriority(priority: Todo["priority"]): Todo[] {
    if (!priority) return [];
    const todoIds = this.cache.byPriority.get(priority);
    if (!todoIds) return [];
    return Array.from(todoIds).map((id) => this.cache.byId.get(id)!);
  }
}
