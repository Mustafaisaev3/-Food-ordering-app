import React, { useEffect, useState } from 'react'
import { OrderType } from '../../utils/types';
import {RiUserFill} from 'react-icons/ri'
import { useUI } from '../../contexts/ui.context';
import { Order } from '../../store/ducks/orders/contracts/state';
import useDeliveryTime from '../../hooks/useDeliveryTime';
import getOrderStatusColor from '../../utils/getOrderStatusColor';

interface OrdersType {
  order: Order
}

const OrderItem = ({ order }: OrdersType) => {
  const {time, distance,getDeliveryTime} = useDeliveryTime()
   
  useEffect(() => {
    let timeId = setInterval(() => {
      getDeliveryTime(15, order.date)
    }, 1000)

    return function cleanup () {
      clearInterval(timeId)
    }
  })

  const { openModal, setModalView } = useUI();


	function handlePopupView() {
		// setModalData({ data: data });
		setModalView("ORDER_VIEW");
		return openModal();
	}
  
  return (
    <div className='w-[300px] h-auto rounded bg-[#252836] overflow-hidden shadow-lg shadow-green-900 ' onClick={() => handlePopupView()}>
    {/* <div className='w-[300px] h-[350px] rounded bg-[#252836] overflow-hidden' > */}
        {/* <div className='h-full w-full p-[10px] border-[2px] border-[#ffc311] '> */}
        <div className={`flex flex-col justify-between h-full w-full p-[20px] shadow-blue-300/80` }>
          <div className='order-header flex justify-between items-center'>
            <div className='flex flex-col'>
              <div className='text-white'>Order: {order.order_id}</div>
              <div className='text-white'>Kyiv, 76</div>
            </div>
            <div className='flex items-center justify-center w-[50px] h-[50px] rounded-full bg-white'>
              <RiUserFill width={50} height={50} />
            </div>
          </div>
          {/* <div className='products-container py-[20px]'>
            {order.items.map((item) => {
              return <div className='flex items-center pt-[15px]'>
                <div className='w-[50px] h-[50px] flex items-center'>
                  <img src={item.img} alt="" />
                </div>
                <div className='flex flex-col text-white w-full pl-[10px]'>
                  <div>{item.title}</div>
                  <div>{item.price}</div>
                </div>
              </div>
            })}
          </div> */}
          <div className='flex items-end pt-[15px] rounded gap-1'>
              <div className={`flex items-center justify-center text-[20px] text-white font-bold bg-[${distance && getOrderStatusColor(distance)}] w-1/3 p-[5px] rounded`}>{time.deliveryHour}</div>              
              <div className={`flex items-center justify-center text-[20px] text-white font-bold bg-[${distance && getOrderStatusColor(distance)}] w-1/3 p-[5px] rounded`}>{time.deliveryminute}</div>              
              <div className={`flex items-center justify-center text-[20px] text-white font-bold bg-[${distance && getOrderStatusColor(distance)}] w-1/3 p-[5px] rounded`}>{time.deliverySeconds}</div>
          </div>
        </div>
    </div>
  )
}

export default OrderItem

