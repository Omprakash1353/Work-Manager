import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CommandDialog } from "@/components/custom/command-dialog";
import { ModeToggle } from "@/components/custom/mode-toggler";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Command as CommandPrimitive } from "cmdk";

import { SidebarGroupItem } from "./sidebar-group-item";
import { sidebarItems } from "./sidebar-items";
import { SidebarSubItem } from "./sidebar-sub-item";
import { Button } from "@/components/ui/button";
import { CustomTooltip } from "../tooltip";
import { useWindowStore } from "@/store/window-store";
import { cn } from "@/lib/utils";

export default function SidebarComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = useNavigate();
  const isCompact = useWindowStore((state) => state.isCompact);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [open, setOpen] = useState(false);

  // Force collapse sidebar in compact mode
  useEffect(() => {
    if (isCompact) {
      setIsSidebarCollapsed(true);
    }
  }, [isCompact]);

  // Command (⌘+K) handler
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Collapse (Ctrl+S) handler
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        setIsSidebarCollapsed((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <SidebarProvider>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="flex items-center border-b border-black/10 dark:border-white/10 px-3">
          <Search className="mr-2 h-4 w-4 shrink-0 text-gray-500 dark:text-gray-400" />
          <CommandPrimitive.Input
            placeholder="Type a command or search..."
            className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm text-gray-600 dark:text-gray-300 outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <CommandPrimitive.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2">
          <CommandPrimitive.Empty className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
            No results found.
          </CommandPrimitive.Empty>
          {sidebarItems.map((group) => (
            <CommandPrimitive.Group
              key={group.label}
              heading={group.label}
              className="text-xs font-medium text-gray-500 dark:text-gray-400 px-2 py-1.5"
            >
              {group.items?.map((item) => (
                <CommandPrimitive.Item
                  key={item.label}
                  onSelect={() => {
                    navigate(item.url);
                    setOpen(false);
                  }}
                  className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-md cursor-pointer text-gray-700 dark:text-gray-200 hover:bg-[#f1f1f1] dark:hover:bg-[#2a2b2b] outline-none"
                >
                  <div className="h-4 w-4 text-gray-500 dark:text-gray-400">
                    {item.icon}
                  </div>
                  <span>{item.label}</span>
                </CommandPrimitive.Item>
              ))}
            </CommandPrimitive.Group>
          ))}
        </CommandPrimitive.List>
      </CommandDialog>

      <div className="flex h-full w-full">
        {!isCompact && (
          <div
            className={`${
              isSidebarCollapsed ? "w-20" : "w-64"
            } transition-all duration-300`}
          >
            <Sidebar
              className={`${
                isSidebarCollapsed ? "w-20" : "w-64"
              } flex-shrink-0 bg-background backdrop-blur-xl backdrop-saturate-150 border-r border-[#ededed]/40 dark:border-[#4b4b4b]/40 shadow-sm flex flex-col h-full fixed transition-all duration-300`}
            >
              <SidebarHeader className="p-4 flex-shrink-0">
                <div className="relative w-full">
                  <button
                    onClick={() => setOpen(true)}
                    className={`${
                      isSidebarCollapsed ? "w-10 h-8" : "w-full"
                    } group flex items-center gap-2 px-2.5 py-1.5 text-sm text-gray-600 dark:text-gray-300 bg-[#f1f1f1]/40 dark:bg-[#2a2b2b]/40 hover:bg-[#e5e5e5]/60 dark:hover:bg-[#323232]/60 rounded-md ring-1 ring-black/5 dark:ring-white/10 transition-all duration-200`}
                  >
                    <Search className="h-4 w-4 text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
                    {!isSidebarCollapsed && (
                      <div className="flex flex-1 items-center justify-between">
                        <span className="text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                          Search...
                        </span>
                        <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border border-black/10 dark:border-white/20 bg-[#f6f6f6]/80 dark:bg-[#2a2b2b]/80 px-1.5 font-mono text-[10px] font-medium text-gray-600 dark:text-gray-400 opacity-100 transition-colors">
                          <span className="text-xs">⌘</span>K
                        </kbd>
                      </div>
                    )}
                  </button>
                </div>
              </SidebarHeader>

              <SidebarContent className="flex-1 overflow-auto">
                {sidebarItems.map((group) => (
                  <SidebarGroup key={group.label}>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        <SidebarGroupItem
                          group={group}
                          isCollapsed={isSidebarCollapsed}
                        />
                        {group.items?.map((item) => (
                          <SidebarSubItem
                            key={item.label}
                            item={item}
                            isCollapsed={isSidebarCollapsed}
                            onClick={() => navigate(item.url)}
                          />
                        ))}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                ))}
              </SidebarContent>

              <SidebarFooter className="border-t border-[#ededed]/40 dark:border-[#4b4b4b]/40 p-2">
                <SidebarMenu className="flex flex-row items-center gap-2">
                  {!isSidebarCollapsed && (
                    <SidebarMenuItem className="flex-grow">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <SidebarMenuButton className="w-full flex items-center gap-2 px-2 py-1.5 text-sm font-medium hover:bg-[#e5e5e5]/50 dark:hover:bg-[#323232]/50 rounded-md transition-colors">
                            <Plus className="h-4 w-4" /> New List
                          </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          side="top"
                          className="w-[--radix-popper-anchor-width]"
                        >
                          <DropdownMenuItem>
                            <span>New List</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </SidebarMenuItem>
                  )}

                  <SidebarMenuItem
                    className={
                      isSidebarCollapsed ? "w-full flex justify-center" : "w-8"
                    }
                  >
                    <Button
                      variant={"ghost"}
                      onClick={() => setIsSidebarCollapsed((prev) => !prev)}
                      className="w-8 h-7 flex items-center justify-center hover:bg-[#e5e5e5]/50 dark:hover:bg-[#323232]/50 rounded-md transition-colors"
                    >
                      {isSidebarCollapsed ? (
                        <ChevronRight className="h-4 w-4" />
                      ) : (
                        <ChevronLeft className="h-4 w-4" />
                      )}
                    </Button>
                  </SidebarMenuItem>

                  {!isSidebarCollapsed && (
                    <SidebarMenuItem className="w-8">
                      <Popover>
                        <PopoverTrigger asChild>
                          <SidebarMenuButton
                            className="w-full h-7 flex items-center justify-center hover:bg-[#e5e5e5]/50 dark:hover:bg-[#323232]/50 rounded-md transition-colors"
                            aria-label="Open Filter Options"
                          >
                            <CustomTooltip content="Filter" side="top">
                              <SlidersHorizontal className="h-4 w-4" />
                            </CustomTooltip>
                          </SidebarMenuButton>
                        </PopoverTrigger>
                        <PopoverContent
                          side="right"
                          align="end"
                          className="w-[200px] p-2 rounded-lg bg-[#ffffff]/95 dark:bg-[#171717]/95 backdrop-blur-xl backdrop-saturate-150 border-[#ededed]/40 dark:border-[#4b4b4b]/40"
                        >
                          <div className="flex items-center justify-between text-sm font-medium">
                            <span>Toggle Mode:</span>
                            <ModeToggle />
                          </div>
                        </PopoverContent>
                      </Popover>
                    </SidebarMenuItem>
                  )}
                </SidebarMenu>
              </SidebarFooter>
            </Sidebar>
          </div>
        )}
        <div
          className={cn(
            "flex-1 w-0 min-w-0 overflow-auto",
            isCompact && "w-full"
          )}
        >
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
}
