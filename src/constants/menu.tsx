import { AppRoutes } from "./routes";
import {
  TbBuildingWarehouse,
  TbGardenCart,
  TbHome,
  TbReceipt,
  TbTableAlias,
  TbUserCog,
  TbUserDollar,
  TbUsers,
} from "react-icons/tb";

export const MAIN_MENU = [
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
];

export const SETTINGS_MENU = [
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
];
