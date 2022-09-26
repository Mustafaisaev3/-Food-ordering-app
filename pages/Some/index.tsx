import React from 'react'
import { useSelector } from 'react-redux'

function Some() {
  // let orders = useSelector(state => state.orders)
  // console.log(orders)
  return (
    <div className='w-[1000px] h-[500px] '>
      {
        orders.forEach((e) => {
          console.log(e.date)
        })
      }
    </div>
  )
}

export default Some