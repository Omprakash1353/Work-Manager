import { SidebarSubItemProps } from "./types";
import { NotificationBadge } from "./notification-badge";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { CustomTooltip } from "@/components/custom/tooltip";

export function SidebarSubItem({ item, isCollapsed, onClick }: SidebarSubItemProps) {
  const button = (
    <SidebarMenuButton
      className="group relative w-full flex items-center px-2 py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:bg-[#e5e5e5]/50 dark:hover:bg-[#323232]/50 rounded-md transition-colors"
      onClick={onClick}
    >
      <div className="relative flex items-center justify-center mr-2.5 w-5 h-5">
        <div className="relative w-full h-full flex items-center justify-center">
          {item.icon}
        </div>
        {isCollapsed && item.notifications && (
          <div className="absolute -top-2 -right-2 z-10">
            <NotificationBadge count={item.notifications} />
          </div>
        )}
      </div>
      {!isCollapsed && (
        <div className="flex-1 flex items-center justify-between">
          <span>{item.label}</span>
          {item.notifications && (
            <NotificationBadge count={item.notifications} />
          )}
        </div>
      )}
    </SidebarMenuButton>
  );

  return (
    <SidebarMenuItem className="px-2">
      {isCollapsed ? (
        <CustomTooltip content={item.label}>
          {button}
        </CustomTooltip>
      ) : (
        button
      )}
    </SidebarMenuItem>
  );
} 