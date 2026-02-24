import { FC } from "react";
import Image from "next/image";
import { WALLETS } from "../lib/constants";
import WalletCard from "./WalletCard";

const WalletsSection: FC = () => {
  return (
    <section className="max-w-350 w-full mx-auto flex flex-col gap-4">
      <header className="flex justify-between items-center">
        <span className="text-2xl text-secondary-500 font-poppins font-semibold">
          Your Wallets
        </span>
        <button className="inline-flex items-center gap-1.5">
          <Image
            src="icons/eye.svg"
            alt="toggle"
            width={16}
            height={16}
            className="w-4 h-4 object-cover"
          />
          <span className="text-sm text-secondary-500 font-medium font-poppins">
            Show
          </span>
        </button>
      </header>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {WALLETS.map((wallet, index) => (
          <WalletCard key={index} wallet={wallet} />
        ))}
      </div>
    </section>
  );
};

export default WalletsSection;
