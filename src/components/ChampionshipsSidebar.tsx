/* eslint-disable @typescript-eslint/ban-ts-comment */

import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import { useAppProvider } from "@/context/AppProvider";
import RegionItem from "./RegionItem";

export default function ChampionshipsSidebar() {
  const { selectedSports, sports,gameCountBySport,deselectSports } = useAppProvider();
  return (
    <div className="w-full h-content bg-[#2E3740] my-4">
      <div>
        {sports && sports.length > 0 ?(
        <ul>
          {sports.map((sport) => {
            if (!selectedSports.includes(sport.Name)) return;
            const formattedSportName = sport.Name.replace(
                " ",
                ""
              ).toLowerCase();
            return (
                <div>
                    <li key={sport.ID} className="flex justify-between items-center p-4 font-bold">
                      <div className="flex gap-2 items-center">
                        {/* @ts-expect-error */}
                        <span className="sport-icon text-[#DC2625]" sport={formattedSportName}
                        ></span>
                        <span className="text-white text-sm">{sport.Name}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-white">{gameCountBySport[`${sport.Name}`]}</span>
                        <div className='cursor-pointer' onClick={()=>deselectSports(sport.Name)}>
                        <IndeterminateCheckBoxOutlinedIcon className='text-[#DC2625]'/>
                        </div>
                      </div>
                    </li>
                    <RegionItem key={sport.KeyName} sport={sport}/>
                </div>
            );
          })}
        </ul>)
        : (
            <p className="text-white">No sports available</p>
          )}
      </div>
    </div>
  );
}
