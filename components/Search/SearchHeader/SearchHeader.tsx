import React from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { selectActiveDepartment, selectDepartments } from '../../../store/ducks/departmens/selectors'
import ListBox from '../../UI/ListBox'
import { SetActiveDepartment } from '../../../store/ducks/departmens/actions'

const SearchHeader = () => {
  return (
    <div className='w-full pb-[50px]'>
        <div className='flex justify-between border-b-[1px] border-[#EA9769] py-2'>
          <div className='flex items-center gap-2 '>
          </div>
        </div>
    </div>
  )
}

export default SearchHeader