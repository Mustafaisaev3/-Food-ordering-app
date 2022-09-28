import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { fadeInRight } from '../../../utils/motion/fade-in-right'
import { useFormik } from 'formik'
import { addOrder } from '../../../store/ducks/orders/actions'
import { OrderType } from '../../../utils/types'


// React Icons
import { BsCreditCardFill } from 'react-icons/bs'
import { GiWallet } from 'react-icons/gi'
import {RiPaypalLine} from 'react-icons/ri'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import Input from '../../UI/Input'
import Switch from '../../UI/Switch/Switch'
import Map from '../GoogleMap/Map'
import { clearCart } from '../../../store/ducks/cart/action'
import { useUI } from '../../../contexts/ui.context'


type CheckoutProps = {
    closeCheckout: (value: boolean) => void
}

type PaymantMethodTypes = 'CreditCard' | 'Cash' | 'PayPall'

const PaymantMethods = [
    {   
        title: 'Credit Card',
        type: 'CreditCard',
        component: <BsCreditCardFill size={20} color={'white'} />,
    },
    {   
        title: 'Cash',
        type: 'Cash',
        component: <GiWallet size={20} color={'white'} />,
    },
    {   
        title: 'PayPall',
        type: 'PayPall',
        component: <RiPaypalLine size={20} color={'white'} />,
    },
]

const PaymentComponent = (payment, active) => {
    return <div className='payment active '>
        {payment.component}
        {payment.title}
    </div>
}

