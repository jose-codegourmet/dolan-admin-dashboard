import { ComponentPropsWithoutRef, FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface TextFieldProps extends ComponentPropsWithoutRef<"input"> {
  name: string;
  label?: string;
  inputClassName?: string;
}
const TextField: FC<TextFieldProps> = ({
  name,
  label,
  type,
  className,
  inputClassName,
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, formState: { errors } }) => (
        <div className={twMerge("w-full", className)}>
          {label && (
            <label
              htmlFor={field.name}
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              {label}
            </label>
          )}
          <div className={twMerge("flex flex-grow", label && "mt-2")}>
            <input
              {...field}
              id={field.name}
              type={type}
              autoComplete={field.name}
              className={twMerge(
                `block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`,
                inputClassName
              )}
            />
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

export default TextField;
