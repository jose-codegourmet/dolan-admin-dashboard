import { TUserStatus } from "../user-status/type";
import { ImageModel } from "./image";

export interface UserModel {
  id: string;
  first_name: string;
  last_name: string;
  gender: string;
  age: number;

  email: string;
  organization: string;
  role: string;
  status: TUserStatus;

  avatar?: ImageModel;

  employed_date: Date;
  birth_date: Date;
  created_date: Date;
  updated_date: Date;
  last_login_date: Date;
}
