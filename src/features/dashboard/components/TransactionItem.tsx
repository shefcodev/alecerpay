import { Transaction } from "../lib/types";
import { formatAmount, getAmountColor, getStatusColor } from "../lib/utils";
import TransactionIcon from "./TransactionIcon";

interface TransactionItemProps {
  transaction: Transaction;
  isLast: boolean;
}

const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const { name, date, amount, symbol, type, status, flag } = transaction;

  return (
    <div className={`flex items-center justify-between py-4`}>
      <div className="flex items-center gap-4">
        <TransactionIcon type={type} status={status} flag={flag} />
        <div>
          <p className="text-secondary-500 font-medium font-poppins">{name}</p>
          <p className="text-sm text-secondary-400 font-poppins">{date}</p>
        </div>
      </div>

      <div className="text-right">
        <p className={`font-semibold font-poppins ${getAmountColor(type)}`}>
          {formatAmount(amount, symbol, type)}
        </p>
        <p className={`text-sm ${getStatusColor(status)}`}>{status}</p>
      </div>
    </div>
  );
};

export default TransactionItem;
