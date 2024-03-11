"use client";

import { ComponentPropsWithoutRef, FC } from "react";
import { twMerge } from "tailwind-merge";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Inputs, schema } from "./formConfig";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button, ButtonVariant } from "@repo/ui";
export interface LoginFormProps extends ComponentPropsWithoutRef<"form"> {
  successUrl: string;
}

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
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
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
              className="font-semibold text-primary hover:text-primary"
            >
              Forgot password?
            </a>
          </div>
        </div>

        <div>
          <Button
            type="submit"
            className="w-full"
            variant={ButtonVariant.Primary}
          >
            Sign in
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
