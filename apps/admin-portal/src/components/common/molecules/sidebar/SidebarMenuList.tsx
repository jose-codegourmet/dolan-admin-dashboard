"use client";

import { MenuItemModel } from "@repo/shared-types";
import { ComponentPropsWithRef, FC, useState } from "react";
import SidebarMenuItem from "./SidebarMenuItem";

export interface SidebarMenuListProps extends ComponentPropsWithRef<"ul"> {
  currPathname: string;
  listId: string;
  items: MenuItemModel[];
  level?: number;
}
const SidebarMenuList: FC<SidebarMenuListProps> = ({
  currPathname,
  listId,
  items,
  level = 1,
}) => {
  return (
    <ul role="list" id={`menu-${listId}-${level}`} className="-mx-2 space-y-1">
      {items.map((item, key) => (
        <SidebarMenuItem
          key={`${key} ${item.title}`}
          currPathname={currPathname}
          listId={listId}
          item={item}
          level={level}
        />
      ))}
    </ul>
  );
};

export default SidebarMenuList;
