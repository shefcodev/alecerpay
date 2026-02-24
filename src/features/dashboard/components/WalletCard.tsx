"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { Wallet } from "../lib/types";
import { Badge } from "@/components/ui/badge";
import {
  cn,
  formatCurrency,
  maskAccountNumber,
  copyToClipboard,
} from "@/lib/utils";

type variant = "ngn" | "usd" | "gbp" | "eur";

const CardConfig: Record<
  variant,
  { flag: string; symbol: string; currency: string }
> = {
  ngn: {
    flag: "icons/ngn.svg",
    symbol: "₦",
    currency: "NGN",
  },
  usd: {
    flag: "icons/usd.svg",
    symbol: "$",
    currency: "USD",
  },
  gbp: {
    flag: "icons/gbp.svg",
    symbol: "£",
    currency: "GBP",
  },
  eur: { flag: "icons/eur.svg", symbol: "€", currency: "EUR" },
};

interface WalletCardProps {
  wallet: Wallet;
}

const WalletCard: FC<WalletCardProps> = ({ wallet }) => {
  const [showBalance, setShowBalance] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const isKYCVerified = wallet.kycStatus === "Verified";
  const variant = wallet.currency.toLowerCase() as variant;

  const handleCopy = async () => {
    const success = await copyToClipboard(wallet.accountNumber);
    console.log(copied);

    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4 ring ring-[#DEE0E4] px-4 py-4 shadow-100 rounded-3xl">
      <Badge
        className={cn(
          "bg-primary-200 self-end",
          isKYCVerified && "bg-transparent",
        )}
      >
        <Image
          src={`icons/${isKYCVerified ? "verified" : "carbon-badge"}.svg`}
          alt="badge"
          width={11.35}
          height={11.35}
          className="w-[11.35px] h-[11.35px]"
        />
        <span className="text-[8.51px] text-primary-100 font-poppins font-medium">
          {wallet.kycStatus}
        </span>
      </Badge>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-1">
          <Image
            src={CardConfig[variant].flag}
            alt={CardConfig[variant].currency}
            width={28}
            height={20}
            className="w-7 h-5 object-cover"
          />
          <span className="text-sm text-secondary-400 font-poppins">
            {CardConfig[variant].currency}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl text-secondary-500 font-semibold font-poppins">
            {CardConfig[variant].symbol}
            {showBalance ? formatCurrency(parseFloat(wallet.balance)) : "****"}
          </span>
          <button onClick={() => setShowBalance((prev) => !prev)}>
            <Image
              src={`icons/${showBalance ? "eye-off" : "eye"}.svg`}
              alt="view"
              width={16}
              height={16}
              className="w-5 h-5 object-cover transition-all"
            />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-[11.22px] text-secondary-600 font-medium font-poppins">
          {maskAccountNumber(wallet.accountNumber)}
        </span>
        <button className="transition-all" onClick={() => handleCopy()}>
          <Image
            src="icons/copy.svg"
            alt="copy"
            width={16}
            height={16}
            className="w-4 h-4 object-cover"
          />
        </button>
      </div>
    </div>
  );
};

export default WalletCard;
