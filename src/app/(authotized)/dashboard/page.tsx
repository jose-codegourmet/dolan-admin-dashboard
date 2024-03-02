import RecentActivityCard from "@/components/cards/RecentActivityCard";
import Stats from "@/components/cards/Stats";

const DashboardPage = () => {
  return (
    <div className="w-full flex-col space-y-5">
      <Stats />
      <RecentActivityCard />
    </div>
  );
};

export default DashboardPage;
