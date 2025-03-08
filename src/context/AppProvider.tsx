import { createContext, PropsWithChildren, useEffect } from "react";

type PopupTypes = "signIn" | "report";
type AppContextT = {
  signInModalOpen: boolean;
  reportModalOpen: boolean;
  setOpenModal: (open: boolean, type: PopupTypes) => void;
};

export const AppContext = createContext<AppContextT | null>(null);

export const AppProvider = ({ children }: PropsWithChildren) => {
  

  useEffect(() => {
   //initial request here
  }, []);

  const value = {
   
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const usePopupProvider = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppProvider must be used within AppProvider");
  }

  return context;
};