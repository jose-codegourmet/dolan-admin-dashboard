"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { ComponentPropsWithoutRef, FC } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { Inputs, schema } from "./formConfig";
import { AppRoutes } from "@/constants/routes";
import AvatarField from "@/components/fields/Avatarfield";
import TextField from "@/components/fields/Textfield";
import { useRouter } from "next/navigation";
import EmptyCard from "@/components/cards/EmptyCard";

export interface MyProfileFormProps extends ComponentPropsWithoutRef<"div"> {
  containerClassname?: string;
  defaultValues?: Inputs;
}
const MyProfileForm: FC<MyProfileFormProps> = (props) => {
  const { className, containerClassname } = props;
  const router = useRouter();
  const methods = useForm<Inputs>({
    defaultValues: {
      username: "",
      first_name: "",
      last_name: "",
      gender: "",
      email: "",
      avatar: "",
      ...(props.defaultValues ?? {}),
    },
    resolver: yupResolver(schema),
  });
  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    router.push(AppRoutes.Dashboard);
    console.log(data);
  };

  return (
    <div className={twMerge("w-full", containerClassname)}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={twMerge("grid grid-cols-8 gap-8", className)}>
            <div className="col-span-2">
              <EmptyCard>
                <AvatarField
                  className="mt-6 flex-grow lg:ml-6 lg:mt-0 lg:flex-shrink-0 lg:flex-grow-0"
                  name="avatar"
                />
              </EmptyCard>
            </div>
            <div className="col-span-6 ">
              <EmptyCard className="flex flex-col divide-y divide-gray-200 px-0 py-0 p-0">
                <div className="px-4 py-6 sm:p-6 lg:pb-8 space-y-4">
                  <div>
                    <h2 className="text-lg font-medium leading-6 text-gray-900">
                      Profile
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      This information will be displayed publicly so be careful
                      what you share.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <TextField
                      name="first_name"
                      label="First name"
                      placeholder="Enter First name"
                      className="w-1/2"
                    />
                    <TextField
                      name="last_name"
                      label="Last name"
                      placeholder="Enter Last name"
                      className="w-1/2"
                    />
                  </div>
                  <TextField
                    name="gender"
                    label="Gender"
                    placeholder="Male, Female or Other"
                  />
                </div>
                <div className="px-4 py-6 sm:p-6 lg:pb-8 space-y-4">
                  <div>
                    <h2 className="text-lg font-medium leading-6 text-gray-900">
                      Account Information
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      This information is used to identify you in the
                      application.
                    </p>
                  </div>
                  <TextField
                    name="username"
                    label="Username"
                    placeholder="Enter username"
                  />
                  <TextField
                    name="email"
                    label="Email"
                    placeholder="Enter email"
                    type="email"
                  />
                </div>
                <div className="mt-4 flex justify-end gap-x-3 px-4 py-4 sm:px-6">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md bg-sky-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
                  >
                    Save
                  </button>
                </div>
              </EmptyCard>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
export default MyProfileForm;
