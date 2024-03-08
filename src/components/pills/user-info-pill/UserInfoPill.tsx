import { UserModel } from "@/types/models/user";
import { ComponentPropsWithRef, FC } from "react";
import Image from "next/image";
import { DEFAULT_AVATAR_SRC } from "@/constants/defaults";

export type UserInfoPillProps = ComponentPropsWithRef<"div"> & UserModel;

const UserInfoPill: FC<UserInfoPillProps> = ({
  first_name,
  last_name,
  organization,
  avatar,
}) => {
  const avatarSrc = avatar?.src ?? DEFAULT_AVATAR_SRC;

  const avatarAlt = avatar?.alt ?? `${first_name} ${last_name} avatar`;
  return (
    <div className="w-full flex items-center space-x-2">
      <Image
        className="h-8 w-8 rounded-full bg-gray-50"
        src={avatarSrc}
        alt={avatarAlt}
        width={32}
        height={32}
      />
      <span className="ml-4 flex flex-col space-y-1 items-start justify-start">
        <span
          className="leading-none text-sm font-semibold  text-gray-900"
          aria-hidden="true"
        >
          {first_name} {last_name}
        </span>
        <span className="text-xs text-primary font-semibold leading-none">
          {organization}
        </span>
      </span>
    </div>
  );
};

export default UserInfoPill;
