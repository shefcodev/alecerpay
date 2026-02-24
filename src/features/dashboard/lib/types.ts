export type KycStatus = "KYC Level 1" | "KYC Level 2" | "Verified";

export interface Wallet {
  currency: string;
  flag: string;
  kycStatus: KycStatus;
  balance: string;
  symbol: string;
  accountNumber: string;
  isVerified?: boolean;
  isDashed?: boolean;
}

export interface Action {
  label: string;
  icon: string;
  action: () => void;
}

export type TransactionStatus = "Completed" | "Pending" | "Reversed";
export type TransactionType = "credit" | "debit";

export interface Transaction {
  id: string;
  name: string;
  date: string;
  amount: number;
  currency: string;
  symbol: string;
  type: TransactionType;
  status: TransactionStatus;
  flag: string;
}
