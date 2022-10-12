import React, { useState } from 'react'
import Product from './ProductItem/Product'
import pizzas from '../../data/products/pizzas'
import burgers from '../../data/products/burgers'
import drinks from '../../data/products/drinks'
import MenuCategories from '../MenuCategories/MenuCategories'
import { useDispatch, useSelector } from 'react-redux'

import Link from 'next/link'

import {motion} from 'framer-motion'
import { selectCart, selectCartItems, selectCartTotalpice } from '../../store/ducks/cart/selectors'


function ProductsList() {
  const products = [...pizzas, ...burgers, ...drinks]
  const [activeCat, setActiveCat] = useState<string>('all')

  const category = useSelector<any>(state => state.category)
  const cartItems = useSelector(selectCart)
  const cartStatus = useSelector(selectCartTotalpice)
  // console.log(cartItems, cartStatus, 'gigf')

  return (
    // <div className='flex justify-between flex-wrap gap-y-10 overflow-x-hidden py-[20px]'>
    <div>
        <MenuCategories setActive={setActiveCat} />
        {/* <motion.div layout className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 py-[20px]'> */}
        <motion.div layout className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8'>
        {products.map((e) => {
          
          if(e.category == activeCat){
            return <Product data={e} />
          } else if (activeCat == 'all'){
            return <Product data={e} />
          }
          
        })}
      </motion.div>
      <div className='w-full h-auto flex items-center justify-center'>
        <Link href='/orders'>
          <button className='p-[20px] bg-amber-600 rounded-md text-white font-bold'>Load More</button>
        </Link>
      </div>
    </div>

  )
}

export default ProductsList

