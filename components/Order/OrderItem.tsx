import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { OrderType } from '../../utils/types';
import { useUI } from '../../contexts/ui.context';
import { OrderStatus } from '../../store/ducks/orders/contracts/state';
import useDeliveryTime from '../../hooks/useDeliveryTime';
import getOrderStatusColor from '../../utils/getOrderStatusColor';
import useStatusIconComponent from '../../hooks/useStatusIconComponent';
import Tabs from './OrderTabs/Tabs';
import DropsDropdown from '../UI/Dropdown/DropsDropdown';
import { SetOrderStatus } from '../../store/ducks/orders/actions';
import getOrderStatusIcon from '../../utils/getOrderStatusIcons';

// icons
import {RiUserFill, RiCarFill, RiEBike2Fill} from 'react-icons/ri'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import {MdOutlineFiberNew, MdOutlinePendingActions, MdDoneOutline, MdCancel} from 'react-icons/md'




interface OrdersType {
  order: OrderType
}

const OrderItem = ({ order }: OrdersType) => {
  const dispatch = useDispatch()
  const { statusIconComponent } = useStatusIconComponent()

  const {time, distance, getDeliveryTime} = useDeliveryTime()
   
  useEffect(() => {
    let timeId = setInterval(() => {
      getDeliveryTime(15, order.date)
    }, 1000)

    return function cleanup () {
      clearInterval(timeId)
    }
  })

  const { 
    openModal, 
    setModalView, 
    setModalData, 
    modalView, 
    openConfirmationModal, 
    setConfirmationModalView,
    setConfirmationModalData, 
    confirmationModalView, 
  } = useUI();


	function handlePopupView() {
		setModalData({ data: order });
		setModalView("ORDER_VIEW");
		return openModal();
	}

  
  function handleChangeOrderStatusBtnClick (e: any, id: number, orderStatus: any) {
    e.stopPropagation()
    setConfirmationModalData({ data: {questionText: `Change order status to - ${orderStatus}?`, perfomedFunction: () => dispatch(SetOrderStatus({id, orderStatus}))} });
		setConfirmationModalView("CONFIRMATION_MODAL_VIEW");
		return openConfirmationModal();
  }
  
  return (
    <div className={`w-[300px] h-auto rounded bg-[#252836] shadow status-${order.status}-shadow`} onClick={() => handlePopupView()}>
    {/* <div className='w-[300px] h-[350px] rounded bg-[#252836] overflow-hidden' > */}
        {/* <div className='h-full w-full p-[10px] border-[2px] border-[#ffc311] '> */}
        <div className={`flex flex-col justify-between h-full w-full p-[15px] shadow-md` }>
          <div className='order-header flex justify-between'>
            <div className='flex flex-col'>
              <div className='text-white leading-none'>Order: {order.order_id}</div>
              <div className='text-white'>{order.status}</div>
            </div>
            <div className='flex items-start justify-end w-auto h-auto'>
              {/* <div className=' bg-[#ffea2d48] rounded p-[5px]'>
                <RiCarFill size={20} />
              </div> */}
              {/* <div className=' bg-[#ffea2d] rounded p-[5px]'>
                <RiEBike2Fill size={20} />
              </div> */}
              {/* <div className=' bg-[#e62dff] rounded p-[5px]'>
                <MdOutlinePendingActions size={20} />
              </div>
              <div className=' bg-[#2dd5ff] rounded p-[5px]'>
                <MdDoneOutline size={20} />
              </div>
              <div className=' bg-[#2dff2d] rounded p-[5px]'>
                <MdOutlineFiberNew size={20} />
              </div>
              <div className=' bg-[#ff4d4d] rounded p-[5px]'>
                <MdCancel size={20} />
              </div> */}

              <div className='cursor-pointer'>
                <DropsDropdown>
                  <div className='px-2 py-1 text-[#2dff2d] hover:hover:bg-[#2dff2d58]' onClick={(e) => handleChangeOrderStatusBtnClick(e, order.order_id, OrderStatus.NEW)}>{String(OrderStatus.NEW).toLowerCase()}</div>
                  <div className='px-2 py-1 text-[#e62dff] hover:hover:bg-[#e62dff4d]' onClick={(e) => handleChangeOrderStatusBtnClick(e, order.order_id, OrderStatus.PREPARATION)}>{String(OrderStatus.PREPARATION).toLowerCase()}</div>
                  <div className='px-2 py-1 text-[#ffea2d] hover:hover:bg-[#ffea2d48]' onClick={(e) => handleChangeOrderStatusBtnClick(e, order.order_id, OrderStatus.DELIVERY)}>{String(OrderStatus.DELIVERY).toLowerCase()}</div>
                  <div className='px-2 py-1 text-[#2dd5ff] hover:hover:bg-[#2dd5ff54]' onClick={(e) => handleChangeOrderStatusBtnClick(e, order.order_id, OrderStatus.DONE)}>{String(OrderStatus.DONE).toLowerCase()}</div>
                  <div className='px-2 py-1 text-[#ff4d4d] hover:hover:bg-[#ff4d4d43]' onClick={(e) => handleChangeOrderStatusBtnClick(e, order.order_id, OrderStatus.REJECTED)}>{String(OrderStatus.REJECTED).toLowerCase()}</div>
                </DropsDropdown>
              </div>
            </div>
          </div>
          <div className='flex items-end justify-between w-full pt-[15px] rounded gap-1'>
            {/* <div className='bg-[#2dff2d] cursor-pointer p-[5px] rounded relative'>
              <RiCarFill size={20} />
            </div> */}
            {statusIconComponent[`${order.status}`]}
            <div className={`flex items-center rounded bg-[${distance && getOrderStatusColor(distance)}]`}>
              <div className={` text-[15px] px-2 text-white font-bold `}>{time.deliveryHour}</div> 
              <span className='text-white text-[15px]'>:</span>             
              <div className={` text-[15px] px-2 text-white font-bold `}>{time.deliveryminute}</div>
              <span className='text-white text-[15px]'>:</span>                
              <div className={` text-[15px] px-2 text-white font-bold `}>{time.deliverySeconds}</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default OrderItem

