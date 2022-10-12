import React from 'react'
import Tab from './Tab'

const OrdersTabs = () => {
  return (
    <div className='w-full pb-[50px]'>
        <div className='flex items-center gap-2 border-b-[1px] border-[#EA9769] py-2'>
            <Tab classes='bg-[#2dff2d]' text='New' />
            <Tab classes='bg-[#ffea2d]' text='Pending' />
            <Tab classes='bg-[#ff4d4d]' text='Failed' />
            <Tab classes='bg-[#2dd5ff]' text='Completed' />
        </div>
    </div>
  )
}

export default OrdersTabs