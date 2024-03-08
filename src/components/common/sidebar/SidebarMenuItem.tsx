import { MenuItemModel } from "@/types/menu";
import { Component, ComponentPropsWithRef, FC, useState } from "react";
import { twMerge } from "tailwind-merge";
import SidebarMenuList from "./SidebarMenuList";
import { TbArrowForward } from "react-icons/tb";
import Link from "next/link";

interface SidebarMenuItemProps extends ComponentPropsWithRef<"li"> {
  currPathname: string;
  listId: string;
  item: MenuItemModel;
  level?: number;
}
const SidebarMenuItem: FC<SidebarMenuItemProps> = ({
  currPathname,
  className,
  listId,
  item,
  level = 1,
}) => {
  const isActive = currPathname.includes(item.route);
  const isSubmenu = level > 1;
  const isSubmenuExpanded =
    isActive || item.submenu?.some((i) => currPathname.includes(i.route));
  return (
    <li className={twMerge(className)}>
      <Link
        href={item.route}
        className={twMerge(
          isActive
            ? "bg-gray-50 text-indigo-600"
            : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold group"
        )}
      >
        {isSubmenu && (
          <span
            className={twMerge(
              "opacity-0 group-hover:opacity-100",
              isActive && "opacity-100"
            )}
          >
            <TbArrowForward />
          </span>
        )}
        <span className="text-2xl">{item.icon}</span>
        {item.title}
      </Link>
      {item.submenu && (
        <div
          className={twMerge(
            "w-full pl-8",
            isSubmenuExpanded ? "block" : "hidden"
          )}
        >
          <SidebarMenuList
            currPathname={currPathname}
            listId={listId}
            items={item.submenu}
            level={level + 1}
          />
        </div>
      )}
    </li>
  );
};

export default SidebarMenuItem;
