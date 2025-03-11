import EqualizerIcon from '@mui/icons-material/Equalizer';

type Props = {
    team1:string,
    team2:string
    matchDate:string
}

export default function MatchItem({team1,team2,matchDate}:Props) {

  return (
    <div className="flex justify-between items-center px-8 py-2 text-xs text-white font-bold bg-[#2C333C] bg-opacity-100">
    <div className="flex items-center gap-5">
    <div className="flex flex-col items-center">
        <span>{matchDate}</span>
        <span>17:10</span>
    </div>
    <div>
  <span>{`${team1} - ${team2}`}</span>
    </div>
    </div>
    <EqualizerIcon className='text-[#70757B]'/>
    </div>
  )
}
