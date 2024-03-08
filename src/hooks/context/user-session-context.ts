import { UserSessionContext } from "@/context/UserSessionContext";
import { useContext } from "react";

const useUserSessionContext = () => {
  const ctx = useContext(UserSessionContext);
  return { ...ctx };
};

export default useUserSessionContext;
