import React, { useState } from 'react'
import OrderKanban from '../../components/Order/OrderKanban'
import OrderGrid from '../../components/Order/OrderGrid'
import OrdersTabs from '../../components/Order/OrderTabs/OrdersTabs'
import { useSelector } from 'react-redux'
import { selectOrdersItems } from '../../store/ducks/orders/selectors'

const Orders = () => {
  enum OrdersViewType {
    GRID = 'GRID',
    KANBAN = 'KANBAN',
  }
  const [ordersViewType, setOrdersViewType] = useState(OrdersViewType.GRID)
  const orsers = useSelector(selectOrdersItems)

  return (
    <div className='py-[28px]'>
        <OrdersTabs setOrdersViewType={setOrdersViewType} ordersViewType={OrdersViewType} />
        {orsers.length ? (
          ordersViewType == OrdersViewType.GRID 
            ?
            <OrderGrid />
            :
            <OrderKanban />
        ): (
          <div className='w-full h-full flex flex-col items-center justify-center gap-4'>
            <img src="/assets/images/empty_orders_3.png" alt="" />
            <h4 className='text-white text-[50px]'>No orders</h4>
          </div>
        )}
    </div>
  )
}

export default Orders