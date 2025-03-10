import Divider from "./ui/divider";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function OddsTable() {
  return (
    <div className="w-3xs max-w-3xs h-[150px] bg-[#2E3740]">
      <div className="flex justify-between items-center p-4 pb-5 text-sm text-[#555A5E]">
        <span className="text-white font-bold">Single</span>
        <span>Multiple</span>
        <span>System</span>
        <DeleteForeverIcon className="text-[#DC2625]"/>
      </div>
      
      <Divider/>
    </div>
  );
}
