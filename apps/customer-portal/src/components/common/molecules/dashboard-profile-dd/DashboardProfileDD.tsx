"use client";

import { UserInfoPill } from "@repo/ui";
import { DEFAULT_AVATAR_SRC } from "@/constants/defaults";
import { PROFILE_DD_MENU } from "@/constants/menu";
import useUserSessionContext from "@/hooks/context/user-session-context";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { ComponentPropsWithRef, FC, Fragment } from "react";
import { HiArrowDown } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";

interface DashboardProfileDD extends ComponentPropsWithRef<"div"> {}
const DashboardProfileDD: FC<DashboardProfileDD> = ({ className }) => {
  const { activeUser } = useUserSessionContext();
  return (
    <Menu as="div" className={twMerge("relative", className)}>
      <Menu.Button className="-m-1.5 flex items-center p-1.5">
        <span className="sr-only">Open user menu</span>
        {activeUser && (
          <UserInfoPill {...activeUser} defaultAvatarSrc={DEFAULT_AVATAR_SRC} />
        )}
        <HiArrowDown
          className="ml-2 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
          {[...PROFILE_DD_MENU.items].map((item, key) => (
            <Menu.Item key={`${item.title} ${key}`}>
              {({ active }) => (
                <Link
                  href={item.route}
                  className={twMerge(
                    active ? "bg-gray-50" : "",
                    "block px-3 py-1 text-sm leading-6 text-gray-900"
                  )}
                >
                  {item.title}
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DashboardProfileDD;
