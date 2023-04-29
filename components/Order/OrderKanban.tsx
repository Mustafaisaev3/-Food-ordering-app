import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { OrderStatusArr } from '../../utils/types'
import { selectOrders, selectOrdersItems } from '../../store/ducks/orders/selectors'
import OrderItem from './OrderItem'
import KanbanColumn from './OrderKanban/KanbanColumn'

const OrderKanban = () => {
    const [dragEnterStatus, setDragEnterStatus] = useState('')
    const orders = useSelector(selectOrdersItems)

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: number) => {
        console.log('onDragStart')
    }

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>, id: number) => {
        console.log('onDragEnter')
    }

    const handleDragEnd = () => {
        console.log('onDragEnd')
    }

  return (
    <div className='w-full h-full flex '>
        <div className='w-auto grov flex gap-5 overflow-x-scroll'>
            {OrderStatusArr.map(item => {
                return <KanbanColumn setDragEnterStatus={setDragEnterStatus} dragEnterStatus={dragEnterStatus} orders={orders} columnTitle={item.title} bg={item.color} />
            })}
            

        </div>
    </div>
  )
}

export default OrderKanban