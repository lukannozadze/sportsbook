import { useGetTree } from "@/services/tree";
import { Sport } from "@/types";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

type AppContextT = {
 sports:Sport[],
 regions:Sport[],
 allGameCount: number | null,
 selectedSports:string[],
 selectedChampionships:string[],
 gameCountBySport:Record<string, number>,
 selectSports: (sport: string) => void,
 deselectSports: (sport: string) => void,
 selectChampionships:(champ:string) => void,
 deselectChampionships:(champ:string)=>void,
 setSelectedChampionships:React.Dispatch<React.SetStateAction<string[]>>
};

export const AppContext = createContext<AppContextT | null>(null);

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [sports,setSports] = useState<Sport[]>([]);
  const [regions,setRegions] = useState<Sport[]>([]);
  const [allGameCount,setAllGameCount] = useState<number | null>(null);
  const [gameCountBySport,setGameCountBySport] = useState<Record<string,number>>({});
  const [selectedSports,setSelectedSports] = useState<string[]>([]);
  const [selectedChampionships,setSelectedChampionships] = useState<string[]>([]);

  const {data} = useGetTree();

  useEffect(() => {
    if (!data) return;
    setAllGameCount(Object.values(data.EN.Sports)
    .flatMap(s => Object.values(s.Regions).flatMap(r => Object.values(r.Champs)))
    .reduce((sum, c) => sum + c.GameCount, 0));
    const sportsToShow = Object.values(data.EN.Sports).slice(0, 6);

    setGameCountBySport(Object.values(data.EN.Sports).reduce((acc, sport) => {
      const sportName = sport.Name; // Assuming the sport has a 'Name' property
      const totalGames = Object.values(sport.Regions)
        .flatMap((region) => Object.values(region.Champs))
        .reduce((sum, champ) => sum + champ.GameCount, 0);
  
      return { ...acc, [sportName]: totalGames };
    }, {}))

    const regionsToShow = sportsToShow.map(item => ({
      ...item,
      Regions: Object.keys(item.Regions).length > 3 
        ? Object.fromEntries(Object.entries(item.Regions).slice(0, 3)) 
        : item.Regions
    }))
    setSports(sportsToShow);
    setRegions(regionsToShow)
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
  const selectChampionships = (champ:string) =>{
    setSelectedChampionships(prev=>{
      if(!prev.includes(champ)){
        return [...prev,champ]
      }
      return prev;
    })
  }
  const deselectChampionships = (champ:string) =>{
    setSelectedChampionships(prev =>{
      if(prev.includes(champ)) {
        return prev.filter(item=> item!= champ)
      }
      return prev;
    })
  }
  
  const value = {
   sports,
   regions,
   allGameCount,
   selectedSports,
   selectedChampionships,
   gameCountBySport,
   selectSports,
   setSelectedChampionships,
   deselectSports,
   selectChampionships,
   deselectChampionships
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