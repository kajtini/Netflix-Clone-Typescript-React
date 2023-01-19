import { createContext, useContext, useState, ReactNode } from "react";

type ModalContextType = {
  modal: boolean;
  openModal: () => void;
  closeModal: () => void;
};

type ModalContextProviderProps = {
  children: ReactNode;
};

const ModalContext = createContext({} as ModalContextType);

export function useModal() {
  return useContext(ModalContext);
}

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [modal, setModal] = useState(false);

  function openModal() {
    !modal && setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}
