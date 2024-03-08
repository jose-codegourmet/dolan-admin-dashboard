"use client";

import { ComponentPropsWithoutRef, FC } from "react";
import { twMerge } from "tailwind-merge";
import {
  useForm,
  Controller,
  SubmitHandler,
  Form,
  FormSubmitHandler,
  FormProvider,
} from "react-hook-form";
import TextField from "../../fields/Textfield";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

export interface LoginFormProps extends ComponentPropsWithoutRef<"form"> {
  successUrl: string;
}

type Inputs = {
  email: string;
  password: string;
};

const LoginForm: FC<LoginFormProps> = ({ className, successUrl }) => {
  const router = useRouter();
  const methods = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    router.push(successUrl);
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className={twMerge("space-y-6", className)}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField name="email" label="Enter Email" />
        <TextField name="password" type="password" label="Enter Password" />

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="remember-me"
              className="ml-3 block text-sm leading-6 text-gray-900"
            >
              Remember me
            </label>
          </div>

          <div className="text-sm leading-6">
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
