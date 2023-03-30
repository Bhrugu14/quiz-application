import React, { createContext, useContext, useState } from "react";
import { Modal } from "../component";

interface modalProps {
  children: React.ReactNode;
}

interface ModalContextType {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isOkay?: boolean;
  setOkay?: React.Dispatch<React.SetStateAction<boolean>>;
  ModalData?: React.Dispatch<React.SetStateAction<JSX.Element>>;
  setStrict?: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ModalContext = createContext<ModalContextType>(
  {} as ModalContextType
);

export const ModalContextProvider = ({ children }: modalProps) => {
  const [open, setOpen] = useState(false);
  const [isOkay, setOkay] = useState(true);
  const [strict, setStrict] = useState(false);
  const [ModalContent, ModalData] = useState(() => <></>);

  const contextValue = {
    open,
    setOpen,
    isOkay,
    setOkay,
    ModalData,
    setStrict,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {open && (
        <Modal
          strict={strict}
          open={open}
          setOpen={setOpen}
          isOkay={isOkay}
          ModalContent={ModalContent}
        />
      )}
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
