export interface Drawing {
  id: string;
  name: string;
  location?: string;
  created: string;
  edited: string;
  comments: number;
  author: string;
  content?: string;
}

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  created: string;
  dueDate?: string;
  priority?: "low" | "medium" | "high";
  drawingId?: string;
  important?: boolean;
}

export interface StoreData {
  drawings: Record<string, Drawing>;
  drawingsList: string[];
  todos: Record<string, Todo>;
  todosList: string[];
  settings: {
    theme: "light" | "dark";
    notifications: boolean;
    language: string;
    drawingDefaults: {
      autoSave: boolean;
      saveInterval: number;
      defaultLocation: string;
    };
    todoDefaults: {
      defaultPriority: "medium";
      showCompleted: boolean;
    };
  };
  recentDrawings: string[];
  folders: Record<
    string,
    {
      id: string;
      name: string;
      parentId?: string;
      drawings: string[];
    }
  >;
  folderHierarchy: string[];
}

export type StoreKey = keyof StoreData;
