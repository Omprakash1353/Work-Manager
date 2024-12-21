import { SettingsDataStore } from "./abstract/SettingsDataStore";
import { StoreData } from "./types";

export class SettingsStore extends SettingsDataStore<StoreData["settings"]> {
  protected readonly dataKey = "settings" as const;

  getShowCompleted(): boolean {
    const settings = this.getStoreData("settings");
    return settings.todoDefaults.showCompleted;
  }

  setShowCompleted(show: boolean): void {
    const settings = this.getStoreData("settings");
    this.setStoreData("settings", {
      ...settings,
      todoDefaults: {
        ...settings.todoDefaults,
        showCompleted: show,
      },
    });
  }
}
