import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {motion} from 'framer-motion'
import { selectProductsItemsByCategory } from '../../store/ducks/products/selectors'
import Product from './ProductItem/Product'
import MenuCategories from '../MenuCategories/MenuCategories'
import { RootState } from '../../store/store'


function ProductsList() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  let productsData = useSelector((state: RootState) => selectProductsItemsByCategory(state, activeCategory))
  const itemsPerPage = 10
  const [currentProductsCount, setCurrentProductsCount] = useState(itemsPerPage)
  const [products, setProducts] = useState(productsData.slice(0, itemsPerPage))

  const handleLoadMoreBtnClick = () => {
    setCurrentProductsCount(prev => prev + itemsPerPage)
  }

  useEffect(() => {
    setCurrentProductsCount(itemsPerPage)
  }, [activeCategory])

  useEffect(() => {
    setProducts(productsData.slice(0, currentProductsCount))
  }, [currentProductsCount, activeCategory])

  return (
    // <div className='flex justify-between flex-wrap gap-y-10 overflow-x-hidden py-[20px]'>
    <div className='py-[20px]'>
        <MenuCategories setActive={setActiveCategory} />
        <motion.div layout className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8'>
          {products.map((product) => { 
            return <Product data={product} />
          })}
        </motion.div>
        {currentProductsCount >= productsData.length ? null : (
          <div className='w-full h-auto flex items-center justify-center py-[50px]'>
            <div className='w-[200px] h-auto p-4 flex items-center justify-center text-white text-lg rounded-md bg-[#EA6969] cursor-pointer' onClick={handleLoadMoreBtnClick}>Load More</div>
          </div>
        )}
    </div>

  )
}

export default ProductsList

