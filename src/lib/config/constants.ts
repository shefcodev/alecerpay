import {
  DashboardIcon,
  WalletsIcon,
  ConvertIcon,
  SendIcon,
  ReceiveIcon,
  WithdrawIcon,
  CardsIcon,
  InvoicesIcon,
  AnalyticsIcon,
  SettingsIcon,
} from "@/components/icons";
import { ROUTES } from "./routes";
import type { Link } from "@/types";

export type LinksType = Record<string, { label: string; links: Link[] }>;

export const LINKS = {
  moneyTools: {
    label: `Money Tools`,
    links: [
      {
        label: "Dashboard",
        route: ROUTES.dashboard,
        icon: DashboardIcon,
      },
      {
        label: "Wallets",
        route: ROUTES.wallets,
        icon: WalletsIcon,
      },
      {
        label: "Convert",
        route: ROUTES.convert,
        icon: ConvertIcon,
      },
      {
        label: "Send Money",
        route: ROUTES.send,
        icon: SendIcon,
      },
      {
        label: "Receive Money",
        route: ROUTES.receive,
        icon: ReceiveIcon,
      },
      {
        label: "Withdraw Money",
        route: ROUTES.withdraw,
        icon: WithdrawIcon,
      },
    ],
  },
  business: {
    label: `Business`,
    links: [
      {
        label: "Cards",
        route: ROUTES.cards,
        icon: CardsIcon,
      },
      {
        label: "Invoices",
        route: ROUTES.invoices,
        icon: InvoicesIcon,
      },
    ],
  },

  support: {
    label: `Support`,
    links: [
      {
        label: "Analytics",
        route: ROUTES.analytics,
        icon: AnalyticsIcon,
      },
      {
        label: "Settings",
        route: ROUTES.settings,
        icon: SettingsIcon,
      },
    ],
  },
};
