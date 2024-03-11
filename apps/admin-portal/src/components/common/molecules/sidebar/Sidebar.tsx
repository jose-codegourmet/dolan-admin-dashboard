import { MAIN_MENU, MAIN_MENU_FOOTER } from "@/constants/menu";
import Logo, { LogoProps } from "../logo/Logo";
import SidebarMenu from "./SidebarMenu";
import { ComponentPropsWithoutRef, FC } from "react";
import { twMerge } from "tailwind-merge";
import { MenuListModel } from "@repo/shared-types";

export interface SidebarProps extends ComponentPropsWithoutRef<"div"> {
  logoProps: LogoProps;
  menuLists: MenuListModel[];
  currPathname: string;
}
const Sidebar: FC<SidebarProps> = ({
  className,
  logoProps,
  menuLists,
  currPathname,
}) => {
  return (
    <div
      className={twMerge(
        "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col",
        className
      )}
    >
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <Logo {...logoProps} />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            {menuLists.map((menu, key) => (
              <li
                key={key}
                className={twMerge(key === menuLists.length - 1 && "mt-auto")}
              >
                <SidebarMenu menuObj={menu} currPathname={currPathname} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
