import { Outlet } from "react-router-dom";
import SidebarComponent from "../custom/sidebar/index";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <SidebarComponent>
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </SidebarComponent>
    </div>
  );
}
