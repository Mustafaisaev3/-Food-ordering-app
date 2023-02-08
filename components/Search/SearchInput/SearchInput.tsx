import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchInput = ({value, productsState, setProductsState}: any) => {
  const [searchInputValue, setSearchInputValue] = useState<string>(value)
  const handleSearchInput = (e: any) => {
    const inputValue = e.target.value.toLowerCase()

    setSearchInputValue(inputValue)

    const filteredState = productsState.filter((item: any) => {
      const productTitle = item.title.toLowerCase()
      return productTitle.includes(inputValue)
    })

    setProductsState(filteredState)
  }

  return (
    <div>
        <div className='w-[100%] pb-[30px] flex justify-center items-center'>
        <div className="search-input flex items-center rounded-[5px] w-[500px] bg-[#2D303E] p-[10px]">
            <BsSearch style={{marginRight: '10px'}} color={'white'}/>
            <input type="text" value={searchInputValue} onChange={(e) => handleSearchInput(e)} className='w-full outline-none text-white bg-[#2D303E]' placeholder='Search food...'/>
        </div>
      </div>
    </div>
  )
}

export default SearchInput