import React from 'react'
import { OrderType } from '../../../utils/types'

interface KanbanItemInterface {
    children: any,
    order: OrderType,
    getDraggedOrderItem: any
}

const KanbanItem = ({children, order, getDraggedOrderItem}: KanbanItemInterface) => {

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: number) => {
        getDraggedOrderItem(order)
        console.log('onDragStart')
    }

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>, id: number) => {
        console.log('onDragEnter')
    }

    const handleDragEnd = () => {
        console.log('onDragEnd')
    }

  return ( 
    <div draggable={true} onDragStart={(e) => handleDragStart(e, order.order_id)} onDragEnter={(e) => handleDragStart(e, order.order_id)} onDragEnd={handleDragEnd}>
        {children}
    </div>   
  )
}

export default KanbanItem