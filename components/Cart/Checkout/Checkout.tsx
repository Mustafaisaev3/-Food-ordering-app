import React, {useState} from 'react'
import { motion } from 'framer-motion'
import { fadeInRight } from '../../../utils/motion/fade-in-right'
import { useFormik } from 'formik'

// React Icons
import { BsCreditCardFill } from 'react-icons/bs'
import { GiWallet } from 'react-icons/gi'
import {RiPaypalLine} from 'react-icons/ri'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import Input from '../../UI/Input'

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

  const [swithActive, setSwitchActive] = useState(false)

  const [paymentMethod, setPaymentMethod] = useState<PaymantMethodTypes>('CreditCard')

  const {values, touched, errors, handleSubmit, handleBlur, getFieldProps, handleChange} = useFormik({
      initialValues: {
        cardholder: '',
        cardNumber: '',
        expirationDate: '',
        CVV: '',
      },
      onSubmit(values) {
        // console.log(values)
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

  console.log(touched, 'touthed')

  return (
    <motion.div
        key='checkout'
        initial="from"
        animate="to"
        exit="from"
        variants={fadeInRight(0.50)}
        className="lg:relative w-full lg:w-[450px] z-50 absolute right-0 top-0 lg:block"
    >
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
                            <div className='flex flex-col pt-9'>
                                <Input id='cardholder' name='cardholder' onBlur={handleBlur} label='Cardholder name' value={values.cardholder} onChange={handleChange} classes={touched.cardholder && errors.cardholder ? 'border-[1px] border-red-600' : ''} />
                                {touched.cardholder && errors.cardholder ? <div className='text-[red]'>{errors.cardholder}</div> : null}
                            </div>
                            <div className='flex flex-col pt-9'>
                                <Input id='cardNumber' name='cardNumber' onBlur={handleBlur} label='Card number' value={values.cardNumber} onChange={handleChange} classes={touched.cardNumber && errors.cardNumber ? 'border-[1px] border-red-600' : ''}/>
                                {touched.cardNumber && errors.cardNumber ? <div className='text-[red]'>{errors.cardNumber}</div> : null}
                            </div>
                            <div className='flex flex-col lg:flex-row '>
                                <div className='md:pt-5 sm:pt-5 pt-10'>
                                    <Input id='expirationDate' name='expirationDate' onBlur={handleBlur} label='Expiration Date' value={values.expirationDate} onChange={handleChange} classes={touched.expirationDate && errors.expirationDate ? 'border-[1px] border-red-600' : ''} />
                                    {touched.expirationDate && errors.expirationDate ? <div className='text-[red]'>{errors.expirationDate}</div> : null}
                                </div>
                                <div className='lg:ml-3 md:pt-5 sm:pt-5'>
                                    {/* <Input id='CVV' name='CVV' {...formik.getFieldProps('CVV')} onBlur={formik.handleBlur} value={formik.values.CVV} onChange={formik.handleChange} classes={`w-full ${formik.touched.CVV && formik.errors.CVV ? 'border-[1px] border-red-600' : ''}`} /> */}
                                    <Input id='CVV' maxlength={3} type={"password"} {...getFieldProps('CVV')} label='CVV' classes={`w-full ${touched.CVV && errors.CVV ? 'border-[1px] border-red-600' : ''}`} />
                                    {touched.CVV && errors.CVV ? <div className='text-[red]'>{errors.CVV}</div> : null}
                                </div>
                            </div>
                        </div>
                        <div className='h-auto w-full py-[30px] '>
                            <h2 className='text-[25px] text-white'>Delivery</h2>
                            <div className='relative'>
                                <div className={`${swithActive ? '' : 'absolute'} w-[100%] h-[100%] z-30`  }></div>
                                <div className= {`${swithActive ? '' : 'opacity-20'}`  }>
                                    <div className='flex flex-col pt-3'>
                                        <Input id='cardholder' name='cardholder' onBlur={handleBlur} label='Cardholder name' value={values.cardholder} onChange={handleChange} classes={touched.cardholder && errors.cardholder ? 'border-[1px] border-red-600' : ''} />
                                        {/* {touched.cardholder && errors.cardholder ? <div className='text-[red]'>{errors.cardholder}</div> : null} */}
                                    </div>
                                    <div className='flex flex-col pt-3'>
                                        <Input id='cardholder' name='cardholder' onBlur={handleBlur} label='Cardholder name' value={values.cardholder} onChange={handleChange} classes={touched.cardholder && errors.cardholder ? 'border-[1px] border-red-600' : ''} />
                                        {/* {touched.cardholder && errors.cardholder ? <div className='text-[red]'>{errors.cardholder}</div> : null} */}
                                    </div>
                                </div>
                            </div>
                            <div className='pt-20px'>
                                <div className={`w-[50px] h-[25px] rounded-[40px] bg-[#bdbdbd] flex items-center transition-all duration-300 p-[7px] cursor-pointer ${swithActive ? 'bg-[#17ff17] justify-end' : 'bg-[#bdbdbd] justify-start'}`} onClick={() => setSwitchActive(!swithActive)}>
                                    <div className='w-[15px] h-[15px] rounded-full bg-white transition-all duration-300'></div>
                                    {/* <motion.div className='w-[20px] h-[20px] rounded-full bg-white' animate={{x: swithActive ? 35 : 0}}></motion.div> */}
                                    {/* <motion.div className='w-[30px] h-[30px] rounded-full bg-white' animate={{x: swithActive ? '-100%' : '100%'}}></motion.div> */}
                                </div>
                            </div>
                        </div>
                        {/* <div className='flex justify-between flex-col lg:flex-row md:gap-[10px] items-center pt-[10px]'> */}
                        <div className='flex flex-col pt-10 lg:flex-row space-y-4 lg:space-y-0'>
                            <button type='submit' className='flex justify-center items-center p-[24px] cursor-pointer bg-[#EA6969] rounded-lg w-full h-[50px]'>
                                <div className='text-[20px] text-[white]'>Checkout</div>
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