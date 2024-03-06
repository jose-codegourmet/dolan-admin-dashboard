"use client";

import { MenuListModel } from "@/types/menu";
import { usePathname } from "next/navigation";
import { ComponentPropsWithRef, FC } from "react";
import { twMerge } from "tailwind-merge";

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
      <ul role="list" id={`menu-${menuObj.id}`} className="-mx-2 space-y-1">
        {menuObj.items.map((item, key) => (
          <li key={`${key} ${item.title}`}>
            <a
              href={item.route}
              className={twMerge(
                currPathname.includes(item.route)
                  ? "bg-gray-50 text-indigo-600"
                  : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
              )}
            >
              <span className="text-2xl">{item.icon}</span>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SidebarMenu;
