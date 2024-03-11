"use client";
import { ComponentPropsWithoutRef, FC, useState } from "react";
import { twMerge } from "tailwind-merge";
import Sidebar from "../molecules/sidebar/Sidebar";
import DashboardHeader from "../molecules/dashboard-header/DashboardHeader";
import useScreenContext from "@/hooks/context/screen-context";
import { MAIN_MENU, MAIN_MENU_FOOTER } from "@/constants/menu";
import { usePathname } from "next/navigation";
import { DEFAULT_PROJECT_NAME } from "@/constants/defaults";

export interface DashboardLayoutProps extends ComponentPropsWithoutRef<"div"> {
  isSidebarOpen?: boolean;
}
const DashboardLayout: FC<DashboardLayoutProps> = ({
  children,
  isSidebarOpen,
}) => {
  const currPathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(isSidebarOpen ?? false);
  const {
    isXsScreen,
    isSmScreen,
    isMdScreen,
    isLgScreen,
    isXlScreen,
    is2xlScreen,
  } = useScreenContext();

  return (
    <div
      className={twMerge(
        "w-ful min-h-screen bg-slate-100",
        is2xlScreen && "screen-true-at-2xl",
        isXlScreen && "screen-true-at-xl",
        isLgScreen && "screen-true-at-lg",
        isMdScreen && "screen-true-at-md",
        isSmScreen && "screen-true-at-sm",
        isXsScreen && "screen-true-at-xs",
        sidebarOpen && "screen-sidebar-open"
      )}
    >
      <Sidebar
        logoProps={{
          useText: true,
          logoName: DEFAULT_PROJECT_NAME ?? "",
        }}
        menuLists={[MAIN_MENU, MAIN_MENU_FOOTER]}
        currPathname={currPathname}
      />
      <div className="lg:pl-72 ">
        <DashboardHeader />
        <main className="py-10 ">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
