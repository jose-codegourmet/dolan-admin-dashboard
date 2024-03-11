import { RecentActivityCard, Stats } from "@repo/ui";

const DashboardPage = () => {
  return (
    <div className="w-full flex-col space-y-5">
      <Stats />
      <RecentActivityCard />
    </div>
  );
};

export default DashboardPage;
