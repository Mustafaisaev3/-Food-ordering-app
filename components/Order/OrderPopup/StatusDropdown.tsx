import React, { useState, useRef } from 'react'
import { HiOutlineSelector } from 'react-icons/hi'
import { OrderStatus } from '../../../store/ducks/orders/contracts/state'
import { useDispatch } from 'react-redux'
import { SetOrderStatus } from '../../../store/ducks/orders/actions'
import { OrderType } from '../../../utils/types'
import { useUI } from '../../../contexts/ui.context'
import useOnDropdownClickOutside from '../../../utils/useDropdownClickOutside'


export const OrderStatusColors = {
  NEW : '#2dff2d',
  PREPARATION : '#e62dff',
  DELIVERY : '#ffea2d',
  DONE : '#2dd5ff',
  REJECTED : '#ff4d4d',

}

interface StatusDropdownInterface {
  order: OrderType
}

const StatusDropdown = ({order}: StatusDropdownInterface) => {
  const [openDropdow, setOpenDropdow] = useState(false)
  const {setConfirmationModalData, setConfirmationModalView, openConfirmationModal} = useUI()
  const dispatch = useDispatch()

  //Handle ouside click
  const dropdownInnerRef = useRef(null)
  const dropdownRootRef = useRef(null)
  useOnDropdownClickOutside(dropdownInnerRef, () => setOpenDropdow(false))

  const handleDropdownClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setOpenDropdow(true)
  }


  function handleChangeOrderStatusBtnClick (e: any, id: number, orderStatus: any) {
    e.stopPropagation()
    setConfirmationModalData({ data: {questionText: `Change order status to - ${orderStatus}?`, perfomedFunction: () => dispatch(SetOrderStatus({id, orderStatus}))} });
		setConfirmationModalView("CONFIRMATION_MODAL_VIEW");
    setOpenDropdow(false)
		return openConfirmationModal();
  }

  return (
    <>
        <div ref={dropdownRootRef} onClick={(e) => handleDropdownClick(e)} className={'relative'}>
            <div className={`listbox-header w-[150px] h-[40px] flex items-center justify-between px-3 py-2 bg-[#34384b] rounded-md status-bg-${order.status}`} onClick={() => setOpenDropdow(!openDropdow)}>
                <div className={`text-[${OrderStatusColors[order.status.toLocaleUpperCase()]}]`}>{order.status.toLocaleUpperCase()}</div>
                <HiOutlineSelector
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                />
            </div>
            {openDropdow && <div ref={dropdownInnerRef} className='absolute bg-[#34384b] top-[-410%] left-0 overflow-hidden rounded-md w-full'>
                <div className='px-2 py-1 text-[#2dff2d] hover:hover:bg-[#2dff2d58]' onClick={(e) => handleChangeOrderStatusBtnClick(e, order.order_id, OrderStatus.NEW)}>{OrderStatus.NEW}</div>
                <div className='px-2 py-1 text-[#e62dff] hover:hover:bg-[#e62dff4d]' onClick={(e) => handleChangeOrderStatusBtnClick(e, order.order_id, OrderStatus.PREPARATION)}>{OrderStatus.PREPARATION}</div>
                <div className='px-2 py-1 text-[#ffea2d] hover:hover:bg-[#ffea2d48]' onClick={(e) => handleChangeOrderStatusBtnClick(e, order.order_id, OrderStatus.DELIVERY)}>{OrderStatus.DELIVERY}</div>
                <div className='px-2 py-1 text-[#2dd5ff] hover:hover:bg-[#2dd5ff54]' onClick={(e) => handleChangeOrderStatusBtnClick(e, order.order_id, OrderStatus.DONE)}>{OrderStatus.DONE}</div>
                <div className='px-2 py-1 text-[#ff4d4d] hover:hover:bg-[#ff4d4d43]' onClick={(e) => handleChangeOrderStatusBtnClick(e, order.order_id, OrderStatus.REJECTED)}>{OrderStatus.REJECTED}</div>
            </div>
            }
        </div>
    </>
  )
}

export default StatusDropdown