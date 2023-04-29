import React, { useEffect, useState } from 'react'
import ListBox from '../../UI/ListBox'
import Categories from '../../../data/categories/category-list'

const ProductManagementHeader = ({setActiveCategory}: any) => {
  const [category, setCategoty] = useState()

  useEffect(() => {
    setActiveCategory(category)
  }, [category])
  return (
    <div className='w-full pb-[50px]'>
        <div className='flex justify-between border-b-[1px] border-[#EA9769] py-2'>
          <div className='flex items-center gap-2 '>
            <ListBox 
              options={Categories}
              onSelectOption={setCategoty} 
            />
          </div>
        </div>
    </div>
  )
}

export default ProductManagementHeader