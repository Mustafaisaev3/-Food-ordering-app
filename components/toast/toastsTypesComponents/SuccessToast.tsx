import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import {BsCheckCircle} from 'react-icons/bs'
import { fadeInLeft } from '../../../utils/motion/fade-in-left'
import { fadeInRight } from '../../../utils/motion/fade-in-right'

type SuccesToastType = {
  id: number,
  text: string
}

const SuccesToast = ({id, text}: SuccesToastType) => {
  return (
      <motion.div 
        initial='from'
        animate='to'
        exit='from'
        key='success'
        variants={fadeInLeft()}
        className={`p-[15px] w-auto text-sm mb-5 rounded-lg  text-[#01ff6bf3] bg-[#01ff6b56] flex items-center justify-between`}
      >
        <div>{text}</div>
        <div className='pl-2'><BsCheckCircle /></div>
      </motion.div>
  )
}

export default SuccesToast