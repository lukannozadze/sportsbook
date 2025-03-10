/* eslint-disable @typescript-eslint/ban-ts-comment */

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { useAppProvider } from "@/context/AppProvider";
import { Sport } from "@/types";
import { Checkbox } from "./ui/checkbox";
import {useState } from "react";
  
  type Props ={
    sport:Sport
  }

  type AllCheckedT = {
    region: string[],
    sport: string[]
  }
  export default function RegionItem({sport}:Props) {
    const { selectedSports,selectChampionships,deselectChampionships,setSelectedChampionships,selectedChampionships} = useAppProvider();
    const [allChecked,setAllChecked] = useState<AllCheckedT>({region:[],sport:[]});

    return (
      <div>
        {
            selectedSports.includes(sport.Name) && 
            Object.values(sport.Regions).slice(0,3).map(region => (
              <Accordion
                key={region.ID} // Unique key
                className="text-sm text-white font-bold"
                type="single"
                collapsible
              >
                <AccordionItem value={`region-${region.ID}`}>
                  <AccordionTrigger className="py-2 px-4.5 hover:no-underline cursor-pointer" >
                    <div className="flex justify-between items-center w-full">
                    <div>
                    {/* @ts-expect-error */}
                    <span className="flag rounded-full no-underline" country={region.KeyName.toLowerCase()}></span>
                    <span>{region.KeyName}</span>
                    </div>
                    <Checkbox checked={allChecked.region.includes(region.KeyName) && allChecked.sport.includes(sport.KeyName)} 
                    onCheckedChange={(checked) => {

                        setSelectedChampionships((prev) => {
                            const champKeys = Object.values(region.Champs).map((item) => item.KeyName);
                          
                            return checked
                              ? [...new Set([...prev, ...champKeys])]
                              : prev.filter((item) => !champKeys.includes(item));
                          });
                          
                        setAllChecked((prev) => {
                          const newState = {
                            region: checked
                              ? [...prev.region, region.KeyName]
                              : prev.region.filter((r) => r !== region.KeyName),
                            sport: checked
                              ? [...prev.sport, sport.Name]
                              : prev.sport.splice(prev.sport.indexOf(sport.KeyName),1),
                          };
                      
                          return newState;
                        });
                      }}
                    className="rounded-none data-[state=checked]:bg-[#FD4131] data-[state=checked]:border-[#FD4131] border-[#FD4131] cursor-pointer"/>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="flex flex-col gap-1">
                   {Object.values(region.Champs).map(champ=>{
                    return <li key={champ.ID} className="flex  items-center justify-between hover:bg-[#26292F] px-4 py-1.5">
                        <span className="text-sm pl-6">{champ.KeyName}</span>
                        <Checkbox onCheckedChange={(checked)=>{
                            if(checked){
                                selectChampionships(champ.KeyName)
                                return;
                            }
                            deselectChampionships(champ.KeyName)
                            setAllChecked((prev) => ({ ...prev, checked: false, region:prev.region.filter(item=>item!==region.KeyName), sport: prev.sport.filter(item => item!=sport.Name) }));
                        }} checked={(allChecked.region.includes(region.KeyName) && allChecked.sport.includes(sport.Name)) || selectedChampionships.includes(champ.KeyName)} className="rounded-none data-[state=checked]:bg-[#FD4131] data-[state=checked]:border-[#FD4131] border-[#FD4131] cursor-pointer"/>
                    </li>
                   })}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))
        }
      </div>
    );
  }
  