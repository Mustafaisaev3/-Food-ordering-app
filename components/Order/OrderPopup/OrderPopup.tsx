import React from 'react'
import { useUI } from '../../../contexts/ui.context'
import CartItem from '../../Cart/CartItem'

const OrderPopup = () => {
  const {modalData: { data }} = useUI()
  console.log(data)

  return (
    <div className='w-[800px] h-[600px] rounded-md bg-[#252836]'>
      <div className='w-full h-auto px-5 py-3 text-2xl text-white font-bold border-b border-gray-500'>Order: #212121</div>
      <div className='w-[800px] h-[450px]'>
        <div className='w-1/2 p-3 overflow-hidden'>
          <div className='w-full h-[450px] overflow-y-scroll scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-thumb-rounded'>
            {data.items.map((item) => {
              return <CartItem key={item.id} item={item}/>
            })}
          </div>
          <div className='flex justify-center items-center p-[10px] cursor-pointer bg-[#EA6969] rounded-lg w-full h-auto'>
              <div className='text-[15px] text-[white]'>Add product</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderPopup