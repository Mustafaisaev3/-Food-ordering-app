import React from 'react'
import { RiCarFill } from 'react-icons/ri'

const Tabs = () => {
  return (
    <div className='flex items-center gap-1 rounded absolute left-0 bottom-[-100%] p-2 bg-slate-500 z-100'>
        <div className='bg-[#2dff2d] cursor-pointer p-[5px] rounded'>
            <RiCarFill size={20} />
        </div>
        <div className='bg-[#ff2d2d] cursor-pointer p-[5px] rounded'>
            <RiCarFill size={20} />
        </div>
        <div className='bg-[#2d68ff] cursor-pointer p-[5px] rounded'>
            <RiCarFill size={20} />
        </div>
    </div>
  )
}

export default Tabs