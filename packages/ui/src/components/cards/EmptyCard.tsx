import { ComponentPropsWithoutRef, FC } from "react";
import { twMerge } from "tailwind-merge";

export interface EmptyCardProps extends ComponentPropsWithoutRef<"div"> {}
export const EmptyCard: FC<EmptyCardProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "overflow-hidden bg-white sm:rounded-lg sm:shadow p-6",
        className
      )}
    >
      {children}
    </div>
  );
};
