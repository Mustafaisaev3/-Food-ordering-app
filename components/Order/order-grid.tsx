import React from 'react'
import OrderItem from './order-item'

const OrderGrid = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8'>
        <OrderItem orderAddTime={1660205655818}/>
        <OrderItem orderAddTime={1660226800579 }/>
        <OrderItem orderAddTime={1660205655818}/>
        <OrderItem orderAddTime={1660205655818}/>
        <OrderItem orderAddTime={1660205655818}/>
        <OrderItem orderAddTime={1660205655818}/>
        
    </div>
  )
}

export default OrderGrid