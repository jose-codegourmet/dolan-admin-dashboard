import { MAIN_MENU, MAIN_MENU_FOOTER } from "@/constants/menu";
import Logo from "../logo/Logo";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <Logo />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <SidebarMenu menuObj={MAIN_MENU} />
            </li>
            <li className="mt-auto">
              <SidebarMenu menuObj={MAIN_MENU_FOOTER} />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
