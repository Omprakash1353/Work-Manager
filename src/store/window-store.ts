import { create } from "zustand";

interface WindowState {
  isCompact: boolean;
  isAlwaysOnTop: boolean;
  setCompact: (isCompact: boolean) => void;
  setAlwaysOnTop: (isAlwaysOnTop: boolean) => void;
}

export const useWindowStore = create<WindowState>((set) => ({
  isCompact: false,
  isAlwaysOnTop: false,
  setCompact: (isCompact) =>
    set({
      isCompact,
      isAlwaysOnTop: isCompact ? true : false,
    }),
  setAlwaysOnTop: (isAlwaysOnTop) => set({ isAlwaysOnTop }),
}));
