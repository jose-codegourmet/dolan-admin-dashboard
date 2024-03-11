"use client";

import DashboardLayout from "@/components/common/layouts/DashboardLayout";
import { MAIN_MENU, MAIN_MENU_FOOTER } from "@/constants/menu";
import ScreenProvider from "@/context/ScreenContext";
import UserSessionProvider from "@/context/UserSessionContext";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
}
const NextAuthorizedLayout: FC<Props> = ({ children }) => {
  return (
    <UserSessionProvider>
      <ScreenProvider>
        <DashboardLayout>{children}</DashboardLayout>
      </ScreenProvider>
    </UserSessionProvider>
  );
};

export default NextAuthorizedLayout;
