/* eslint-disable @typescript-eslint/ban-ts-comment */

import { useAppProvider } from "@/context/AppProvider";
import "./../components.scss";
import MatchItem from "./MatchItem";
import Divider from "./ui/divider";import { capitalizeWord } from "@/utils/capitalize";
export default function MatchList() {
  const {
    selectedMatches,
    teams,
  } = useAppProvider();

  return (
    <div className="w-full h-[500px] bg-[#2E3740] text-sm">
      <div className="flex justify-between items-center py-2 px-8">
        <span className="text-white font-bold">Date</span>
        <div className="flex gap-10">
          <div className="flex flex-col items-center">
            <span className="font-bold text-white">Match Result</span>
            <div className="flex gap-10 text-[#8F9396]">
              <span>1</span>
              <span>X</span>
              <span>2</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-white">Double Chance</span>
            <div className="flex gap-10 text-[#8F9396]">
              <span>1</span>
              <span>X</span>
              <span>2</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white">Total Goals</span>
            <div className="flex gap-5 text-[#8F9396]">
              <span>Over</span>
              <span>Under</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white">Both Team To Score</span>
            <div className="flex gap-5 text-[#8F9396]">
              <span>Over</span>
              <span>Under</span>
            </div>
          </div>
        </div>
      </div>
      <Divider />

      {Object.entries(selectedMatches).map(([sportName, match]) => (
        <div>
          <div
            key={sportName}
            className="w-full py-3 flex mt-1 gap-2 items-center text-sm text-white font-bold px-8 bg-gradient-to-r from-[#FD4131] to-black"
          >
            <div className="flex items-center gap-2">
            {/* @ts-expect-error */}
            <span  className="sport-icon text-lg" sport={sportName}></span>
            <span>{capitalizeWord(sportName)}</span>
            </div>
          </div>
          {match.map((m) => {
            const startTime = new Date(m.StartTime).toISOString();
            const team1 = teams.find((t) => t.ID === m.t1)?.Name;
            const team2 = teams.find((t) => t.ID === m.t2)?.Name;
            return (
              <MatchItem
                matchDate={startTime}
                team1={team1 || ""}
                team2={team2 || ""}
              />
            );
          })}
        </div>
      ))}

    </div>
  );
}
