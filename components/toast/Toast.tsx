import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useUI } from '../../contexts/ui.context'
import ErrorToast from './toastsTypesComponents/ErrorToast'
import SuccesToast from './toastsTypesComponents/SuccessToast'
import WorningToast from './toastsTypesComponents/WorningToast'
import { fadeInRight } from '../../utils/motion/fade-in-right'
import { fadeInLeft } from '../../utils/motion/fade-in-left'


interface ToastType {
  id: any,
  toastType: string,
  text: string
}

const Toast = ({id, toastType, text}: ToastType) => {
  const {deleteToast, toastList} = useUI()

  useEffect(() => {
      setTimeout(() => {
        deleteToast(id)
    }, 5000)
  }, [id])

  console.log(toastList)

  const selectToastType = () => {
    if(toastType == 'success'){
      return <SuccesToast id={id} text={text}/>
    } else if (toastType == 'error') {
      return <ErrorToast id={id} text={text}/>
    } else if (toastType == 'worning') {
      return <WorningToast id={id} text={text}/>
    }
  }

  return (
      <div 
        className='cursor-pointer' 
        key={toastType} 
        onClick={() => deleteToast(id)}
      >
        {selectToastType()}
      </div>
  )
}

export default Toast