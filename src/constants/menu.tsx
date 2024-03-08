import { MenuListModel } from "@/types/menu";
import { AppRoutes } from "./routes";
import {
  TbBuildingWarehouse,
  TbGardenCart,
  TbHome,
  TbLogout,
  TbReceipt,
  TbReceiptOff,
  TbSettings,
  TbTableAlias,
  TbUser,
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
      submenu: [
        {
          title: "Draft Orders",
          route: AppRoutes.DraftOrders,
          icon: <TbReceiptOff />,
        },
      ],
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

export const PROFILE_DD_MENU: MenuListModel = {
  id: "profile",
  title: "Profile",
  items: [
    {
      title: "My Account",
      route: AppRoutes.MyAccount,
      icon: <TbUser />,
    },
    {
      title: "Branch",
      route: AppRoutes.Branch,
      icon: <TbUser />,
    },
    {
      title: "Logout",
      route: AppRoutes.Login,
      icon: <TbLogout />,
    },
  ],
};
