import { MenuListModel } from "@repo/shared-types";
import { AppRoutes } from "./routes";
import {
  TbHome,
  TbLogout,
  TbPigMoney,
  TbSettings,
  TbUser,
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
      title: "Clients",
      route: AppRoutes.Clients,
      icon: <TbUsers />,
    },
    {
      title: "Reports & Billings",
      route: AppRoutes.Reports,
      icon: <TbPigMoney />,
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
      title: "Logout",
      route: AppRoutes.Login,
      icon: <TbLogout />,
    },
  ],
};
