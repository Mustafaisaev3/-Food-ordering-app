import React from 'react'
import { BiPlus } from 'react-icons/bi'
import { useUI } from '../../../contexts/ui.context'

const AddDepartmentItem = () => {
  const {setModalView, openModal, setModalData, modalView } = useUI()

  const handleAddDepartmentBtnClick = () => {
    setModalData(null)
    console.log(modalView)
    setModalView('ADD_DEPARTMENT_VIEW')
    return openModal()
  }

  return (
    <div onClick={() => handleAddDepartmentBtnClick()} className='w-[250px] h-[300px] flex flex-col items-center justify-center cursor-pointer rounded-md border-dashed border-[2px] border-[#EA9769]'>
        <BiPlus size={30} color={'#EA9769'} />
        <div className='text-[#EA9769]'>Add new Department</div>
    </div>
  )
}

export default AddDepartmentItem