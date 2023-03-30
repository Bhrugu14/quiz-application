import React from "react";
import { HeaderContextProvider } from "./HeaderContext";
import { LoadingContextProvider } from "./LoadingContext";
import { ModalContextProvider } from "./ModalContext";

export * from "./HeaderContext";
export * from "./LoadingContext";
export * from "./ModalContext";

interface Props {
  children: React.ReactNode;
}

export const AllContext = ({ children }: Props) => {
  return (
    <LoadingContextProvider>
      <ModalContextProvider>
        <HeaderContextProvider>{children}</HeaderContextProvider>
      </ModalContextProvider>
    </LoadingContextProvider>
  );
};
