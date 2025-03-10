import EqualizerIcon from '@mui/icons-material/Equalizer';

export default function MatchItem() {
  return (
    <div className="flex justify-between items-center px-8 py-2 text-xs text-white font-bold bg-[#2C333C] bg-opacity-100">
    <div className="flex items-center gap-5">
    <div className="flex flex-col items-center">
        <span>10 Jun</span>
        <span>17:10</span>
    </div>
    <div>
  <span>FC Orenburg - PFC Sochi</span>
    </div>
    </div>
    <EqualizerIcon className='text-[#70757B]'/>
    </div>
  )
}
