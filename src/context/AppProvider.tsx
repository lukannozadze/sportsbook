import { useGetTree } from "@/services/tree";
import { Sport } from "@/types";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

type AppContextT = {
 sports:Sport[],
 allGameCount: number | null,
 selectedSports:string[],
 selectSports: (sport: string) => void,
 deselectSports: (sport: string) => void

};

export const AppContext = createContext<AppContextT | null>(null);

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [sports,setSports] = useState<Sport[]>([]);
  const [allGameCount,setAllGameCount] = useState<number | null>(null);
  const [selectedSports,setSelectedSports] = useState<string[]>([]);
  const {data} = useGetTree();

  useEffect(() => {
    if (!data) return;
    setAllGameCount(Object.values(data.EN.Sports)
    .flatMap(s => Object.values(s.Regions).flatMap(r => Object.values(r.Champs)))
    .reduce((sum, c) => sum + c.GameCount, 0));
    const sportsToShow = Object.values(data.EN.Sports).slice(0, 6);
    setSports(sportsToShow as Sport[]);
  }, [data]);

  const selectSports = (sport:string) =>{
    setSelectedSports((prev) => {
      if (!prev.includes(sport)) {
        return [...prev, sport];
      }
      return prev;
    });  
  }
const deselectSports = (sport:string) =>{
  setSelectedSports((prev) => {
    if (prev.includes(sport)) {
      return prev.filter(item=>item !== sport)
    }
    return prev;
  }); 
}

  const value = {
   sports,
   allGameCount,
   selectedSports,
   selectSports,
   deselectSports
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