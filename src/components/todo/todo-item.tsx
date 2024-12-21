import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { useTodoStore } from "@/store/todo-store";
import { CheckCircle2, Circle } from "lucide-react";
import { Todo } from "../../../electron/store/types";
import { TodoMenu } from "./todo-menu";

interface TodoItemProps {
  todo: Todo;
  isCompact?: boolean;
}

export function TodoItem({ todo, isCompact }: TodoItemProps) {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);

  return (
    <div
      className={cn(
        "flex items-center hover:bg-accent rounded-md group transition-colors",
        isCompact ? "p-1.5 gap-1.5" : "p-3 gap-3"
      )}
    >
      <div
        className={cn(
          "relative flex items-center justify-center",
          isCompact ? "w-4 h-4" : "w-5 h-5"
        )}
      >
        <Checkbox
          checked={todo.completed}
          onCheckedChange={(checked) => toggleTodo(todo.id, checked as boolean)}
          className={cn(
            "absolute inset-0 z-10 cursor-pointer",
            "border-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent",
            "hover:text-primary transition-colors",
            todo.completed ? "text-primary" : "text-muted-foreground",
            isCompact ? "w-4 h-4" : "w-5 h-5"
          )}
          icon={
            <CheckCircle2
              className={cn("stroke-2", isCompact ? "h-4 w-4" : "h-5 w-5")}
            />
          }
        />
        {!todo.completed && (
          <Circle
            className={cn(
              "stroke-[1.5] absolute text-muted-foreground/50 pointer-events-none",
              isCompact ? "h-4 w-4" : "h-5 w-5"
            )}
          />
        )}
      </div>
      <TodoMenu todo={todo} isCompact={isCompact}>
        <span
          className={cn(
            "flex-1 truncate text-sm leading-none py-1",
            todo.completed && "line-through text-muted-foreground",
            !isCompact && "text-base leading-none py-1.5"
          )}
        >
          {todo.title}
        </span>
      </TodoMenu>
    </div>
  );
}
