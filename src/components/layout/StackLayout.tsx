"use client";

import { FC, ReactNode, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useSidebarContext } from "@/sidebar-provider";
import { useComponentRef } from "@/hooks/useComponentRef";
import { useScreenWidth } from "@/hooks/useScreenWidth";

const StackLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const { isExpanded, setIsExpanded } = useSidebarContext();
  const {
    isOpen: showBar,
    setIsOpen: setShowBar,
    ref,
  } = useComponentRef({ initialValue: false });
  const screenWidth = useScreenWidth();
  const isLargeScreen = screenWidth >= 768;

  const showBarHandler = (value: boolean): void => {
    if (isLargeScreen) return;
    setShowBar(value);
  };

  useEffect(() => {
    if (!isLargeScreen) setIsExpanded(false);
    else setIsExpanded(true);
  }, [isLargeScreen, setIsExpanded]);

  return (
    <section className="w-full h-screen flex">
      {isLargeScreen ? (
        <Sidebar
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          showBar={showBar}
          onShowBar={showBarHandler}
          ref={null}
        />
      ) : (
        <>
          {showBar && (
            <Sidebar
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
              showBar={showBar}
              onShowBar={showBarHandler}
              ref={ref}
            />
          )}
        </>
      )}
      <main className="flex-1 overflow-y-auto scroll-bar">
        <Header
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          showBar={showBar}
          onShowBar={showBarHandler}
        />
        <>{children}</>
      </main>
    </section>
  );
};

export default StackLayout;
