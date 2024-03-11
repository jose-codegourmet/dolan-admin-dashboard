import { ScreenContext } from "@/context/ScreenContext";
import { useContext } from "react";

const useScreenContext = () => {
  const ctx = useContext(ScreenContext);
  return { ...ctx };
};

export default useScreenContext;
