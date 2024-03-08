"use client";

import { DEFAULT_AVATAR_SRC } from "@/constants/defaults";
import useScreenContext from "@/hooks/context/screen-context";
import { ComponentPropsWithoutRef, FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

interface AvatarFieldProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  label?: string;
  inputClassName?: string;
}

const AvatarField: FC<AvatarFieldProps> = ({
  className,
  name,
  label = "Avatar",
}) => {
  const { isMobile } = useScreenContext();
  const { control } = useFormContext();

  const renderInput = () => {
    if (isMobile) {
      return (
        <div className="relative ml-5">
          <input
            id={name}
            name={name}
            type="file"
            className="peer absolute h-full w-full rounded-md opacity-0"
          />
          <label
            htmlFor={name}
            className="pointer-events-none block rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 peer-hover:ring-gray-400 peer-focus:ring-2 peer-focus:ring-sky-500"
          >
            <span>Change</span>
            <span className="sr-only"> upload {label} photo</span>
          </label>
        </div>
      );
    }

    return (
      <>
        <input
          id={name}
          name={name}
          type="file"
          className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
        />
        <label
          htmlFor={name}
          className="cursor-pointer absolute inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-75 text-sm font-medium text-white opacity-0 focus-within:opacity-100 hover:opacity-100 rounded-full overflow-hidden"
        >
          <span>Change</span>
          <span className="sr-only"> upload {label} photo</span>
        </label>
      </>
    );
  };

  const renderImagebox = (src?: string) => {
    return (
      <Image
        className={twMerge(
          "relative block h-40 w-40 rounded-full overflow-hidden flex-shrink-0",
          isMobile && "inline-block h-12 w-12"
        )}
        aria-hidden={isMobile ? "true" : "false"}
        src={src ?? DEFAULT_AVATAR_SRC}
        alt="upload photo"
        width={isMobile ? 48 : 160}
        height={isMobile ? 48 : 160}
      />
    );
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, formState: { errors } }) => (
        <div className={twMerge("flex flex-col", className)}>
          <p
            className="text-sm font-medium leading-6 text-gray-900"
            aria-hidden="true"
          >
            {label}
          </p>

          <div className="mt-2  relative hidden overflow-hidden rounded-full lg:block">
            <div className="flex items-center">
              <div className="relative">
                {renderImagebox(field.value)}
                {renderInput()}
              </div>
            </div>
          </div>
          {errors && errors[name] && (
            <div className="text-red-500 text-xs mt-2">
              {(errors[name]?.message as string) ?? ""}
            </div>
          )}
        </div>
      )}
    />
  );
};

export default AvatarField;
