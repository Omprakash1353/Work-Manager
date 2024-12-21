import Store from "electron-store";
import { StoreData, StoreKey } from "../types";

export abstract class BaseStore {
  protected store: Store<StoreData>;

  constructor(store: Store<StoreData>) {
    this.store = store;
  }

  protected getStoreData<K extends StoreKey>(key: K): StoreData[K] {
    return this.store.get(key);
  }

  protected setStoreData<K extends StoreKey>(
    key: K,
    value: StoreData[K]
  ): void {
    this.store.set(key, value);
  }
}
