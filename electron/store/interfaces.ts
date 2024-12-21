export interface IDataStore<T> {
  get(id: string): T | undefined;
  getAll(): T[];
  add(item: Omit<T, "id">): T;
  update(id: string, updates: Partial<T>): void;
  delete(id: string): void;
}

export interface ICacheStore<T> {
  getRecent(limit?: number): T[];
  addToRecent(id: string): void;
  removeFromRecent(id: string): void;
}
