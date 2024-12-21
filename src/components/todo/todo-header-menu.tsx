import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useTodoStore } from "@/store/todo-store";
import { useWindowStore } from "@/store/window-store";
import {
  CheckSquare,
  Maximize2,
  Minimize,
  MoreHorizontal,
  Pin,
  SlidersHorizontal,
  SortAsc,
  SortDesc,
  Square,
} from "lucide-react";

export function TodoHeaderMenu() {
  const sortTodos = useTodoStore((state) => state.sortTodos);
  const setShowCompleted = useTodoStore((state) => state.setShowCompleted);
  const showCompleted = useTodoStore((state) => state.showCompleted);
  const clearCompletedTodos = useTodoStore(
    (state) => state.clearCompletedTodos
  );
  const isCompact = useWindowStore((state) => state.isCompact);
  const isAlwaysOnTop = useWindowStore((state) => state.isAlwaysOnTop);
  const setCompact = useWindowStore((state) => state.setCompact);
  const setAlwaysOnTop = useWindowStore((state) => state.setAlwaysOnTop);

  const handleToggleCompact = async () => {
    const result = await window.windowAPI.toggleCompactMode();
    setCompact(result);
  };

  const handleToggleAlwaysOnTop = async () => {
    const result = await window.windowAPI.toggleAlwaysOnTop();
    setAlwaysOnTop(result);
  };

  return (
    <div className={cn("flex items-center gap-1", isCompact && "scale-90")}>
      <Button
        variant="ghost"
        size="icon"
        className={cn("h-8 w-8", isCompact && "text-primary")}
        onClick={handleToggleCompact}
        title={isCompact ? "Expand" : "Compact mode"}
      >
        {isCompact ? (
          <Maximize2 className="h-4 w-4" />
        ) : (
          <Minimize className="h-4 w-4" />
        )}
      </Button>
      {isCompact && (
        <Button
          variant={isAlwaysOnTop ? "secondary" : "ghost"}
          size="icon"
          className={cn("h-8 w-8", isAlwaysOnTop && "text-primary")}
          onClick={handleToggleAlwaysOnTop}
          title="Always on top"
        >
          <Pin className={cn("h-4 w-4", isAlwaysOnTop && "rotate-45")} />
        </Button>
      )}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sort & Filter</SheetTitle>
          </SheetHeader>
          <div className="py-4">
            <div className="flex flex-col gap-2">
              <Button
                variant="ghost"
                className="justify-start"
                onClick={() => sortTodos("asc")}
              >
                <SortAsc className="h-4 w-4 mr-2" />
                Sort A to Z
              </Button>
              <Button
                variant="ghost"
                className="justify-start"
                onClick={() => sortTodos("desc")}
              >
                <SortDesc className="h-4 w-4 mr-2" />
                Sort Z to A
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setShowCompleted(!showCompleted)}>
            {showCompleted ? (
              <Square className="h-4 w-4 mr-2 text-muted-foreground/50" />
            ) : (
              <CheckSquare className="h-4 w-4 mr-2 text-primary" />
            )}
            {showCompleted ? "Hide" : "Show"} completed tasks
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => clearCompletedTodos()}
            className="text-destructive focus:text-destructive"
          >
            Clear completed tasks
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
