import { BrowserWindow, ipcMain } from "electron";
import path from "node:path";
import { __dirname } from "../main";

export const WINDOW_SIZES = {
  compact: {
    width: 400,
    height: 600,
    minWidth: 400,
    minHeight: 600,
    maxWidth: 400,
    maxHeight: 800,
  },
  full: {
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
  },
};

export class WindowManager {
  private mainWindow: BrowserWindow | null = null;
  private isCompact = false;
  private isAlwaysOnTop = false;
  private wasMaximized = false;

  createWindow() {
    this.mainWindow = new BrowserWindow({
      width: WINDOW_SIZES.full.width,
      height: WINDOW_SIZES.full.height,
      minWidth: WINDOW_SIZES.full.minWidth,
      minHeight: WINDOW_SIZES.full.minHeight,
      autoHideMenuBar: true,
      transparent: false,
      visualEffectState: "active",
      frame: false,
      titleBarStyle: "hidden",
      alwaysOnTop: this.isAlwaysOnTop,
      webPreferences: {
        preload: path.join(__dirname, "preload.mjs"),
        contextIsolation: true,
        nodeIntegration: false,
      },
    });

    ipcMain.on("window:minimize", () => {
      this.mainWindow?.minimize();
    });

    ipcMain.on("window:maximize", () => {
      if (this.mainWindow?.isMaximized()) {
        this.mainWindow.unmaximize();
      } else {
        this.mainWindow?.maximize();
      }
    });

    ipcMain.on("window:close", () => {
      this.mainWindow?.close();
    });

    return this.mainWindow;
  }

  toggleCompactMode() {
    if (!this.mainWindow) return false;

    this.isCompact = !this.isCompact;

    if (this.isCompact) {
      this.wasMaximized = this.mainWindow.isMaximized();
      this.mainWindow.unmaximize();

      this.mainWindow.setMinimumSize(
        WINDOW_SIZES.compact.minWidth,
        WINDOW_SIZES.compact.minHeight
      );
      this.mainWindow.setMaximumSize(
        WINDOW_SIZES.compact.maxWidth,
        WINDOW_SIZES.compact.maxHeight
      );

      this.mainWindow.setSize(
        WINDOW_SIZES.compact.width,
        WINDOW_SIZES.compact.height
      );

      this.isAlwaysOnTop = true;
      this.mainWindow.setAlwaysOnTop(true, "floating");
      this.mainWindow.setVisibleOnAllWorkspaces(true);
    } else {
      this.isAlwaysOnTop = false;
      this.mainWindow.setAlwaysOnTop(false);
      this.mainWindow.setVisibleOnAllWorkspaces(false);

      this.mainWindow.setMinimumSize(
        WINDOW_SIZES.full.minWidth,
        WINDOW_SIZES.full.minHeight
      );
      this.mainWindow.setMaximumSize(0, 0);

      this.mainWindow.setSize(
        WINDOW_SIZES.full.width,
        WINDOW_SIZES.full.height
      );

      if (this.wasMaximized) {
        this.mainWindow.maximize();
      }
    }

    return this.isCompact;
  }

  toggleAlwaysOnTop() {
    if (!this.mainWindow || !this.isCompact) return false;

    this.isAlwaysOnTop = !this.isAlwaysOnTop;
    this.mainWindow.setAlwaysOnTop(this.isAlwaysOnTop, "floating");
    this.mainWindow.setVisibleOnAllWorkspaces(this.isAlwaysOnTop);

    return this.isAlwaysOnTop;
  }

  loadApp() {
    if (!this.mainWindow) return;

    const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
    if (VITE_DEV_SERVER_URL) {
      this.mainWindow.loadURL(VITE_DEV_SERVER_URL);
      this.mainWindow.webContents.openDevTools();
    } else {
      this.mainWindow.loadFile(
        path.join(process.env.APP_ROOT!, "dist", "index.html")
      );
    }
  }

  getWindow() {
    return this.mainWindow;
  }
}
