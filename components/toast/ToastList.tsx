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
        {newToastList.length 
        ? 
            <Portal>
                <div className='fixed right-3 top-3 z-[1000]'>
                    <AnimatePresence>
                        {newToastList.map((e) => {
                            return <Toast id={e.id} text={e.text} toastType={e.toastType}/>
                        })}
                    </AnimatePresence>
                </div>
            </Portal>
        : 
            null 
        }
    </>
        
  )
}

export default ToastList