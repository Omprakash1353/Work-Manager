import { Drawing, StoreKey } from "./types";
import { DataStore } from "./abstract/DataStore";
import { ICacheStore } from "./interfaces";

type DrawingCache = {
  byId: Map<string, Drawing>;
  byFolder: Map<string, Set<string>>;
  recent: string[];
  order: string[];
};

export class DrawingsStore
  extends DataStore<Drawing>
  implements ICacheStore<Drawing>
{
  protected readonly dataKey: Extract<StoreKey, `${string}s`> = "drawings";
  protected readonly orderKey: Extract<StoreKey, `${string}List`> =
    "drawingsList";

  private cache: DrawingCache = {
    byId: new Map(),
    byFolder: new Map(),
    recent: [],
    order: [],
  };

  constructor(store: any) {
    super(store);
    this.initializeCache();
  }

  private initializeCache(): void {
    const drawings = this.getStoreData(this.dataKey) as Record<string, Drawing>;
    const order = this.getStoreData(this.orderKey) as string[];
    const recent = this.getStoreData("recentDrawings") as string[];
    const folders = this.getStoreData("folders");

    // Initialize byId cache
    this.cache.byId = new Map(Object.entries(drawings));
    this.cache.order = order;
    this.cache.recent = recent;

    // Initialize byFolder cache
    this.cache.byFolder = new Map();
    Object.entries(folders).forEach(([folderId, folder]) => {
      this.cache.byFolder.set(folderId, new Set(folder.drawings));
    });
  }

  get(id: string): Drawing | undefined {
    return this.cache.byId.get(id);
  }

  getAll(): Drawing[] {
    return this.cache.order.map((id) => this.cache.byId.get(id)!);
  }

  protected createItem(data: Omit<Drawing, "id">): Drawing {
    return {
      ...data,
      id: Date.now().toString(),
      created: new Date().toISOString(),
      edited: new Date().toISOString(),
      comments: 0,
    };
  }

  add(data: Omit<Drawing, "id">): Drawing {
    const item = this.createItem(data);

    // Update cache
    this.cache.byId.set(item.id, item);
    this.cache.order.unshift(item.id);

    // Update store
    const drawings = Object.fromEntries(this.cache.byId);
    this.setStoreData(this.dataKey, drawings as any);
    this.setStoreData(this.orderKey, this.cache.order);

    // Add to recent
    this.addToRecent(item.id);

    return item;
  }

  update(id: string, updates: Partial<Drawing>): void {
    const item = this.cache.byId.get(id);
    if (!item) return;

    const updatedItem = {
      ...item,
      ...updates,
      edited: new Date().toISOString(),
    };

    // Update cache
    this.cache.byId.set(id, updatedItem);

    // Update store
    const drawings = Object.fromEntries(this.cache.byId);
    this.setStoreData(this.dataKey, drawings as any);
  }

  getRecent(limit: number = 10): Drawing[] {
    return this.cache.recent
      .slice(0, limit)
      .map((id) => this.cache.byId.get(id))
      .filter((drawing): drawing is Drawing => !!drawing);
  }

  addToRecent(id: string): void {
    this.cache.recent = [
      id,
      ...this.cache.recent.filter((rid) => rid !== id),
    ].slice(0, 10);

    this.setStoreData("recentDrawings", this.cache.recent);
  }

  removeFromRecent(id: string): void {
    this.cache.recent = this.cache.recent.filter((rid) => rid !== id);
    this.setStoreData("recentDrawings", this.cache.recent);
  }

  getByFolder(folderId: string): Drawing[] {
    const drawingIds = this.cache.byFolder.get(folderId);
    if (!drawingIds) return [];

    return Array.from(drawingIds)
      .map((id) => this.cache.byId.get(id))
      .filter((drawing): drawing is Drawing => !!drawing);
  }

  override delete(id: string): void {
    // Update caches
    this.cache.byId.delete(id);
    this.cache.order = this.cache.order.filter((did) => did !== id);
    this.removeFromRecent(id);

    // Remove from folders
    this.cache.byFolder.forEach((drawingIds) => {
      drawingIds.delete(id);
    });

    // Update store
    const drawings = Object.fromEntries(this.cache.byId);
    this.setStoreData(this.dataKey, drawings as any);
    this.setStoreData(this.orderKey, this.cache.order);

    // Update folders in store
    const folders = this.getStoreData("folders");
    Object.entries(folders).forEach(([_, folder]) => {
      folder.drawings = folder.drawings.filter((did) => did !== id);
    });
    this.setStoreData("folders", folders);
  }
}
