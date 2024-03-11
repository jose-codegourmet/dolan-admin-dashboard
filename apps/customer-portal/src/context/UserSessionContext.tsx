import { ACTIVE_USER_SESSION } from "@/mocks/active_user_session";
import { UserModel } from "@repo/shared-types";
import React, { ReactNode, createContext, useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

type UserSessionContextType = {
  activeUser?: UserModel | null;
};

export const UserSessionContext = createContext<UserSessionContextType>(
  {} as UserSessionContextType
);

export default function UserSessionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeUser, setActiveUser] = useState<UserModel | null>();

  //temp
  useEffect(() => {
    if (!activeUser) {
      setActiveUser(ACTIVE_USER_SESSION);
    }
  }, []);
  return (
    <UserSessionContext.Provider value={{ activeUser }}>
      {children}
    </UserSessionContext.Provider>
  );
}
