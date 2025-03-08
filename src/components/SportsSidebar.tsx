import { useAppProvider } from '@/context/AppProvider'
import Divider from './ui/divider'

export default function SportsSidebar() {
    const {sports} = useAppProvider();
  return (
   <div className='w-full h-content bg-[#2E3740] my-4'>
     <div className='flex justify-between items-center p-4'>
        <span className='text-white'>All Games</span>
        <span className='text-white'>2328</span>
     </div>
     <Divider/>
     <div>
        {sports && sports.length > 0 ? (
          <ul>
            {sports.map((sport) => {
              return (
                <li key={sport.ID} className='flex justify-between items-center p-4'>
                  <span>{sport.name}</span>
                  <span>{"asdasd"}</span>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className='text-white'>No sports available</p>
        )}
      </div>
   </div>
  )
}
