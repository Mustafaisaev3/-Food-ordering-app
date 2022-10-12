import React from 'react'
import Portal from "@reach/portal";
import { useUI } from '../../../../contexts/ui.context';


const MainView = () => {
  const {confirmationModalData: {data}, closeConfirmationModal} = useUI()
  const handleConfirmBtn = () => {
    data.perfomedFunction()
    closeConfirmationModal()
  }
  return (
        <div className='w-[400px] h-auto p-[40px] rounded-md bg-[#252836] flex flex-col justify-center items-center '>
            <div className='font-bold text-2xl text-white text-center'>{data.questionText}</div>
            <div className='flex gap-4 pt-8'>
                <div className='px-4 py-2 bg-green-500 text-white font-bold rounded-sm cursor-pointer' onClick={handleConfirmBtn}>Confirm</div>
                <div className='px-4 py-2 bg-red-500 text-white font-bold rounded-sm cursor-pointer'onClick={() => closeConfirmationModal()}>Сancel</div>
            </div>
        </div>
  )
}

export default MainView