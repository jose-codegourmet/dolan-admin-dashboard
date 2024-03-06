"use client";

import { MenuListModel } from "@/types/menu";
import { usePathname } from "next/navigation";
import { ComponentPropsWithRef, FC } from "react";
import { twMerge } from "tailwind-merge";
import SidebarMenuList from "./SidebarMenuList";

export interface SidebarMenuProps extends ComponentPropsWithRef<"ul"> {
  menuObj: MenuListModel;
  showListTitle?: boolean;
}
const SidebarMenu: FC<SidebarMenuProps> = (props) => {
  const currPathname = usePathname();
  const { showListTitle = false, menuObj } = props;

  return (
    <>
      {showListTitle && menuObj.title && (
        <div className="text-xs font-semibold leading-6 text-gray-400">
          {menuObj.title}
        </div>
      )}

      <SidebarMenuList
        currPathname={currPathname}
        listId={menuObj.id}
        items={menuObj.items}
      />
    </>
  );
};

export default SidebarMenu;
