import React, { createContext, useContext, useState } from "react";

interface HeaderContextProps {
  children: React.ReactNode;
}

export interface HeaderContextTypes {
  headerTitle?: string;
  setHeader?: React.Dispatch<React.SetStateAction<string>>;
  setIsBack?: React.Dispatch<React.SetStateAction<boolean>>;
  isBack?: boolean;
}

export const HeaderContext = createContext<HeaderContextTypes>(
  {} as HeaderContextTypes
);

export const HeaderContextProvider = ({ children }: HeaderContextProps) => {
  const [headerTitle, setHeader] = useState("Quiz");
  const [isBack, setIsBack] = useState(false);

  const contextValue = {
    headerTitle,
    setHeader,
    setIsBack,
    isBack,
  };

  return (
    <HeaderContext.Provider value={contextValue}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderContext = () => useContext(HeaderContext);
