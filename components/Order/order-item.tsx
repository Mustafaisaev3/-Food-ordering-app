import React, { useEffect, useState } from 'react'




const OrderItem = ({orderAddTime}: {orderAddTime: number}) => {

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
    const deliveryOn = orderAddTime + deliveryMinute
    
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

  const getStatusColor = (distance) => {
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
  
  
  return (
    <div className='w-[300px] h-[350px] rounded bg-[#252836] overflow-hidden'>
        {/* <div className='h-full w-full p-[10px] border-[2px] border-[#ffc311] '> */}
        <div className={`h-full w-full p-[10px] border-[2px] border-[${distance && getStatusColor(distance)}] ` }>
          <div className='flex items-end h-full p-[15px] rounded gap-1'>
              <div className={`flex items-center justify-center text-[20px] text-white font-bold bg-[${distance && getStatusColor(distance)}] w-1/3 p-[5px] rounded`}>{time.deliveryHour}</div>
              :
              <div className={`flex items-center justify-center text-[20px] text-white font-bold bg-[${distance && getStatusColor(distance)}] w-1/3 p-[5px] rounded`}>{time.deliveryminute}</div>
              :
              <div className={`flex items-center justify-center text-[20px] text-white font-bold bg-[${distance && getStatusColor(distance)}] w-1/3 p-[5px] rounded`}>{time.deliverySeconds}</div>
          </div>
        </div>
    </div>
  )
}

export default OrderItem