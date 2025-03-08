import Divider from "./ui/divider";

export default function OddsTable() {
  return (
    <div className="w-3xs max-w-3xs h-[150px] bg-[#2E3740]">
      <div className="flex justify-between items-center p-4 pb-2 text-sm text-[#555A5E]">
        <span className="text-white font-bold">Single</span>
        <span>Multiple</span>
        <span>System</span>
      </div>
      <Divider/>
    </div>
  );
}
