import { TUserStatus } from "../user-status/type";
import { ImageModel } from "./image";

export interface UserModel {
  id: string;
  first_name: string;
  gender: string;
  last_name: string;
  email: string;
  organization: string;
  role: string;
  status: TUserStatus;

  avatar?: ImageModel;

  created_date: Date;
  updated_date: Date;
  last_login_date: Date;
}
