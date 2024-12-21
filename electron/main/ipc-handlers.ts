import { ipcMain } from "electron";
import { WindowManager } from "./window";
import { todosStore } from "../store";
import { settingsStore } from "../store";

export function setupIpcHandlers(windowManager: WindowManager) {
  // Window controls
  ipcMain.handle("toggle-compact-mode", () => {
    return windowManager.toggleCompactMode();
  });

  ipcMain.handle("toggle-always-on-top", () => {
    return windowManager.toggleAlwaysOnTop();
  });

  // Todo operations
  ipcMain.handle("todos:getAll", () => {
    return todosStore.getAll();
  });

  ipcMain.handle("todos:add", (_, todo) => {
    return todosStore.add(todo);
  });

  ipcMain.handle("todos:update", (_, id, updates) => {
    return todosStore.update(id, updates);
  });

  ipcMain.handle("todos:delete", (_, id) => {
    return todosStore.delete(id);
  });

  // Settings handlers
  ipcMain.handle("settings:getShowCompleted", () => {
    return settingsStore.getShowCompleted();
  });

  ipcMain.handle("settings:setShowCompleted", (_, show: boolean) => {
    settingsStore.setShowCompleted(show);
  });
}
