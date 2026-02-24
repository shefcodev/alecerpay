"use client";

import { FC, ReactNode, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useSidebarContext } from "@/sidebar-provider";
import { useScreenWidth } from "@/hooks/useScreenWidth";

const StackLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const { isExpanded, setIsExpanded } = useSidebarContext();
  const screenWidth = useScreenWidth();

  useEffect(() => {
    if (screenWidth < 768) setIsExpanded(false);
    else setIsExpanded(true);
  }, [screenWidth, setIsExpanded]);

  return (
    <section className="w-full h-screen flex">
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <main className="flex-1 overflow-y-auto scroll-bar">
        <Header />
        <>{children}</>
      </main>
    </section>
  );
};

export default StackLayout;
