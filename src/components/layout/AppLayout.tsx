import { Outlet } from "react-router-dom";
import SidebarComponent from "../custom/sidebar/index";
import { Titlebar } from "@/components/custom/titlebar";

export default function AppLayout() {
  return (
    <div className="h-screen flex flex-col">
      <Titlebar />
      <div className="flex-1 flex overflow-hidden">
        <SidebarComponent>
          <div className="flex-1 overflow-hidden">
            <Outlet />
          </div>
        </SidebarComponent>
      </div>
    </div>
  );
}
