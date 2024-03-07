import SearchForm from "@/components/forms/dashboard/common/SearchForm";
import useScreenContext from "@/hooks/context/screen-context";
import { FC } from "react";
import { HiBellAlert } from "react-icons/hi2";
import DashboardProfileDD from "../dashboard-profile-dd/DashboardProfileDD";

interface DashboardHeaderProps {}

const DashboardHeader: FC<DashboardHeaderProps> = () => {
  const { isMobile, isTablet } = useScreenContext();

  if (isMobile || isTablet) {
    return (
      <div>
        <h1>asdasd</h1>
        <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
          <span className="sr-only">Open sidebar</span>
        </button>
      </div>
    );
  }
  return (
    <div className="sticky top-0 z-40 px-0 w-full">
      <div className="w-full mx-auto border-b border-gray-200 bg-white px-4 shadow-sm lg:shadow-none h-16">
        <div className="flex  h-full items-center gap-x-4 lg:max-w-7xl mx-auto  sm:gap-x-6 sm:px-6 lg:px-0 ">
          {/* Separator */}
          <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <SearchForm />
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">View notifications</span>
                <HiBellAlert className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Separator */}
              <div
                className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
                aria-hidden="true"
              />

              {/* Profile dropdown */}
              <DashboardProfileDD />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
