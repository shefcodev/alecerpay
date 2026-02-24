import { FC } from "react";
import WalletsSection from "./components/WalletsSection";
import WalletActions from "./components/WalletActions";
import TransactionSection from "./components/TransactionSection";

const DashboardPage: FC = () => {
  return (
    <section className="w-full h-full px-4 py-12 space-y-8">
      <div className="max-w-350 flex flex-col gap-1 mx-auto">
        <h3 className="text-[32px] text-secondary-300 font-semibold font-poppins">
          Welcome back, Joy!
        </h3>
        <p className="text-secondary-400 font-poppins">
          Here&apos;s your financial overview
        </p>
      </div>
      <section className="flex flex-col gap-4">
        <WalletsSection />
        <WalletActions />
        <TransactionSection />
      </section>
    </section>
  );
};

export default DashboardPage;
