import { TransactionStatus, TransactionType } from "./types";

export const getStatusColor = (status: TransactionStatus): string => {
  const colors: Record<TransactionStatus, string> = {
    Completed: "text-gray-500",
    Pending: "text-orange-400",
    Reversed: "text-red-500",
  };
  return colors[status];
};

export const getAmountColor = (type: TransactionType): string => {
  return type === "credit" ? "text-primary-300" : "text-secondary-500";
};

export const formatAmount = (
  amount: number,
  symbol: string,
  type: TransactionType,
): string => {
  const formatted = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);

  return type === "credit"
    ? `+${symbol}${formatted}`
    : `-${symbol}${formatted}`;
};

export const getTransactionIcon = (type: TransactionType): string => {
  return type === "credit"
    ? "icons/credit.svg"
    : type === "debit"
      ? "icons/debit.svg"
      : "icons/swap.svg";
};

export const getIconBg = (
  type: TransactionType,
  status: TransactionStatus,
): string => {
  if (status === "Reversed") return "bg-red-100";
  return type === "credit" ? "bg-blue-100" : "bg-blue-100";
};

export const getIconColor = (
  type: TransactionType,
  status: TransactionStatus,
): string => {
  if (status === "Reversed") return "text-red-500";
  return type === "credit" ? "text-blue-500" : "text-blue-500";
};
