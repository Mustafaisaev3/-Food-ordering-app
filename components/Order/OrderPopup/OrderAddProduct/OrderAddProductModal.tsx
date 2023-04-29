import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { BiArrowBack } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import categoryList from '../../../../data/categories/category-list'
import { selectProductsItems } from '../../../../store/ducks/products/selectors'
import Dropdown from '../../../UI/Dropdown/Dropdown'
import SearchInput from '../../../UI/SearchInput'
import OrderAddProductOptions from './OrderAddProductOptions'

const OrderAddProductModal = ({setShow, order}: any) => {
    const products = useSelector(selectProductsItems)
    const [searchInputValue, setSearchInputValue] = useState('')
    const [productsState, setProductsState] = useState(products)
    const [activeCategory, setactiveCategory] = useState<string>(categoryList[0].name)

    const handleSearchInput = (e: any) => {
        const inputValue = e.target.value.toLowerCase()

        setSearchInputValue(e.target.value)

        const filteredState = products.filter((item) => {
            const productTitle = item.title.toLowerCase()
            return item.category == 'drink' && productTitle.includes(inputValue)
        })

        setProductsState(filteredState)
    }

    useEffect(() => {

    }, [products])

  return (
        <motion.div 
          key="add-product"
          initial={{x: '100%'}}
          animate={{x: '0'}}
          exit={{x: '100%'}}
          transition={{ duration: 0.3 }}
          className='w-full h-full absolute left-0 top-0 bg-[#252836] rounded-md flex flex-col'
        >
          <div className='w-full h-auto px-5 py-3 text-2xl text-white font-bold border-b border-gray-500 flex justify-between items-center'>
            <div className='flex items-center cursor-pointer' onClick={() => setShow(false)}>
              <BiArrowBack size={25} color={'white'} className='mr-2'/> 
              <button className='text-lg m'>Back</button>
            </div>
            <div className=''>
              <SearchInput classes='h-[40px]' value={searchInputValue} onChange={(e: any) => handleSearchInput(e)}/>
            </div>
            <div>
              <Dropdown>
                {categoryList.map((item) => {
                  return <div className='text-base px-2 py-1'>{item.name}</div>
                })}
              </Dropdown>
            </div>
          </div>
          <div className='w-full grow overflow-y-scroll overflow-hidden '>
            <div className='py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-8 xl:gap-y-8 2xl:gap-y-8'>
                {productsState.map((product) => <OrderAddProductOptions product={product} order_id={order.order_id} />)}
            </div>
          </div>
        </motion.div>
  )
}

export default OrderAddProductModal