const Checkout = ({closeCheckout}: CheckoutProps) => {
  const { closeDrawer, addToast } = useUI()

  const [showDelivery, setShowDelivery] = useState(false)
  const [showMap, setShowMap] = useState(false)

  const [paymentMethod, setPaymentMethod] = useState<PaymantMethodTypes>('CreditCard')

  const {values, touched, errors, handleSubmit, handleBlur, getFieldProps, handleChange} = useFormik({
      initialValues: {
        cardholder: '',
        cardNumber: '',
        expirationDate: '',
        CVV: '',
      },
      onSubmit(values) {
        console.log(values)
      },
      validate (values) {
        let errors = {
            cardholder: '',
            cardNumber: '',
            expirationDate: '',
            CVV: '',
        }

        if(!values.cardholder.length){
            errors.cardholder = 'Card holder is empty!!!'
        }
        if(!values.cardNumber.length){
            errors.cardNumber = 'Card Number is empty!!!'
        }
        if(!values.expirationDate.length){
            errors.expirationDate = 'Expiration Date is empty!!!'
        }
        if(!values.CVV.length){
            errors.CVV = 'CVV is empty!!!'
        }

        return errors
      }
  })

  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  const order: OrderType = {
    items: cartItems,
    total_price: 200,
    order_id: new Date().getTime(),
    date: new Date().getTime(),
    status: 'new'
  }

  const hundleSubmit = (order: OrderType) => {
    dispatch(addOrder(order))
    closeDrawer()
    dispatch(clearCart())
    addToast({id: Math.random(), toastType: 'success', text: 'Заказ оформлен'})
  }

  return (
    <motion.div
        key='checkout'
        initial="from"
        animate="to"
        exit="from"
        variants={fadeInRight(0.50)}
        className="lg:relative w-full lg:w-[450px] overflow-hidden z-50 absolute right-0 top-0 lg:block"
    >
        {showMap && <Map />}
        <div className='flex flex-col justify-between w-full h-screen rounded-tl-lg rounded-bl-lg bg-[#252836] '>
            <div className='flex justify-between items-center ps-[28px] border-b border-gray-700' >
                <div className='text-[25px] pl-[28px] text-[white]'>Paymant</div>
                <div className='cursor-pointer p-[28px]' onClick={() =>closeCheckout(false)}>
                    <HiOutlineArrowNarrowRight size={20} color={'white'}/>
                </div>
            </div>
            <div className='h-full p-[28px]'>
                <div className='h-auto w-full '>
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
                        {/* {PaymantMethods.map((payment) => {
                            return <PaymentComponent payment={payment} active={paymentMethod}/>
                        })} */}
                    </div>
                    <form onSubmit={handleSubmit} className='w-full h-full flex flex-col justify-between'>
                        <div>
                            {/* <div className='flex flex-col pt-9'> */}
                                <Input id='cardholder' name='cardholder' onBlur={handleBlur} label='Cardholder name' value={values.cardholder} onChange={handleChange} classes={touched.cardholder && errors.cardholder ? 'border-[1px] border-red-600' : ''} />
                                {touched.cardholder && errors.cardholder ? <div className='text-[red]'>{errors.cardholder}</div> : null}
                            {/* </div> */}
                            {/* <div className='flex flex-col pt-9'> */}
                                <Input id='cardNumber' name='cardNumber' onBlur={handleBlur} label='Card number' value={values.cardNumber} onChange={handleChange} classes={touched.cardNumber && errors.cardNumber ? 'border-[1px] border-red-600' : ''}/>
                                {touched.cardNumber && errors.cardNumber ? <div className='text-[red]'>{errors.cardNumber}</div> : null}
                            {/* </div> */}
                            <div className='flex flex-col lg:flex-row '>
                                <div className=''>
                                    <Input id='expirationDate' name='expirationDate' onBlur={handleBlur} label='Expiration Date' value={values.expirationDate} onChange={handleChange} classes={touched.expirationDate && errors.expirationDate ? 'border-[1px] border-red-600' : ''} />
                                    {touched.expirationDate && errors.expirationDate ? <div className='text-[red]'>{errors.expirationDate}</div> : null}
                                </div>
                                <div className='lg:ml-3'>
                                    {/* <Input id='CVV' name='CVV' {...formik.getFieldProps('CVV')} onBlur={formik.handleBlur} value={formik.values.CVV} onChange={formik.handleChange} classes={`w-full ${formik.touched.CVV && formik.errors.CVV ? 'border-[1px] border-red-600' : ''}`} /> */}
                                    <Input id='CVV' maxlength={3} type={"password"} {...getFieldProps('CVV')} label='CVV' classes={`w-full ${touched.CVV && errors.CVV ? 'border-[1px] border-red-600' : ''}`} />
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
                                        <Input id='map' name='Map' label='Map' value={values.cardholder} onChange={handleChange} classes={touched.cardholder && errors.cardholder ? 'border-[1px] border-red-600' : ''} />
                                        {/* {touched.cardholder && errors.cardholder ? <div className='text-[red]'>{errors.cardholder}</div> : null} */}
                                    </div>
                                    <div className='flex flex-col'>
                                        <Input id='cardholder' name='cardholder' onBlur={handleBlur} label='Cardholder name' value={values.cardholder} onChange={handleChange} classes={touched.cardholder && errors.cardholder ? 'border-[1px] border-red-600' : ''} />
                                        {/* {touched.cardholder && errors.cardholder ? <div className='text-[red]'>{errors.cardholder}</div> : null} */}
                                    </div>
                                </div>
                            </div>
                            <Switch switchStatus={showDelivery} setSwicthSatus={setShowDelivery} />
                        </div>
                        {/* <div className='flex justify-between flex-col lg:flex-row md:gap-[10px] items-center pt-[10px]'> */}
                        <div className='flex flex-col pt-10 lg:flex-row space-y-4 lg:space-y-0'>
                            <button type='submit' className='flex justify-center items-center p-[24px] cursor-pointer bg-[#EA6969] rounded-lg w-full h-[50px]'>
                                <div className='text-[20px] text-[white]' onClick={() => {
                                    hundleSubmit(order)
                                }}>Checkout</div>
                            </button>
                            <button className='flex justify-center items-center p-[24px] cursor-pointer border-[1px] border-[#EA6969] rounded-lg w-full h-[50px] lg:ml-3'>
                                <div className='text-[20px] text-[#EA6969]'>Cancel</div>
                            </button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    </motion.div>
  )
}

export default Checkout