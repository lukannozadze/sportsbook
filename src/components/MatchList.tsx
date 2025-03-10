/* eslint-disable @typescript-eslint/ban-ts-comment */

import "./../components.scss"
import MatchItem from "./MatchItem";
import Divider from "./ui/divider";
export default function MatchList() {
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
      <div className="w-full py-3 flex mt-1 gap-2 items-center text-sm text-white font-bold px-8 bg-gradient-to-r from-[#FD4131] to-black">
        {/* @ts-expect-error */}
          <span className="sport-icon" sport="soccer"></span>
          <span>Soccer</span>
      </div>
      <MatchItem/>
    </div>
  );
}
