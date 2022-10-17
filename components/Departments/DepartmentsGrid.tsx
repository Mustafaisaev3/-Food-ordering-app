import React from 'react'
import { useSelector } from 'react-redux'
import { selectDepartments, selectDepatmentsState } from '../../store/ducks/departmens/selectors'
import AddDepartmentItem from './DepartmentItem/AddDepartmentItem'
import Department from './DepartmentItem/Department'
import DepartmentsHeader from './DepartmentsHeader/DepartmentsHeader'

const DepartmentsGrid = () => {
  const departments = useSelector(selectDepatmentsState)
  console.log(departments)

  return (
    <div className='pt-[50px]'>
      <DepartmentsHeader />
      {/* <div className='w-[100%] pb-[30px] flex justify-center items-center'>
        <div className="search-input flex items-center rounded-[5px] w-[500px] bg-[#2D303E] p-[10px]">
            <BsSearch style={{marginRight: '10px'}} color={'white'}/>
            <input type="text" value={searchInputValue} onChange={(e) => handleSearchInput(e)} className=' outline-none text-white bg-[#2D303E]' placeholder='Search food...'/>
        </div>
      </div> */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8'>
          <AddDepartmentItem />
          {departments && departments.departments.map((item) => {
                return <Department department={item} />
            })
          }
      </div>
    </div>
  )
}

export default DepartmentsGrid