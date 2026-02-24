import { Action, Wallet, Transaction } from "./types";

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
  { label: "Add Money", icon: "icons/add.svg", action: () => {} },
  { label: "Convert", icon: "icons/convert.svg", action: () => {} },
  { label: "Send", icon: "icons/send.svg", action: () => {} },
  {
    label: "Create Invoice",
    icon: "icons/create-invoice.svg",
    action: () => {},
  },
];

export const TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    name: "John Smith",
    date: "Today, 2:30 PM",
    amount: 250.0,
    currency: "USD",
    symbol: "$",
    type: "credit",
    status: "Completed",
    flag: "icons/usd.svg",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    date: "Today, 11:15 AM",
    amount: 180.0,
    currency: "USD",
    symbol: "$",
    type: "debit",
    status: "Pending",
    flag: "icons/usd.svg",
  },
  {
    id: "3",
    name: "Tech Corp Ltd",
    date: "Yesterday, 4:45 PM",
    amount: 500.0,
    currency: "EUR",
    symbol: "€",
    type: "credit",
    status: "Completed",
    flag: "icons/ngn.svg",
  },
  {
    id: "4",
    name: "Monthly Subscription",
    date: "Dec 28, 9:00 AM",
    amount: 75.5,
    currency: "GBP",
    symbol: "£",
    type: "debit",
    status: "Reversed",
    flag: "icons/usd.svg",
  },
];
