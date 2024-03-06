"use client";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import ScreenProvider from "@/context/ScreenContext";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
}
const AuthorizedLayout: FC<Props> = ({ children }) => {
  return (
    <ScreenProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </ScreenProvider>
  );
};

export default AuthorizedLayout;
