import { ReactNode } from "react";

export interface SidebarItem {
  icon: ReactNode;
  label: string;
  url: string;
  notifications?: number;
}

export interface SidebarGroup {
  label: string;
  groupIcon: ReactNode;
  notifications?: number;
  items?: SidebarItem[];
}

export interface NotificationBadgeProps {
  count: number;
}

export interface SidebarGroupItemProps {
  group: SidebarGroup;
  isCollapsed: boolean;
}

export interface SidebarSubItemProps {
  item: SidebarItem;
  isCollapsed: boolean;
  onClick: () => void;
}
