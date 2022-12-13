import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useUI } from '../../../contexts/ui.context'
import { SetOrderStatus } from '../../../store/ducks/orders/actions'
import { OrderStatus } from '../../../store/ducks/orders/contracts/state'
import { OrderType } from '../../../utils/types'
import OrderItem from '../OrderItem'
import KanbanItem from './KanbanItem'


interface KanbanColumnInterface {
    columnTitle: string,
    bg: string,
    orders: OrderType[],
    setDragEnterStatus: any,
    dragEnterStatus: string
}

const KanbanColumn = ({columnTitle, bg, orders, dragEnterStatus, setDragEnterStatus}: KanbanColumnInterface) => {
//   const [draggedColumn, setDraggedColumn] = useState(false)
  const columnDraggedRef = useRef(false)
  const [draggedOrderItem, setDraggedOrderItem] = useState(null)
  const {setConfirmationModalData, setConfirmationModalView, openConfirmationModal} = useUI()
  const dispatch = useDispatch()
     
  function handleChangeOrderStatusBtnClick (e: any, id: number, orderStatus: any) {
    e.stopPropagation()
    if(dragEnterStatus == draggedOrderItem.status){
        console.log('same')
        return 
    }
    setConfirmationModalData({ data: {questionText: `Change order status to - ${dragEnterStatus}?`, perfomedFunction: () => dispatch(SetOrderStatus({id, orderStatus:dragEnterStatus}))} });
    setConfirmationModalView("CONFIRMATION_MODAL_VIEW");
    return openConfirmationModal();
  }

  const handleDragEnter = (e) => {
    e.stopPropagation()
    columnDraggedRef.current = true
    setDragEnterStatus(columnTitle)
  }

  const handleDragLeave = (e) => {
    e.stopPropagation()
    columnDraggedRef.current = false
  }
  

  return (
    <div className={`bord min-w-[350px] min-h-[200px] h-auto rounded-md bg-[#2D303E] overflow-hidden ${columnDraggedRef.current ? 'bg-[#454a5f]': ''}`} onDragLeave={(e) => handleDragLeave(e)} onDragEnter={(e) => handleDragEnter(e)} onDragEnd={(e) => handleChangeOrderStatusBtnClick(e, draggedOrderItem.order_id, dragEnterStatus)}>
        <div className='header w-full p-5 bg-[#2dff2d58] text-white text-center' style={{backgroundColor: bg}}>
            {columnTitle}
        </div>
        <div className='w-full h-auto py-3 flex flex-col items-center gap-5'>
            {orders && orders.map((order => {
                if (order.status == columnTitle){
                    return <KanbanItem order={order} getDraggedOrderItem={setDraggedOrderItem}><OrderItem order={order} /></KanbanItem>     
                }
            }))}
        </div>
    </div>
  )
}

export default KanbanColumn