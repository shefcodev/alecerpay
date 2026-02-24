export const ROUTES = {
  dashboard: "/",
  wallets: "/wallets",
  convert: "/convert",
  send: "/send",
  receive: "/receive",
  withdraw: "/withdraw",
  cards: "/cards",
  invoices: "/invoices",
  analytics: "/analytics",
  settings: "/settings",
} as const;

export const PROTECTED_ROUTES = [
  ROUTES.dashboard,
  ROUTES.wallets,
  ROUTES.convert,
  ROUTES.send,
  ROUTES.receive,
  ROUTES.withdraw,
  ROUTES.cards,
  ROUTES.invoices,
  ROUTES.analytics,
  ROUTES.settings,
] as const;

export const PUBLIC_ROUTES = [] as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];
