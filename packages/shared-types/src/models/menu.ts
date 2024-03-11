import { ReactNode } from "react";

export interface MenuItemModel {
  title: string;
  route: string;
  icon?: ReactNode | string;
  isExternal?: boolean;
  submenu?: MenuItemModel[];
}

export interface MenuListModel {
  id: string;
  items: MenuItemModel[];
  title: string;
  icon?: ReactNode | string;
}
