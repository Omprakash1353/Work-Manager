import { SidebarGroupItemProps } from "./types";
import { NotificationBadge } from "./notification-badge";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { CustomTooltip } from "@/components/custom/tooltip";

export function SidebarGroupItem({
  group,
  isCollapsed,
}: SidebarGroupItemProps) {
  const button = (
    <SidebarMenuButton className="group relative w-full flex items-center px-2 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-[#e5e5e5]/50 dark:hover:bg-[#323232]/50 rounded-md transition-colors">
      <div className="relative flex items-center justify-center mr-2.5 w-5 h-5">
        <div className="relative w-full h-full flex items-center justify-center">
          {group.groupIcon}
        </div>
        {isCollapsed && group.notifications && (
          <div className="absolute -top-2 -right-2 z-10">
            <NotificationBadge count={group.notifications} />
          </div>
        )}
      </div>
      {!isCollapsed && (
        <div className="flex-1 flex items-center justify-between">
          <span>{group.label}</span>
          {group.notifications && (
            <NotificationBadge count={group.notifications} />
          )}
        </div>
      )}
    </SidebarMenuButton>
  );

  return (
    <SidebarMenuItem className="mb-1 px-2">
      {isCollapsed ? (
        <CustomTooltip content={group.label}>
          {button}
        </CustomTooltip>
      ) : (
        button
      )}
    </SidebarMenuItem>
  );
}
