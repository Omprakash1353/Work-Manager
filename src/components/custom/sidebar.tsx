import { CSSProperties } from "react";
import { Input } from "../ui/input";

interface Props {
  dragStyle: CSSProperties;
  noDragStyle: CSSProperties;
}

export default function Sidebar({ dragStyle, noDragStyle }: Props) {
  return (
    <aside
      className="w-[260px] h-full bg-[rgb(245,244,244)] backdrop-blur-3xl border-r border-[#eee] shadow-sm"
      style={dragStyle}
    >
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-800 mb-4">Sidebar</h1>
        <div className="relative w-full">
          <Input
            type="text"
            placeholder="Quick Find"
            className="w-full py-2 text-center rounded-md bg-[#eee] backdrop-blur-md focus:ring-2 focus:ring-blue-400 placeholder:text-gray-500"
            style={noDragStyle}
          />
        </div>
        <div className="mt-6 space-y-4">
          <div className="flex items-center">
            <div className="w-6 h-6 flex items-center justify-center mr-3">
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.47214 2C7.57828 2 5.84696 3.07001 5 4.76393L2.31672 10.1305C2.10844 10.5471 2 11.0064 2 11.4721V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V11.4721C22 11.0064 21.8916 10.5471 21.6833 10.1305L19 4.76393C18.153 3.07001 16.4217 2 14.5279 2H9.47214Z"
                  fill="#4296FF"
                />
                <path
                  d="M5.5 11H2V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V11H18.5C16.567 11 15 12.567 15 14.5C15 15.3284 14.3284 16 13.5 16H10.5C9.67157 16 9 15.3284 9 14.5C9 12.567 7.433 11 5.5 11Z"
                  fill="#152C70"
                />
              </svg>
            </div>
            <span className="text-gray-700 font-medium">Inbox</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 flex items-center justify-center mr-3">
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="iconify iconify--noto"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z"
                  fill="#fdd835"
                ></path>
                <path
                  d="M67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z"
                  fill="#ffff8d"
                ></path>
                <path
                  d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z"
                  fill="#f4b400"
                ></path>
              </svg>
            </div>
            <span className="text-gray-700 font-medium">Today</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm font-medium">1</span>
            </div>
            <span className="text-gray-700 font-medium">Upcoming</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm font-medium">-</span>
            </div>
            <span className="text-gray-700 font-medium">Anytime</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm font-medium">-</span>
            </div>
            <span className="text-gray-700 font-medium">Someday</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm font-medium">-</span>
            </div>
            <span className="text-gray-700 font-medium">Logbook</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
