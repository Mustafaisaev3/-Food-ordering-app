import React from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { selectActiveDepartment, selectDepartments } from '../../../store/ducks/departmens/selectors'
import ListBox from '../../UI/ListBox'
import { SetActiveDepartment } from '../../../store/ducks/departmens/actions'

const DepartmentsHeader = () => {
  const allDepartments = useSelector(selectDepartments)
  const activeDepartment = useSelector(selectActiveDepartment)
  const dispatch = useDispatch()
  const handleactiveDepartmentSelect = (item: any) => {
    dispatch(SetActiveDepartment(item.id))
  }

  return (
    <div className='w-full pb-[50px]'>
        <div className='flex justify-between border-b-[1px] border-[#EA9769] py-2'>
          <div className='flex items-center gap-2 '>
            {
              activeDepartment 
                ?
              <div className='flex items-center gap-1 pr-5 h-[50px] rounded-md bg-[#252836]'>
                <Image src={activeDepartment.img} width={60} height={60} className='w-5 h-5'/>
                <div className='text-white'>{activeDepartment.title}</div>
              </div>
                :
              <ListBox
                onSelectOption={handleactiveDepartmentSelect}
                options={[
                  { name: "text-sorting-options", value: "select active department" },
                  ...allDepartments.map((e) => ({ name: e.title, value: e.title, id: e.id }))
                ]} 
              />
            }
          </div>
          <div className='flex gap-2'>
            <ListBox 
              options={[
                { name: "text-sorting-options", value: "options" },
                { name: "text-newest", value: "newest" },
                { name: "text-popularity", value: "popularity" },
                { name: "text-price-low-high", value: "low-high" },
                { name: "text-price-high-low", value: "high-low" },
              ]} 
            />
            <ListBox 
              options={[
                { name: "text-sorting-options", value: "options" },
                { name: "text-newest", value: "newest" },
                { name: "text-popularity", value: "popularity" },
                { name: "text-price-low-high", value: "low-high" },
                { name: "text-price-high-low", value: "high-low" },
              ]} 
            />
            <ListBox 
              options={[
                { name: "text-sorting-options", value: "options" },
                { name: "text-newest", value: "newest" },
                { name: "text-popularity", value: "popularity" },
                { name: "text-price-low-high", value: "low-high" },
                { name: "text-price-high-low", value: "high-low" },
              ]} 
            />
          </div>
        </div>
    </div>
  )
}

export default DepartmentsHeader