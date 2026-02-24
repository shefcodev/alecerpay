"use client";

import { FC, ReactNode, useContext } from "react";
import { SidebarContext, useSidebarState } from "@/hooks/useSidebarState";

interface SidebarProviderProps {
  children: ReactNode;
}

const SidebarContextProvider: FC<SidebarProviderProps> = ({ children }) => {
  const context = useSidebarState();

  return (
    <SidebarContext.Provider value={context}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context)
    throw new Error(
      "useSidebarContext must be called inside the SidebarStateProvider",
    );
  return context;
};

export default SidebarContextProvider;
