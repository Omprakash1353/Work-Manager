import { CSSProperties } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../custom/sidebar";
import TitleBar from "../custom/titlebar";

const dragStyle: CSSProperties = {
  // @ts-ignore
  WebkitAppRegion: "drag",
  userSelect: "none",
};

const noDragStyle: CSSProperties = {
  // @ts-ignore
  WebkitAppRegion: "no-drag",
};

export default function AppLayout() {
  return (
    <div
      className="w-full h-screen rounded-md bg-white/10 backdrop-blur-md flex flex-col overflow-hidden select-none"
      style={dragStyle}
    >
      {/* Top Title Bar - Draggable */}
      <TitleBar dragStyle={dragStyle} noDragStyle={noDragStyle} />

      {/* Rest of the layout */}
      <div className="flex h-full" style={dragStyle}>
        <Sidebar dragStyle={dragStyle} noDragStyle={noDragStyle} />

        <div
          className="flex-1 bg-white backdrop-blur-md p-6 overflow-auto"
          style={dragStyle}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}
