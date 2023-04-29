import React from 'react'
import OrderItem from './OrderItem'

import { useSelector } from 'react-redux'
import { selectOrdersItems } from '../../store/ducks/orders/selectors'
import OrdersTabs from './OrderTabs/OrdersTabs'
import ConfirmationModal from '../UI/ConfirmationModal/ConfirmationModal'

const OrderGrid = () => {

  const orders = useSelector(selectOrdersItems)

  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8'>
          {orders.map((order) => {
            return <OrderItem order={order} key={order.order_id}/>
          })}
      </div>
    </div>
  )
}

export default OrderGrid