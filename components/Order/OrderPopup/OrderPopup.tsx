import React, { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { useUI } from '../../../contexts/ui.context'
import CartItem from '../../Cart/CartItem'
import Map from '../../GoogleMap/Map'
import { fadeInRight } from '../../../utils/motion/fade-in-right'
import StatusDropdown from './StatusDropdown'
import { RiEBike2Fill } from 'react-icons/ri'
import OrderAddProductModal from './OrderAddProduct/OrderAddProductModal'
import { deleteOrder, updateOrderDeliveryLocation } from '../../../store/ducks/orders/actions'
import ProductInOrder from './ProductInOrder'

const OrderPopup = () => {
  const {modalData: { data }, closeModal, setConfirmationModalData, openConfirmationModal} = useUI()
  const [showMap, setShowMap] = useState<boolean>(false)
  const [showAddProduct, setShowAddProduct] = useState<boolean>(false)
  const orderDestination = data.delivery.deliveryCoordinates

  const [deliveryCoordinates, setDeliveryCoordinates] = useState()
  const [destinationAddressTitle, setDestinationAddressTitle] = useState('')
  console.log(deliveryCoordinates, destinationAddressTitle, 'dfhfhsdfhdjlhf')


  const dispatch = useDispatch()

  const handleDeleteOrderBtnClick = () => {
    setConfirmationModalData({ data: {questionText: `Delete order - ${data.order_id}?`, perfomedFunction: () => {
      dispatch(deleteOrder(data.order_id))
      closeModal()
    }} });
		return openConfirmationModal();
  }
  
  const handleChangeDeliveryLocationBtnClick = () => {
    setConfirmationModalData({ data: {questionText: `Change delivery address?`, perfomedFunction: () => {
      dispatch(updateOrderDeliveryLocation({
        id: data.order_id, 
        delivery: {
          isDelivery: true, 
          deliveryCoordinates: deliveryCoordinates, 
          deliveryPlaceTitle: destinationAddressTitle
        }
      }))
      setShowMap(false)
    }} });
    return openConfirmationModal();
  }

  

  const fadeInRight = {
    from: { 
      x: '-100%',
      transition: {
        type: 'easeInOut',
				duration: 0.5,
      } 
    },
    to: { 
      x: 0,
      transition: {
        type: 'easeInOut',
				duration: 0.5,
      } 
    },
  }


  return (
    <div className='w-[800px] h-[600px] rounded-md bg-[#252836]'>
      <div className='w-full h-full flex flex-col overflow-x-hidden'>
        
        <div className='w-full h-auto px-5 py-3 text-2xl text-white font-bold border-b border-gray-500 flex justify-between items-center'>
          <div>Order: {data.order_id}</div>
          <div className=''>
            <button className='bg-[#ff2d2d] rounded p-[5px] text-white text-base' onClick={handleDeleteOrderBtnClick}>Delete order</button>
          </div>
        </div>

        <div className='w-[800px] relative flex grow overflow-hidden'>
          <div className='w-1/2 flex flex-col justify-between p-3 overflow-hidden'>
            <div className='w-full h-[450px] overflow-y-scroll'>
              {data.items.map((item: any) => {
                // return <CartItem key={item.id} item={item}/>
                return <ProductInOrder key={item.id} item={item} order_id={data.order_id}/>
              })}
            </div>
            <div className='flex justify-center items-center p-[10px] cursor-pointer bg-[#EA6969] rounded-lg w-full h-auto'>
                <div className='text-[15px] text-[white]' onClick={() => setShowAddProduct(true)}>Add product</div>
            </div>
          </div>


          <div className='w-1/2 border-l-[1px] border-gray-500 flex flex-col '>
            <div className='p-5 grow'>
              <div className='w-full h-auto '>
                <h2 className='text-xl text-white text-center'>Order information:</h2>
              </div>

              <div className='py-4 h-full flex flex-col justify-between'>

                <div className='grow'>
                  <div className='flex justify-between items-center pb-4'>
                    <div>
                      <div className='text-white text-[17px] font-semibold'>Address:</div>
                      <div className='pt-1 text-[15px] text-white'>{data.delivery.deliveryPlaceTitle}</div>
                    </div>
                    <div className='w-[50px] min-w-[50px] h-auto p-1 bg-[#EA6969] text-white text-sm rounded-md text-center cursor-pointer' onClick={() => setShowMap(true)}>
                      Edit
                    </div>
                  </div>
                  <div className='flex justify-between items-center pb-4'>
                    <div>
                      <div className='text-white text-[17px] font-bold'>Phome:</div>
                      <div className='pt-1 text-[15px] text-white'>+38 097 012 3748</div>
                    </div>
                    <div className='w-[50px] min-w-[50px] h-auto p-1 bg-[#EA6969] text-white text-sm rounded-md text-center cursor-pointer'>
                      Edit
                    </div>
                  </div>
                  <div className='flex justify-between items-center pb-4'>
                    <div>
                      <div className='text-white text-[17px] font-bold'>Name:</div>
                      <div className='pt-1 text-[15px] text-white'>Alex black</div>
                    </div>
                    <div className='w-[50px] min-w-[50px] h-auto p-1 bg-[#EA6969] text-white text-sm rounded-md text-center cursor-pointer'>
                      Edit
                    </div>
                  </div>
                </div>

                <div className='flex flex-col items-end justify-end  gap-y-2 '>
                  <div className='flex gap-2 text-white text-lg'>
                    <div>Total</div>
                    <div>:</div>
                    <div>350$</div>
                  </div>
                  <div className='flex gap-2 text-white text-lg'>
                    <div>Total</div>
                    <div>:</div>
                    <div>350$</div>
                  </div>
                  <div className='flex gap-2 text-white text-lg'>
                    <div>Total</div>
                    <div>:</div>
                    <div>350$</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-between p-3 px-5 border-t border-gray-500'>
              <div className='flex items-center text-white'>Order status: <span className='pl-3'><StatusDropdown order={data} /></span> </div>
              <div className='h-full flex items-center justify-center px-7 py-1 rounded-md bg-[#2c9f2c] cursor-pointer text-white font-semibold' >Save</div>
            </div>
          </div>


          <AnimatePresence>
          {showMap &&
            <motion.div 
              key="orderMap"
              initial="from"
              animate="to"
              exit="from"
              variants={fadeInRight}
              className='absolute left-0 top-0 w-full h-full'
            >
                <Map showTopBar={true} showMap={setShowMap} destinationCoordinates={orderDestination} setDestinationAddressTitle={setDestinationAddressTitle} setDeliveryCoordinates={setDeliveryCoordinates}>
                  <div className='w-full flex items-center justify-center'>
                      <div className='flex justify-center items-center p-[15px] cursor-pointer bg-[#EA6969] rounded-lg w-full h-auto'>
                          <div className='text-[15px] font-bold text-[white]' onClick={handleChangeDeliveryLocationBtnClick}>Change location</div>
                      </div>
                  </div>
                </Map>
            </motion.div>
          }
          </AnimatePresence>
        </div>
        
        <AnimatePresence>
          { showAddProduct && <OrderAddProductModal setShow={setShowAddProduct} order={data} /> }
        </AnimatePresence>


      </div>
    </div>
  )
}

export default OrderPopup