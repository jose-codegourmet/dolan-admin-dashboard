import React, { ReactNode, createContext } from "react";
import { useMediaQuery } from "usehooks-ts";

interface ScreenContextType {
  isXsScreen: boolean;
  isSmScreen: boolean;
  isMdScreen: boolean;
  isLgScreen: boolean;
  isXlScreen: boolean;
  is2xlScreen: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}
export const ScreenContext = createContext<ScreenContextType>(
  {} as ScreenContextType
);

export default function ScreenProvider({ children }: { children: ReactNode }) {
  const isXsScreen = useMediaQuery(`(min-width: 0) and (max-width: 639px)`);
  const isSmScreen = useMediaQuery(`(min-width: 640px) and (max-width: 767px)`);
  const isMdScreen = useMediaQuery(
    `(min-width: 768px) and (max-width: 1023px)`
  );
  const isLgScreen = useMediaQuery(
    `(min-width: 1024px) and (max-width: 1279px)`
  );
  const isXlScreen = useMediaQuery(
    `(min-width: 1280px) and (max-width: 1535px)`
  );
  const is2xlScreen = useMediaQuery(`(min-width: 1536px)`);

  const providerValue = {
    isXsScreen,
    isSmScreen,
    isMdScreen,
    isLgScreen,
    isXlScreen,
    is2xlScreen,
    isMobile: isXsScreen || isSmScreen,
    isTablet: isMdScreen || isLgScreen,
    isDesktop: isXlScreen || is2xlScreen,
  };
  return (
    <ScreenContext.Provider value={providerValue}>
      {children}
    </ScreenContext.Provider>
  );
}
