import DashboardLayout from "@/components/layouts/DashboardLayout";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
}
const AuthorizedLayout: FC<Props> = ({ children }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default AuthorizedLayout;
