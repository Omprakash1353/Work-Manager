import { NotificationBadgeProps } from "./types";

export function NotificationBadge({ count }: NotificationBadgeProps) {
  return (
    <span className="min-w-[18px] h-[18px] px-1 inline-flex items-center justify-center text-[10px] font-medium bg-blue-500 text-white dark:text-white rounded-full">
      {count}
    </span>
  );
}
