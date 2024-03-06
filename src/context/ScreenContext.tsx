import React, { ReactNode, createContext } from "react";
import { useMediaQuery } from "usehooks-ts";

interface ScreenContextType {
  isXsScreen: boolean;
  isSmScreen: boolean;
  isMdScreen: boolean;
  isLgScreen: boolean;
  isXlScreen: boolean;
  is2xlScreen: boolean;
}
export const ScreenContext = createContext<ScreenContextType>(
  {} as ScreenContextType
);

export default function ScreenProvider({ children }: { children: ReactNode }) {
  const isXsScreen = useMediaQuery(`(min-width: 0)`);
  const isSmScreen = useMediaQuery(`(min-width: 640px)`);
  const isMdScreen = useMediaQuery(`(min-width: 768px)`);
  const isLgScreen = useMediaQuery(`(min-width: 1024px)`);
  const isXlScreen = useMediaQuery(`(min-width: 1280px)`);
  const is2xlScreen = useMediaQuery(`(min-width: 1536px)`);

  const providerValue = {
    isXsScreen,
    isSmScreen,
    isMdScreen,
    isLgScreen,
    isXlScreen,
    is2xlScreen,
  };
  return (
    <ScreenContext.Provider value={providerValue}>
      {children}
    </ScreenContext.Provider>
  );
}
