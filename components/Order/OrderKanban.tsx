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
            {/* <div className='bord min-w-[350px] min-h-[200px] h-auto rounded-md bg-[#2D303E] overflow-hidden'>
                <div className='header w-full p-5 bg-[#2dff2d58] text-white text-center'>
                    NEW
                </div>
                <div className='w-full h-auto py-3 flex flex-col items-center gap-5'>
                    {orders && orders.map((order => {
                        if (order.status == 'NEW'){
                            return <div draggable={true} onDragStart={(e) => handleDragStart(e, order.order_id)} onDragEnter={(e) => handleDragStart(e, order.order_id)} onDragEnd={handleDragEnd}>
                                <OrderItem order={order}/>
                            </div>      
                        }
                    }))}
                </div>
            </div>
            <div className='bord min-w-[350px] h-[400px] rounded-md bg-[#2D303E] overflow-hidden'>
                <div className='header w-full p-5 bg-[#e62dff4d] text-white text-center'>
                    PREPARATION
                </div>
                <div className='w-full h-auto py-3 flex flex-col items-center gap-5'>
                    {orders && orders.map((order => {
                        if (order.status == 'PREPARATION'){
                            return <div draggable={true} onDragStart={(e) => handleDragStart(e, order.order_id)} onDragEnter={(e) => handleDragStart(e, order.order_id)} onDragEnd={handleDragEnd}>
                                <OrderItem order={order}/>
                            </div>      
                        }
                    }))}
                </div>
            </div>
            <div className='bord min-w-[350px] h-[400px] rounded-md bg-[#2D303E] overflow-hidden'>
                <div className='header w-full p-5 bg-[#ffea2d48] text-white text-center'>
                    DELIVERY
                </div>
                <div className='w-full h-auto py-3 flex flex-col items-center gap-5'>
                    {orders && orders.map((order => {
                        if (order.status == 'DELIVERY'){
                            return <div draggable={true} onDragStart={(e) => handleDragStart(e, order.order_id)} onDragEnter={(e) => handleDragStart(e, order.order_id)} onDragEnd={handleDragEnd}>
                                <OrderItem order={order}/>
                            </div>      
                        }
                    }))}
                </div>
            </div>
            <div className='bord min-w-[350px] h-[400px] rounded-md bg-[#2D303E] overflow-hidden'>
                <div className='header w-full p-5 bg-[#2dd5ff54] text-white text-center'>
                    DONE
                </div>
                <div className='w-full h-auto py-3 flex flex-col items-center gap-5'>
                    {orders && orders.map((order => {
                            if (order.status == 'DONE'){
                                return <OrderItem order={order}/>
                            }
                    }))}
                </div>
            </div>
            <div className='bord min-w-[350px] h-[400px] rounded-md bg-[#2D303E] overflow-hidden'>
                <div className='header w-full p-5 bg-[#ff4d4d43] text-white text-center'>
                    REJECTED
                </div>
                <div className='w-full h-auto py-3 flex flex-col items-center gap-5'>
                    {orders && orders.map((order => {
                            if (order.status == 'REJECTED'){
                                return <OrderItem order={order}/>
                            }
                    }))}
                </div>
            </div> */}

            {OrderStatusArr.map(item => {
                return <KanbanColumn setDragEnterStatus={setDragEnterStatus} dragEnterStatus={dragEnterStatus} orders={orders} columnTitle={item.title} bg={item.color} />
                // orders.map(order => {

                // })
            })}
            

        </div>
    </div>
  )
}

export default OrderKanban