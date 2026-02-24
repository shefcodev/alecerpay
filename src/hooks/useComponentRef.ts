"use client";

import {
  useState,
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
  RefObject,
} from "react";

export interface UseComponentRefOptions<T = boolean> {
  initialValue?: T | null;
}

export interface UseComponentRefReturn<T = boolean, S = HTMLDivElement> {
  isOpen: T;
  setIsOpen: Dispatch<SetStateAction<T>>;
  ref: RefObject<S | null>;
}

export function useComponentRef<
  T = boolean,
  S extends Element = HTMLDivElement,
>(options?: UseComponentRefOptions<T>) {
  const { initialValue = true as T } = options || {};
  const [isOpen, setIsOpen] = useState<T | null>(initialValue);
  const ref = useRef<S | null>(null);

  useEffect(() => {
    const clickOutsideHandler = (event: MouseEvent): void => {
      if (ref?.current && !ref?.current.contains(event.target as Node))
        setIsOpen(false as T);
    };

    document.addEventListener("mousedown", clickOutsideHandler);

    return () => document.removeEventListener("mousedown", clickOutsideHandler);
  }, []);

  return {
    isOpen,
    setIsOpen,
    ref,
  };
}
