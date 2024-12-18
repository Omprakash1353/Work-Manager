import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron", {
  ipcRenderer: {
    send: (channel: string, ...args: any[]) => {
      const validChannels = [
        "window-minimize",
        "window-maximize",
        "window-close",
        "main-process-message",
      ];

      if (validChannels.includes(channel)) {
        ipcRenderer.send(channel, ...args);
      } else {
        console.error(`Attempted to send to invalid channel: ${channel}`);
      }
    },
    on: (channel: string, func: (...args: any[]) => void) => {
      const wrappedFunc = (_event: any, ...args: any[]) => func(...args);

      try {
        ipcRenderer.on(channel, wrappedFunc);
        return () => {
          ipcRenderer.removeListener(channel, wrappedFunc);
        };
      } catch (error) {
        console.error(
          `Error setting up listener for channel ${channel}:`,
          error
        );
        return () => {};
      }
    },
    invoke: (channel: string, ...args: any[]) => {
      return ipcRenderer.invoke(channel, ...args);
    },
  },
});
