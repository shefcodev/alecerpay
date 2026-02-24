import Image from "next/image";
import { TransactionStatus, TransactionType } from "../lib/types";
import { getIconBg, getIconColor, getTransactionIcon } from "../lib/utils";

interface TransactionIconProps {
  type: TransactionType;
  status: TransactionStatus;
  flag: string;
}

const TransactionIcon = ({ type, status, flag }: TransactionIconProps) => {
  return (
    <div className="relative w-10 h-10">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center text-lg
          ${getIconBg(type, status)}`}
      >
        <span className={`text-sm font-bold ${getIconColor(type, status)}`}>
          <Image
            src={getTransactionIcon(type)}
            alt={type}
            width={20}
            height={20}
            className="w-5 h-5 object-cover"
          />
        </span>
      </div>
      <span className="absolute -bottom-0.5 -right-0.5">
        <Image
          src={flag}
          alt={type}
          width={13.8}
          height={9.86}
          className="w-[13.8px] h-[9.86px] object-cover"
        />
      </span>
    </div>
  );
};

export default TransactionIcon;
