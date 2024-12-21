import {
  Archive,
  Calendar,
  Eraser,
  Inbox,
  Layers,
  ListTodo,
  NotebookText,
  Star,
  Timer,
} from "lucide-react";
import { SidebarGroup } from "./types";

export const sidebarItems: SidebarGroup[] = [
  {
    label: "Inbox",
    groupIcon: <Inbox />,
    notifications: 3,
    items: [
      { icon: <Star />, label: "Today", url: "/today", notifications: 2 },
      { icon: <Calendar />, label: "Upcoming", url: "/upcoming" },
      { icon: <Layers />, label: "Anytime", url: "/anytime" },
      { icon: <Archive />, label: "Someday", url: "/someday" },
      { icon: <Timer />, label: "Time", url: "/timers" },
      { icon: <Eraser />, label: "Draw", url: "/draw", notifications: 1 },
      { icon: <ListTodo />, label: "Todos", url: "/todos", notifications: 1 },
    ],
  },
  {
    label: "Book",
    groupIcon: <NotebookText />,
  },
];
