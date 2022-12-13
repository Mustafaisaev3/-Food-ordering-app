import React from 'react'
import ListBox from '../../UI/ListBox'
import Tab from './Tab'
import {BsFillGridFill} from 'react-icons/bs'
import {HiViewBoards} from 'react-icons/hi'

const OrdersTabs = ({ordersViewType, setOrdersViewType}: any) => {
  const handleOrdersViewTypeChoose = (viewType: typeof ordersViewType) => {
    if (viewType == ordersViewType.GRID){
      setOrdersViewType(ordersViewType.GRID)
    } else if (viewType == ordersViewType.KANBAN) {
      setOrdersViewType(ordersViewType.KANBAN)
    }
  }

  return (
    <div className='w-full pb-[50px]'>
        <div className='flex justify-between border-b-[1px] border-[#EA9769] py-2'>
          <div className='flex items-center gap-2 '>
            <Tab classes='bg-[#2dff2d] w-[100px]' text='New' />
            <Tab classes='bg-[#ffea2d] w-[100px]' text='Pending' />
            <Tab classes='bg-[#ff4d4d] w-[100px]' text='Failed' />
            <Tab classes='bg-[#2dd5ff] w-[100px]' text='Completed' />
          </div>
          <div className='flex'>
            <div className='flex gap-3 pr-4'>
              <div className=' flex items-center justify-center p-2 bg-[#252836] rounded-md cursor-pointer' onClick={() => handleOrdersViewTypeChoose(ordersViewType.GRID)}>
                <BsFillGridFill size={20} color={'#EA9769'} />
              </div>
              <div className=' flex items-center justify-center p-2 bg-[#252836] rounded-md cursor-pointer' onClick={() => handleOrdersViewTypeChoose(ordersViewType.KANBAN)}>
                <HiViewBoards size={20} color={'#EA9769'} />
              </div>
            </div>
            <ListBox 
              options={[
                { name: "text-sorting-options", value: "options" },
                { name: "text-newest", value: "newest" },
                { name: "text-popularity", value: "popularity" },
                { name: "text-price-low-high", value: "low-high" },
                { name: "text-price-high-low", value: "high-low" },
              ]} 
            />
            <ListBox 
              options={[
                { name: "text-sorting-options", value: "options" },
                { name: "text-newest", value: "newest" },
                { name: "text-popularity", value: "popularity" },
                { name: "text-price-low-high", value: "low-high" },
                { name: "text-price-high-low", value: "high-low" },
              ]} 
            />
            <ListBox 
              options={[
                { name: "text-sorting-options", value: "options" },
                { name: "text-newest", value: "newest" },
                { name: "text-popularity", value: "popularity" },
                { name: "text-price-low-high", value: "low-high" },
                { name: "text-price-high-low", value: "high-low" },
              ]} 
            />
          </div>
        </div>
    </div>
  )
}

export default OrdersTabs