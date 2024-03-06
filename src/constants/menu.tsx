import { MenuListModel } from "@/types/menu";
import { AppRoutes } from "./routes";
import {
  TbBuildingWarehouse,
  TbGardenCart,
  TbHome,
  TbReceipt,
  TbSettings,
  TbTableAlias,
  TbUserCog,
  TbUserDollar,
  TbUsers,
} from "react-icons/tb";

export const MAIN_MENU: MenuListModel = {
  id: "main",
  title: "Main",
  items: [
    {
      title: "Dashboard",
      route: AppRoutes.Dashboard,
      icon: <TbHome />,
    },
    {
      title: "Orders",
      route: AppRoutes.Orders,
      icon: <TbReceipt />,
    },
    {
      title: "Products",
      route: AppRoutes.Products,
      icon: <TbGardenCart />,
      submenu: [
        {
          title: "Collection",
          route: AppRoutes.Collection,
          icon: <TbTableAlias />,
        },
        {
          title: "Storage",
          route: AppRoutes.Storage,
          icon: <TbBuildingWarehouse />,
        },
      ],
    },
    {
      title: "Customers",
      route: AppRoutes.Customers,
      icon: <TbUserDollar />,
    },
  ],
};

export const MAIN_MENU_FOOTER: MenuListModel = {
  id: "main-menu-footer",
  title: "Main menu footer",
  items: [
    {
      title: "Settings",
      route: AppRoutes.Settings,
      icon: <TbSettings />,
    },
  ],
};

export const SETTINGS_MENU: MenuListModel = {
  id: "settings",
  title: "Settings",
  items: [
    {
      title: "Staff",
      route: AppRoutes.Staff,
      icon: <TbUsers />,
    },
    {
      title: "Staff Types",
      route: AppRoutes.StaffTypes,
      icon: <TbUserCog />,
    },
  ],
};
