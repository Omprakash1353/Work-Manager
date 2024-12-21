import { IDataStore } from "../interfaces";
import { StoreData, StoreKey } from "../types";
import { BaseStore } from "./BaseStore";

type DataRecord<T> = Record<string, T>;

export abstract class DataStore<T extends { id: string }>
  extends BaseStore
  implements IDataStore<T>
{
  protected abstract readonly dataKey: Extract<StoreKey, `${string}s`>;
  protected abstract readonly orderKey: Extract<StoreKey, `${string}List`>;

  get(id: string): T | undefined {
    const items = this.getStoreData(this.dataKey) as unknown as Record<
      string,
      T
    >;
    return items[id];
  }

  getAll(): T[] {
    const items = this.getStoreData(this.dataKey) as unknown as Record<
      string,
      T
    >;
    const order = this.getStoreData(this.orderKey) as string[];
    return order.map((id) => items[id]);
  }

  protected abstract createItem(data: Omit<T, "id">): T;

  add(data: Omit<T, "id">): T {
    const item = this.createItem(data);
    const items = this.getStoreData(this.dataKey) as unknown as DataRecord<T>;
    const order = this.getStoreData(this.orderKey) as unknown as string[];

    const updatedItems = {
      ...items,
      [item.id]: item,
    } as unknown as StoreData[typeof this.dataKey];

    this.setStoreData(this.dataKey, updatedItems);
    this.setStoreData(this.orderKey, [item.id, ...order]);

    return item;
  }

  update(id: string, updates: Partial<T>): void {
    const items = this.getStoreData(this.dataKey) as unknown as DataRecord<T>;
    const item = items[id];
    if (!item) return;

    const updatedItems = {
      ...items,
      [id]: { ...item, ...updates },
    } as unknown as StoreData[typeof this.dataKey];

    this.setStoreData(this.dataKey, updatedItems);
  }

  delete(id: string): void {
    const items = this.getStoreData(this.dataKey) as unknown as DataRecord<T>;
    const order = this.getStoreData(this.orderKey) as unknown as string[];

    const { [id]: removed, ...remaining } = items;

    this.setStoreData(
      this.dataKey,
      remaining as unknown as StoreData[typeof this.dataKey]
    );
    this.setStoreData(
      this.orderKey,
      order.filter((itemId) => itemId !== id)
    );
  }
}
