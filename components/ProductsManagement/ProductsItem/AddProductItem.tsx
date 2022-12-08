import React from 'react'
import { BiPlus } from 'react-icons/bi'
import { useUI } from '../../../contexts/ui.context'

const AddProductItem = () => {
  const {setModalView, openModal, setModalData } = useUI()

  const handleAddProductBtnClick = () => {
    setModalData(null)
    setModalView('ADD_PRODUCT_VIEW')
    return openModal()
  }

  return (
    <div className='w-full h-auto flex justify-center'>
      <div onClick={() => handleAddProductBtnClick()} className='w-[250px] h-[300px] flex flex-col items-center justify-center cursor-pointer rounded-md border-dashed border-[2px] border-[#EA9769]'>
          <BiPlus size={30} color={'#EA9769'} />
          <div className='text-[#EA9769]'>Add new dish</div>
      </div>
    </div>
  )
}

export default AddProductItem