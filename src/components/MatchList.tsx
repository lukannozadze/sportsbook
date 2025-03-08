/* eslint-disable @typescript-eslint/ban-ts-comment */
import "../components.scss"
export default function MatchList() {
  return (
    <div className='w-full h-[500px] bg-[#2E3740] material-icons'>
        <div className='flex justify-between items-center p-4'>
            <span className='text-white'>All Games</span>
            <span className='text-white'>2328</span>
            {/* @ts-expect-error */}
            <span  className="flag" country='georgia'></span> 
        </div>
        
    </div>
  )
}
