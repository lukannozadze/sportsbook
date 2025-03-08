import { useGetTree } from "@/services/tree";
import { Sport } from "@/types";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

type AppContextT = {
 sports:Sport[]
};

export const AppContext = createContext<AppContextT | null>(null);

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [sports,setSports] = useState<Sport[]>([]);
  const {data} = useGetTree();

  useEffect(() => {
    if (!data) return;
    // Get the first 10 items from the object (values)
    const first10Sports = Object.values(data.EN.Sports).slice(0, 10);
    setSports(first10Sports as Sport[]);
  }, [data]);
console.log(sports);
  const value = {
   sports,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppProvider = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppProvider must be used within AppProvider");
  }

  return context;
};