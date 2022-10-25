import { motion } from 'framer-motion'
import React from 'react'
import {BiErrorAlt} from 'react-icons/bi'
import { fadeInRight } from '../../../utils/motion/fade-in-right'

type ErrorToastType = {
    id: number,
    text: string
}

const ErrorToast = ({id, text}: ErrorToastType) => {
  return (
    <motion.div 
      initial="from"
      animate="to"
      exit="from"
      variants={fadeInRight(0.50)}
      className={`p-[15px] w-[300px] text-sm mb-5 rounded-lg  text-white bg-red-500 flex items-center justify-between`} key={id}
    >
        <div>{text}</div>
        <div className='pl-2'><BiErrorAlt /></div>
      </motion.div>
  )
}

export default ErrorToast