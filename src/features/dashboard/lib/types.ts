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
}
