import React from 'react'
import Divider from './ui/divider'

export default function SportsSidebar() {
  return (
   <div className='w-full h-content bg-[#2E3740] my-4'>
     <div className='flex justify-between items-center p-4'>
        <span className='text-white'>All Games</span>
        <span className='text-white'>2328</span>
     </div>
     <Divider/>
     <div>
        <ul>
            <li className='flex justify-between items-center p-4'>
                <span>Soccer</span>
                <span>198</span>
            </li>
            <li className='flex justify-between items-center p-4'>
                <span>Basketball</span>
                <span>77</span>
            </li>
            <li className='flex justify-between items-center p-4'>
                <span>Football</span>
                <span>142</span>
            </li>
            <li className='flex justify-between items-center p-4'>
                <span>Tennis</span>
                <span>23</span>
            </li>
        </ul>
     </div>
   </div>
  )
}
