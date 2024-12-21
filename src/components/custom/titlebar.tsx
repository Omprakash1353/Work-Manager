import { cn } from "@/lib/utils";
import { useWindowStore } from "@/store/window-store";
import { Maximize2, Minus, X } from "lucide-react";

export function Titlebar() {
  const isCompact = useWindowStore((state) => state.isCompact);

  const handleMinimize = () => {
    window.ipcRenderer.send("window:minimize");
  };

  const handleMaximize = () => {
    window.ipcRenderer.send("window:maximize");
  };

  const handleClose = () => {
    window.ipcRenderer.send("window:close");
  };

  return (
    <div
      className={cn(
        "flex items-center bg-background/95 backdrop-blur-sm border-b border-border/40 select-none app-drag-handle relative",
        isCompact ? "h-8" : "h-10"
      )}
    >
      {/* Center section with app title */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-sm font-medium">
          {!isCompact && "Todo Application"}
        </span>
      </div>

      {/* Right section with window controls */}
      <div className={cn("ml-auto flex items-center app-no-drag")}>
        {!isCompact && (
          <>
            <button
              onClick={handleMinimize}
              className="h-10 w-10 inline-flex items-center justify-center hover:bg-accent transition-colors"
            >
              <Minus className="h-4 w-4" />
            </button>
            <button
              onClick={handleMaximize}
              className="h-10 w-10 inline-flex items-center justify-center hover:bg-accent transition-colors"
            >
              <Maximize2 className="h-4 w-4" />
            </button>
          </>
        )}
        <button
          onClick={handleClose}
          className={cn(
            "inline-flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-colors",
            isCompact ? "h-8 w-8" : "h-10 w-10"
          )}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
