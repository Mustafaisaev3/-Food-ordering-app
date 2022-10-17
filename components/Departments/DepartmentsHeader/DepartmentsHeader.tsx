import React from 'react'
import ListBox from '../../UI/ListBox'

const DepartmentsHeader = () => {
  return (
    <div className='w-full pb-[50px]'>
        <div className='flex justify-between border-b-[1px] border-[#EA9769] py-2'>
          <div className='flex items-center gap-2 '>
            {/* <Tab classes='bg-[#2dff2d]' text='New' />
            <Tab classes='bg-[#ffea2d]' text='Pending' />
            <Tab classes='bg-[#ff4d4d]' text='Failed' />
            <Tab classes='bg-[#2dd5ff]' text='Completed' /> */}
          </div>
          <div className='flex'>
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

export default DepartmentsHeader