import { motion } from 'framer-motion'
import React from 'react'
import {RiErrorWarningLine} from 'react-icons/ri'

type WorningToastType = {
    id: number,
    text: string
  }
  
  const WorningToast = ({id, text}: WorningToastType) => {
    return (
      <motion.div className={`p-[20px] w-[300px] text-sm mb-5 rounded-lg  text-white bg-yellow-500 flex items-center justify-between`} key={id}>
        <div>{text}</div>
        <div><RiErrorWarningLine /></div>
      </motion.div>
    )
  }
export default WorningToast