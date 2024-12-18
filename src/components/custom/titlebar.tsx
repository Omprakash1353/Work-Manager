import { CSSProperties } from "react";

interface Props {
  dragStyle: CSSProperties;
  noDragStyle: CSSProperties;
}

export default function TitleBar({ dragStyle, noDragStyle }: Props) {
  const handleWindowAction = (action: string) => {
    try {
      window.electron?.ipcRenderer?.send(action);
    } catch (error) {
      console.error("Window control error:", error);
    }
  };

  return (
    <div
      className="w-full h-[35px] flex items-center justify-between px-4 bg-white backdrop-blur-md border-b"
      style={dragStyle}
    >
      {/* Window Title */}
      <div
        className="w-full text-center text-sm font-semibold text-gray-600"
        style={dragStyle}
      >
        Todo Application
      </div>

      {/* Window Controls (non-draggable) */}
      <div className="flex space-x-2" style={noDragStyle}>
        <button
          className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600"
          onClick={() => handleWindowAction("window-close")}
          style={noDragStyle}
        />
        <button
          className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600"
          onClick={() => handleWindowAction("window-minimize")}
          style={noDragStyle}
        />
        <button
          className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600"
          onClick={() => handleWindowAction("window-maximize")}
          style={noDragStyle}
        />
      </div>
    </div>
  );
}
