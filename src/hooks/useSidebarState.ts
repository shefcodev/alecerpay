"use client";

import { createContext, Dispatch, SetStateAction, RefObject } from "react";
import { useComponentRef } from "./useComponentRef";

export interface UseSidebarContextType {
  isExpanded: boolean | null;
  setIsExpanded: Dispatch<SetStateAction<boolean | null>>;
  ref: RefObject<HTMLDivElement | null>;
}

export const SidebarContext = createContext<UseSidebarContextType | null>(null);

export const useSidebarState = (): UseSidebarContextType => {
  const { isOpen, setIsOpen, ref } = useComponentRef<boolean, HTMLDivElement>();

  return {
    isExpanded: isOpen,
    setIsExpanded: setIsOpen,
    ref,
  };
};
