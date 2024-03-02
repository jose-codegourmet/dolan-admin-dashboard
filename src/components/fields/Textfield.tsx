import { ComponentPropsWithoutRef, FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface TextFieldProps extends ComponentPropsWithoutRef<"input"> {
  name: string;
  label: string;
}
const TextField: FC<TextFieldProps> = (props) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={props.name}
      control={control}
      render={({ field, formState: { errors } }) => (
        <div>
          <label
            htmlFor={field.name}
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            {props.label}
          </label>
          <div className="mt-2">
            <input
              {...field}
              id={field.name}
              type={props.type}
              autoComplete={field.name}
              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          {errors && errors[props.name] && (
            <div className="text-red-500 text-xs mt-2">
              {(errors[props.name]?.message as string) ?? ""}
            </div>
          )}
        </div>
      )}
    />
  );
};

export default TextField;
