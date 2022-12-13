import React, { useState } from 'react'
import OrderKanban from '../../components/Order/OrderKanban'
import OrderGrid from '../../components/Order/OrderGrid'
import OrdersTabs from '../../components/Order/OrderTabs/OrdersTabs'

const Orders = () => {
  enum OrdersViewType {
    GRID = 'GRID',
    KANBAN = 'KANBAN',
  }
  const [ordersViewType, setOrdersViewType] = useState(OrdersViewType.GRID)

  return (
    <div className='py-[28px]'>
        <OrdersTabs setOrdersViewType={setOrdersViewType} ordersViewType={OrdersViewType} />
        {ordersViewType == OrdersViewType.GRID 
          ?
          <OrderGrid />
          :
          <OrderKanban />
        }
    </div>
  )
}

export default Orders