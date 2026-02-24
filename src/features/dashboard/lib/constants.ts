import { Action, Wallet } from "./types";

export const WALLETS: Wallet[] = [
  {
    currency: "NGN",
    flag: "🇳🇬",
    kycStatus: "KYC Level 1",
    balance: "5280.50",
    symbol: "N",
    accountNumber: "1234395403",
  },
  {
    currency: "USD",
    flag: "🇺🇸",
    kycStatus: "KYC Level 2",
    balance: "3150",
    symbol: "$",
    accountNumber: "1234395403",
  },
  {
    currency: "GBP",
    flag: "🇬🇧",
    kycStatus: "KYC Level 2",
    balance: "4900.75",
    symbol: "£",
    accountNumber: "1234395403",
  },
  {
    currency: "EUR",
    flag: "🇪🇺",
    kycStatus: "Verified",
    balance: "4900.75",
    symbol: "€",
    accountNumber: "1234395403",
    isVerified: true,
    isDashed: true,
  },
];

export const ACTIONS: Action[] = [
  { label: "Add Money", icon: "+" },
  { label: "Convert", icon: "⇄" },
  { label: "Send", icon: "↗" },
  { label: "Create Invoice", icon: "📄" },
];
