import Portal from '@reach/portal'
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { useUI } from '../../contexts/ui.context'
import Toast from './Toast'

const ToastList = () => {
   const { toastList } = useUI()
    let newToastList = [...toastList].reverse()

  return (
    <>
        <AnimatePresence>
        {newToastList.length 
        ? 
            <Portal>
                <div className='fixed right-5 top-3 z-[1000]'>          
                    {newToastList.map((e) => {
                        return <Toast id={e.id} text={e.text} toastType={e.toastType}/>
                    })}
                </div>
            </Portal>
        : 
            null 
        }
        </AnimatePresence>
    </>
        
  )
}

export default ToastList