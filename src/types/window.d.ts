import { Todo } from "../../electron/store/types";

declare global {
  interface Window {
    todosAPI: {
      getAllTodos: () => Promise<Todo[]>;
      addTodo: (todo: Omit<Todo, "id" | "created">) => Promise<Todo>;
      updateTodo: (id: string, updates: Partial<Todo>) => Promise<void>;
      deleteTodo: (id: string) => Promise<void>;
    };
    windowAPI: {
      toggleCompactMode: () => Promise<boolean>;
      toggleAlwaysOnTop: () => Promise<boolean>;
    };
    ipcRenderer: {
      send: (channel: string, ...args: any[]) => void;
    };
    settingsAPI: {
      getShowCompleted: () => Promise<boolean>;
      setShowCompleted: (show: boolean) => Promise<void>;
    };
  }
}
