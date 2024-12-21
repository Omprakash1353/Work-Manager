import { Button } from "@/components/ui/button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CalendarDays, MoreHorizontal, Star, Trash2 } from "lucide-react";
import * as React from "react";
import { Todo } from "../../../electron/store/types";
import { useTodoStore } from "@/store/todo-store";
import { cn } from "@/lib/utils";

interface TodoMenuProps {
  todo: Todo;
  children: React.ReactNode;
  isCompact?: boolean;
}

interface MenuContentProps {
  todo: Todo;
  onClose?: () => void;
  type: "context" | "dropdown";
}

function MenuContent({ todo, onClose, type }: MenuContentProps) {
  const { deleteTodo, markImportant, setDueDate } = useTodoStore();

  const handleAction = async (action: () => Promise<void>) => {
    await action();
    onClose?.();
  };

  const MenuItem = type === "context" ? ContextMenuItem : DropdownMenuItem;
  const MenuSeparator =
    type === "context" ? ContextMenuSeparator : DropdownMenuSeparator;

  return (
    <>
      <MenuItem onClick={() => handleAction(() => markImportant(todo.id))}>
        <Star className="h-4 w-4 mr-2" />
        Mark as important
      </MenuItem>
      <MenuItem
        onClick={() =>
          handleAction(() => setDueDate(todo.id, new Date().toISOString()))
        }
      >
        <CalendarDays className="h-4 w-4 mr-2" />
        Add due date
      </MenuItem>
      <MenuSeparator />
      <MenuItem
        className="text-destructive focus:text-destructive"
        onClick={() => handleAction(() => deleteTodo(todo.id))}
      >
        <Trash2 className="h-4 w-4 mr-2" />
        Delete task
      </MenuItem>
    </>
  );
}

export function TodoMenu({ todo, children, isCompact }: TodoMenuProps) {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="flex-1 flex items-center">
          {children}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "opacity-0 group-hover:opacity-100 transition-opacity ml-auto",
                  isCompact ? "h-6 w-6" : "h-8 w-8"
                )}
              >
                <MoreHorizontal
                  className={cn("h-4 w-4", isCompact && "h-3 w-3")}
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              <MenuContent todo={todo} type="dropdown" />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <MenuContent todo={todo} type="context" />
      </ContextMenuContent>
    </ContextMenu>
  );
}
