import { contextBridge, ipcRenderer } from "electron";
import { Todo } from "./store/types";

contextBridge.exposeInMainWorld("todosAPI", {
  getAllTodos: () => ipcRenderer.invoke("todos:getAll"),
  addTodo: (todo: Omit<Todo, "id" | "created">) =>
    ipcRenderer.invoke("todos:add", todo),
  updateTodo: (id: string, updates: Partial<Todo>) =>
    ipcRenderer.invoke("todos:update", id, updates),
  deleteTodo: (id: string) => ipcRenderer.invoke("todos:delete", id),
});

contextBridge.exposeInMainWorld("windowAPI", {
  toggleCompactMode: () => ipcRenderer.invoke("toggle-compact-mode"),
  toggleAlwaysOnTop: () => ipcRenderer.invoke("toggle-always-on-top"),
});

contextBridge.exposeInMainWorld("ipcRenderer", {
  send: (channel: string, ...args: any[]) => {
    ipcRenderer.send(channel, ...args);
  },
});

contextBridge.exposeInMainWorld("settingsAPI", {
  getShowCompleted: () => ipcRenderer.invoke("settings:getShowCompleted"),
  setShowCompleted: (show: boolean) =>
    ipcRenderer.invoke("settings:setShowCompleted", show),
});
