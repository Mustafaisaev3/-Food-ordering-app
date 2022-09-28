import { useState } from "react";


const useDeliveryTime = () => {
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

  const getDeliveryTime = (deliveryMin: number, orderAddTime: number) => {
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

  return {
    time, 
    distance,
    getDeliveryTime,
  }
}

export default useDeliveryTime