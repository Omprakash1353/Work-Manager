import { create } from "zustand";
import { Todo } from "../../electron/store/types";

interface TodoState {
  todos: Todo[];
  showCompleted: boolean;
  loadTodos: () => Promise<void>;
  addTodo: (title: string) => Promise<void>;
  toggleTodo: (id: string, completed: boolean) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
  markImportant: (id: string) => Promise<void>;
  setDueDate: (id: string, date: string) => Promise<void>;
  sortTodos: (direction: "asc" | "desc") => void;
  setShowCompleted: (show: boolean) => Promise<void>;
  clearCompletedTodos: () => Promise<void>;
}

export const useTodoStore = create<TodoState>((set, get) => ({
  todos: [],
  showCompleted: true,

  loadTodos: async () => {
    const todos = await window.todosAPI.getAllTodos();
    set({ todos });
  },

  addTodo: async (title) => {
    if (!title.trim()) return;
    const newTodo = await window.todosAPI.addTodo({
      title,
      completed: false,
    });
    set((state) => ({ todos: [...state.todos, newTodo] }));
  },

  toggleTodo: async (id, completed) => {
    await window.todosAPI.updateTodo(id, { completed });
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      ),
    }));
  },

  deleteTodo: async (id) => {
    await window.todosAPI.deleteTodo(id);
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },

  markImportant: async (id) => {
    const todo = get().todos.find((t) => t.id === id);
    if (!todo) return;
    const important = !todo.important;
    await window.todosAPI.updateTodo(id, { important });
    set((state) => ({
      todos: state.todos.map((t) => (t.id === id ? { ...t, important } : t)),
    }));
  },

  setDueDate: async (id, date) => {
    await window.todosAPI.updateTodo(id, { dueDate: date });
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, dueDate: date } : todo
      ),
    }));
  },

  sortTodos: (direction) => {
    set((state) => ({
      todos: [...state.todos].sort((a, b) => {
        if (direction === "asc") {
          return a.title.localeCompare(b.title);
        }
        return b.title.localeCompare(a.title);
      }),
    }));
  },

  setShowCompleted: async (show) => {
    await window.settingsAPI.setShowCompleted(show);
    set({ showCompleted: show });
  },

  clearCompletedTodos: async () => {
    const completedTodos = get().todos.filter((todo) => todo.completed);
    for (const todo of completedTodos) {
      await window.todosAPI.deleteTodo(todo.id);
    }
    set((state) => ({
      todos: state.todos.filter((todo) => !todo.completed),
    }));
  },
}));

export const useVisibleTodos = () => {
  const todos = useTodoStore((state) => state.todos);
  const showCompleted = useTodoStore((state) => state.showCompleted);
  return showCompleted ? todos : todos.filter((todo) => !todo.completed);
};

// Initialize the store with saved settings
window.settingsAPI.getShowCompleted().then((show) => {
  useTodoStore.setState({ showCompleted: show });
});
