import { app, BrowserWindow } from "electron";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { setupIpcHandlers } from "./main/ipc-handlers";
import { WindowManager } from "./main/window";

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

process.env.APP_ROOT = path.join(__dirname, "..");
process.env.VITE_PUBLIC = path.join(process.env.APP_ROOT, "public");

const windowManager = new WindowManager();

function createWindow() {
  const mainWindow = windowManager.createWindow();

  mainWindow.webContents.on("did-finish-load", () => {
    mainWindow?.webContents.send("main-process-message", {
      type: "init",
      message: "Application initialized",
      timestamp: new Date().toISOString(),
    });
  });

  setupIpcHandlers(windowManager);
  windowManager.loadApp();
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
