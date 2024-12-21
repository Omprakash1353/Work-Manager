import { TodoHeaderMenu } from "@/components/todo/todo-header-menu";
import { TodoItem } from "@/components/todo/todo-item";
import { Input } from "@/components/ui/input";
import { useTodoStore, useVisibleTodos } from "@/store/todo-store";
import { useWindowStore } from "@/store/window-store";
import { CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function TodoList() {
  const todos = useVisibleTodos();
  const addTodo = useTodoStore((state) => state.addTodo);
  const isCompact = useWindowStore((state) => state.isCompact);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    await addTodo(newTodoTitle);
    setNewTodoTitle("");
  };

  return (
    <div
      className={cn(
        "flex-1 overflow-auto",
        isCompact ? "px-2 py-2 space-y-1" : "px-4 py-4 space-y-2"
      )}
    >
      <form onSubmit={handleAddTodo}>
        <div
          className={cn(
            "flex items-center gap-2 bg-card/50 hover:bg-card rounded-md border border-border/40 transition-colors",
            isCompact ? "p-1.5" : "p-2"
          )}
        >
          <div
            className={cn(
              "rounded-full border-2 border-muted-foreground/30",
              isCompact ? "h-4 w-4" : "h-5 w-5"
            )}
          />
          <Input
            type="text"
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            placeholder="Add a task"
            className={cn(
              "flex-1 border-0 bg-transparent focus-visible:ring-0 px-0 h-auto placeholder:text-muted-foreground/50",
              isCompact ? "text-sm py-0.5" : "py-1"
            )}
          />
        </div>
      </form>

      <div className="space-y-0.5 overflow-auto">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} isCompact={isCompact} />
        ))}
      </div>
    </div>
  );
}

export default function Todos() {
  const loadTodos = useTodoStore((state) => state.loadTodos);
  const isCompact = useWindowStore((state) => state.isCompact);

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  return (
    <div className="flex flex-col h-full bg-background overflow-hidden">
      <div className="flex flex-col border-b border-border/40 flex-shrink-0">
        <div
          className={cn(
            "flex items-center justify-between",
            isCompact ? "px-2 h-10" : "px-6 h-14"
          )}
        >
          <h1
            className={cn(
              "font-semibold text-foreground",
              isCompact ? "text-base" : "text-xl"
            )}
          >
            My Day
          </h1>
          <TodoHeaderMenu />
        </div>
        {!isCompact && (
          <div className="px-6 pb-4 text-sm text-muted-foreground flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </div>
        )}
      </div>
      <TodoList />
    </div>
  );
}
