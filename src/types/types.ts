import { FC } from "react";
export type { Route } from "../lib/config/routes";

export interface Link {
  label: string;
  route: string;
  icon?: FC<{ size?: number; stroke?: string; className?: string }>;
}
