import { TUserStatus } from "../user-status/type";

export interface UserModel {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  organization: string;
  role: string;
  status: TUserStatus;

  created_date: string;
  updated_date: string;
  last_login_date: string;
}
