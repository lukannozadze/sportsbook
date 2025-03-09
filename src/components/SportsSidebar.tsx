/* eslint-disable @typescript-eslint/ban-ts-comment */

import { useAppProvider } from "@/context/AppProvider";
import Divider from "./ui/divider";

export default function SportsSidebar() {
  const { sports,allGameCount,selectSports,selectedSports } = useAppProvider();
  console.log(selectedSports);
  return (
    <div className="w-full h-content bg-[#2E3740] my-4 font-bold">
      <div className="flex justify-between items-center p-4 text-sm">
        <span className="text-white pl-6">All Games</span>
        <span className="text-white">{allGameCount}</span>
      </div>
      <Divider />
      <div>
        {sports && sports.length > 0 ? (
          <ul>
            {sports.map((sport) => {
              const formattedSportName = sport.Name.replace(
                " ",
                ""
              ).toLowerCase();
              return (
                <li
                  key={sport.ID}
                  onClick={()=>selectSports(sport.Name)}
                  className="flex justify-between items-center p-4 hover:bg-[#26292F] cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    {/* @ts-expect-error */}
                    <span className="sport-icon text-[#DC2625]" sport={formattedSportName}></span>
                    <span className="text-sm text-white">{sport.Name}</span>
                  </div>
                  <span className="text-sm text-[#555A5E]">
                    {Object.keys(sport.Regions).length}
                  </span>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-white">No sports available</p>
        )}
      </div>
    </div>
  );
}
