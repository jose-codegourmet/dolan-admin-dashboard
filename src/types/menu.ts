import { ReactNode } from "react";

export interface MenuItemModel {
  title: string;
  route: string;
  icon?: ReactNode | string;
  isExternal?: boolean;
  submenu?: MenuItemModel[];
}
