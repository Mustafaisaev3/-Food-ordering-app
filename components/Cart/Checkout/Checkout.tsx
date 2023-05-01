import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { fadeInRight } from '../../../utils/motion/fade-in-right'
import { useFormik } from 'formik'
import { addOrder } from '../../../store/ducks/orders/actions'
import { OrderType } from '../../../utils/types'
import Input from '../../UI/Input'
import Switch from '../../UI/Switch/Switch'
import CheckoutMap from '../CheckoutMap/CheckoutMap'
import { clearCart } from '../../../store/ducks/cart/action'
import { useUI } from '../../../contexts/ui.context'
import { CheckoutSchema } from '../../../schemas/CheckoutSchema'
import { selectCartItems } from '../../../store/ducks/cart/selectors'

// React Icons
import { BsCreditCardFill } from 'react-icons/bs'
import { GiWallet } from 'react-icons/gi'
import {RiPaypalLine} from 'react-icons/ri'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {BiCurrentLocation, BiMapAlt} from 'react-icons/bi'



type CheckoutProps = {
    closeCheckout: (value: boolean) => void
}

const Checkout = ({closeCheckout}: CheckoutProps) => {
  const { closeDrawer, addToast } = useUI()
  const [deliveryCoordinates, setDeliveryCoordinates] = useState()
  const [destinationAddressTitle, getDestinationAddressTitle] = useState('')

  const [showDelivery, setShowDelivery] = useState(false)
  const [showMap, setShowMap] = useState(false)

  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()

  const order: OrderType = {
    items: cartItems,
    total_price: 200,
    order_id: new Date().getTime(),
    date: new Date().getTime(),
    status: 'NEW',
    delivery: {
        isDelivery: deliveryCoordinates ? true : false,
        deliveryPlaceTitle: destinationAddressTitle,
        deliveryCoordinates: deliveryCoordinates ? deliveryCoordinates : undefined,
    },
  }

  const hundleSubmit = (order: any) => {
    dispatch(addOrder(order))
    closeDrawer()
    dispatch(clearCart())
    addToast({id: Math.random(), toastType: 'success', text: 'Заказ оформлен'})
  }

  const {values, touched, errors, handleSubmit, handleBlur, getFieldProps, handleChange} = useFormik({
    initialValues: {
      cardholder: '',
      cardNumber: '',
      expirationDate: '',
      CVV: '',
    },
    onSubmit(values) {
        hundleSubmit(order)
    },
    validationSchema: CheckoutSchema
    })

  return (
    <motion.div
        key='checkout'
        initial="from"
        animate="to"
        exit="from"
        variants={fadeInRight(0.50)}
        className="lg:relative w-full lg:w-[450px] overflow-hidden z-50 absolute right-0 top-0 lg:block"
    >   
        {showMap && <CheckoutMap showMap={setShowMap} setDeliveryCoordinates={setDeliveryCoordinates} setDestinationAddressTitle={getDestinationAddressTitle} />}
        <div className='flex flex-col justify-between w-full h-full rounded-tl-lg rounded-bl-lg bg-[#252836] '>
            <div className='h-[77px] flex justify-between items-center border-b border-gray-700' >
                <div className='text-[25px] pl-[28px] text-[white]'>Paymant</div>
                <div className='cursor-pointer p-[28px]' onClick={() =>closeCheckout(false)}>
                    <HiOutlineArrowNarrowRight size={20} color={'white'}/>
                </div>
            </div>
            {/* <div className='p-7 flex-1'> */}
                <div className='h-[calc(100vh-77px)] w-full flex flex-col p-7 overflow-hidden'>
                    <h2 className='text-[25px] text-white'>Payment Method</h2>
                    <div className='flex items-center pt-[20px] gap-2'>
                        <div className='payment active ' >
                            <BsCreditCardFill size={20} color={'white'} />
                            Credit Card
                        </div>
                        <div className='payment'>
                            <GiWallet size={20} color={'white'} />
                            Cash
                        </div>
                        <div className='payment'>
                            <RiPaypalLine size={20} color={'white'} />
                            PayPall
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className='h-auto w-full mt-7 flex flex-col justify-between overflow-y-auto overflow-x-hidden'>
                        <div className='flex flex-col flex-1'>
                            <div>
                                <Input id='cardholder' name='cardholder' onBlur={handleBlur} label='Cardholder name' value={values.cardholder} onChange={handleChange} classes={touched.cardholder && errors.cardholder ? 'border-[1px] border-red-600' : ''} />
                                {touched.cardholder && errors.cardholder ? <div className='text-[red]'>{errors.cardholder}</div> : null}
                                <Input id='cardNumber' name='cardNumber' onBlur={handleBlur} label='Card number' value={values.cardNumber} onChange={handleChange} classes={touched.cardNumber && errors.cardNumber ? 'border-[1px] border-red-600' : ''}/>
                                {touched.cardNumber && errors.cardNumber ? <div className='text-[red]'>{errors.cardNumber}</div> : null}
                                <div className='flex flex-col lg:flex-row '>
                                    <div className=''>
                                        <Input id='expirationDate' name='expirationDate' onBlur={handleBlur} label='Expiration Date' value={values.expirationDate} onChange={handleChange} classes={touched.expirationDate && errors.expirationDate ? 'border-[1px] border-red-600' : ''} />
                                        {touched.expirationDate && errors.expirationDate ? <div className='text-[red]'>{errors.expirationDate}</div> : null}
                                    </div>
                                    <div className='lg:ml-3'>
                                        <Input id='CVV' maxLength={3} type={"password"} {...getFieldProps('CVV')} label='CVV' classes={`w-full ${touched.CVV && errors.CVV ? 'border-[1px] border-red-600' : ''}`} />
                                        {touched.CVV && errors.CVV ? <div className='text-[red]'>{errors.CVV}</div> : null}
                                    </div>
                                </div>
                            </div>
                            <div className='h-auto w-full py-[30px] '>
                                <h2 className='text-[25px] text-white'>Delivery</h2>
                                <div className='relative'>
                                    <div className={`${showDelivery ? '' : 'absolute'} w-[100%] h-[100%] z-30`  }></div>
                                    <div className= {`${showDelivery ? '' : 'opacity-20'}`  }>
                                        <div className='flex flex-col' onClick={() => setShowMap(!showMap)}>
                                            <Input id='map' name='Map' label='Map' value={order.delivery.deliveryPlaceTitle} onChange={handleChange} classes={touched.cardholder && errors.cardholder ? 'border-[1px] border-red-600' : ''} rightIcon={<BiCurrentLocation size={20}  color={'#EA6969'} />}  leftIcon={<BiMapAlt size={20}  color={'#EA6969'} />}/>
                                            {/* {touched.cardholder && errors.cardholder ? <div className='text-[red]'>{errors.cardholder}</div> : null} */}
                                        </div>
                                    </div>
                                </div>
                                <Switch switchStatus={showDelivery} setSwicthSatus={setShowDelivery} />
                            </div>
                        </div>
                        <div className='flex flex-row md:flex-col items-center pt-10 lg:flex-row gap-4'>
                            <button type='submit' className='flex justify-center items-center p-[24px] cursor-pointer bg-[#EA6969] rounded-lg w-full h-[50px]'>
                                <button type='submit' className='text-[20px] text-[white]' >Checkout</button>
                            </button>
                            <button type='submit' className='flex justify-center items-center p-[24px] cursor-pointer border-[1px] border-[#EA6969] rounded-lg w-full h-[50px] lg:ml-3'>
                                <div className='text-[20px] text-[#EA6969]'>Cancel</div>
                            </button>
                        </div>
                    </form>
                </div>
                
            {/* </div> */}
        </div>
    </motion.div>
  )
}

export default Checkout