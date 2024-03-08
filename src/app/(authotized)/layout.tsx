"use client";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import ScreenProvider from "@/context/ScreenContext";
import UserSessionProvider from "@/context/UserSessionContext";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
}
const AuthorizedLayout: FC<Props> = ({ children }) => {
  return (
    <UserSessionProvider>
      <ScreenProvider>
        <DashboardLayout>{children}</DashboardLayout>
      </ScreenProvider>
    </UserSessionProvider>
  );
};

export default AuthorizedLayout;
