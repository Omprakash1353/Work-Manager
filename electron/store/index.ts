import Store from "electron-store";
import { StoreData } from "./types";
import { DrawingsStore } from "./DrawingsStore";
import { TodosStore } from "./TodosStore";
import { SettingsStore } from "./SettingsStore";

const store = new Store<StoreData>({
  defaults: {
    drawings: {},
    drawingsList: [],
    todos: {},
    todosList: [],
    settings: {
      theme: "light",
      notifications: true,
      language: "en",
      drawingDefaults: {
        autoSave: true,
        saveInterval: 5,
        defaultLocation: "Unsorted",
      },
      todoDefaults: {
        defaultPriority: "medium",
        showCompleted: true,
      },
    },
    recentDrawings: [],
    folders: {},
    folderHierarchy: [],
  },
});

export const drawingsStore = new DrawingsStore(store);
export const todosStore = new TodosStore(store);
export const settingsStore = new SettingsStore(store);
