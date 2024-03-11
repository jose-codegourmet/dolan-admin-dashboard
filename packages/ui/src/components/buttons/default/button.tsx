"use client";

import { ComponentPropsWithRef, FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { TButtonVariant } from "./types";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  variant?: TButtonVariant;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    variant = "default",
    className,
    ...buttonRestProps
  } = props;

  const defaultClass = `
    flex
    justify-center
    items-center
    rounded-md
    px-3 
    py-1.5 
    text-sm 
    font-semibold 
    leading-6
  `;

  const primaryClass = `
    bg-primary
    text-white
    hover:bg-primary
    focus-visible:outline 
    focus-visible:outline-2 
    focus-visible:outline-offset-2 
    focus-visible:outline-primary
  `;

  return (
    <button
      className={twMerge(
        defaultClass,
        variant === "default" && "bg-gray-300 text-gray-800",
        variant === "primary" && primaryClass,
        className
      )}
      {...buttonRestProps}
    >
      {children}
    </button>
  );
};
