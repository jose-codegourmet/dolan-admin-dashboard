import * as yup from "yup";

export const schema = yup
  .object({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    gender: yup.string().required(),
    email: yup.string().email().required(),
    avatar: yup.string().url().required(),
  })
  .required();

export type Inputs = {
  first_name: string;
  last_name: string;
  gender: string;
  email: string;
  avatar: string;
};
