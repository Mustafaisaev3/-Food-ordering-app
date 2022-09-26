import React, { useEffect, useState } from 'react'
import { OrderType } from '../../utils/types';
import {RiUserFill} from 'react-icons/ri'
import { useUI } from '../../contexts/ui.context';
import { Order } from '../../store/ducks/orders/contracts/state';

interface OrdersType {
  order: Order
}

const OrderItem = ({ order }: OrdersType) => {

  const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

  const [distance, setDistance] = useState(0)
  const [time, setTime] = useState({
    deliveryHour: 0,
    deliveryminute: 0, 
    deliverySeconds: 0
  })

  const getDeliveryTime = (deliveryMin: number) => {
    const deliveryMinute = 1000 * 60 * deliveryMin
    const deliveryOn = order.date + deliveryMinute
    
    const now = new Date().getTime(),
    distance = deliveryOn - now;
    setDistance(distance)

    let deliveryHour = Math.floor((distance % (day)) / (hour)),
        deliveryminute = Math.floor((distance % (hour)) / (minute)),
        deliverySeconds =  Math.floor((distance % (minute)) / second);

    setTime({
      deliveryHour,
      deliveryminute, 
      deliverySeconds
    })
  }

  const getStatusColor = (distance = 1000000000) => {
    distance = distance / 1000 / 60
    if (distance > 10){
      return 'green'
    } else if (distance > 5) {
      return '#ffc311'
    } else if (distance < 5) {
      return 'red'
    }
 
  }
  
  useEffect(() => {
    let timeId = setInterval(() => {
      getDeliveryTime(15)
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
              <div className={`flex items-center justify-center text-[20px] text-white font-bold bg-[${distance && getStatusColor(distance)}] w-1/3 p-[5px] rounded`}>{time.deliveryHour}</div>              
              <div className={`flex items-center justify-center text-[20px] text-white font-bold bg-[${distance && getStatusColor(distance)}] w-1/3 p-[5px] rounded`}>{time.deliveryminute}</div>              
              <div className={`flex items-center justify-center text-[20px] text-white font-bold bg-[${distance && getStatusColor(distance)}] w-1/3 p-[5px] rounded`}>{time.deliverySeconds}</div>
          </div>
        </div>
    </div>
  )
}

export default OrderItem


