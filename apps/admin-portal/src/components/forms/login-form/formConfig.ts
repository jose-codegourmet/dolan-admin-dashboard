import * as yup from "yup";

export const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

export type Inputs = {
  email: string;
  password: string;
};
