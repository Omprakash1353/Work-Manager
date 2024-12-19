import {
  Calendar,
  CheckCircle2,
  ClipboardList,
  Coffee,
  Inbox,
  Sparkles,
  Star,
  Timer,
} from "lucide-react";
import { cn } from "@/lib/utils";

function FloatingIcon({
  icon: Icon,
  className,
  size = "w-12 h-12",
  style = "",
}: {
  icon: any;
  className?: string;
  size?: string;
  style?: string;
}) {
  return (
    <div className={cn("absolute transition-all duration-500", style)}>
      <Icon
        className={cn(
          size,
          "transition-all duration-500 hover:scale-110",
          className
        )}
      />
    </div>
  );
}

export default function Template() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-2rem)] w-full p-8">
      <div className="relative w-[480px] h-[480px] mb-12">
        {/* Background Gradient */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[420px] h-[420px] bg-gradient-to-br from-blue-50/90 to-purple-50/90 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl" />
        </div>

        {/* Main Content */}
        <div className="relative w-full h-full flex items-center justify-center">
          <FloatingIcon
            icon={ClipboardList}
            className="text-blue-500/20 dark:text-blue-400/10 hover:text-blue-500/40 dark:hover:text-blue-400/30"
            size="w-16 h-16"
            style="-translate-x-[140px] translate-y-[20px]"
          />
          <FloatingIcon
            icon={Sparkles}
            className="text-purple-500/20 dark:text-purple-400/10 hover:text-purple-500/40 dark:hover:text-purple-400/30"
            size="w-8 h-8"
            style="translate-x-[160px] -translate-y-[100px]"
          />
          <FloatingIcon
            icon={Inbox}
            className="text-indigo-500/20 dark:text-indigo-400/10 hover:text-indigo-500/40 dark:hover:text-indigo-400/30"
            size="w-14 h-14"
            style="-translate-x-[180px] translate-y-[120px]"
          />
          <FloatingIcon
            icon={Calendar}
            className="text-blue-500/20 dark:text-blue-400/10 hover:text-blue-500/40 dark:hover:text-blue-400/30"
            size="w-10 h-10"
            style="translate-x-[200px] translate-y-[60px]"
          />
          <FloatingIcon
            icon={Timer}
            className="text-purple-500/20 dark:text-purple-400/10 hover:text-purple-500/40 dark:hover:text-purple-400/30"
            size="w-12 h-12"
            style="translate-x-[120px] translate-y-[160px]"
          />
          <FloatingIcon
            icon={Star}
            className="text-amber-500/20 dark:text-amber-400/10 hover:text-amber-500/40 dark:hover:text-amber-400/30"
            size="w-8 h-8"
            style="-translate-x-[100px] -translate-y-[140px]"
          />

          {/* Center Element */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-400/10 dark:to-purple-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative w-36 h-36 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-all duration-500">
              <Coffee className="w-20 h-20 text-gray-600/80 dark:text-gray-300/80 group-hover:rotate-12 transition-transform duration-500" />
            </div>

            {/* Status Message */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 dark:bg-gray-800/90 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                All caught up!
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center max-w-md mx-auto px-6">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Time for a Break
        </h3>
        <p className="text-base text-gray-600 dark:text-gray-300">
          You've completed all your tasks! Take a moment to recharge, or create
          a new task to keep the momentum going.
        </p>
      </div>
    </div>
  );
}
