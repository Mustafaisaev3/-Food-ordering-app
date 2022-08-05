import React, { useState } from 'react'
import Product from './ProductItem/Product'
import pizzas from '../../data/products/pizzas'
import burgers from '../../data/products/burgers'
import drinks from '../../data/products/drinks'
import MenuCategories from '../MenuCategories/MenuCategories'
import { useDispatch, useSelector } from 'react-redux'

import {motion} from 'framer-motion'


function ProductsList() {
  const products = [...pizzas, ...burgers, ...drinks]
  const [activeCat, setActiveCat] = useState<string>('all')

  const category = useSelector<any>(state => state.category)

  return (
    // <div className='flex justify-between flex-wrap gap-y-10 overflow-x-hidden py-[20px]'>
    <div>
        <MenuCategories setActive={setActiveCat} />
        <motion.div layout className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 py-[20px]'>
        {products.map((e) => {
          
          if(e.category == activeCat){
            return <Product data={e} />
          } else if (activeCat == 'all'){
            return <Product data={e} />
          }
          
        })}
      </motion.div>
      <div className='w-full h-auto flex items-center justify-center'>
        <button className='p-[20px] bg-amber-600 rounded-md text-white font-bold'>Load More</button>
      </div>
    </div>

  )
}

export default ProductsList