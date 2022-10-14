import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import burgers from '../../data/products/burgers'
import drinks from '../../data/products/drinks'
import pizzas from '../../data/products/pizzas'
import Product from './ProductsItem/Product'
import AddProductItem from './ProductsItem/AddProductItem'
import { selectProductsItems } from '../../store/ducks/products/selectors'

const ProductsGrid = () => {
    const products = useSelector(selectProductsItems)
    
    // const products = [...pizzas, ...burgers, ...drinks]
  return (
    <div className='pt-[50px]'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8'>
          <AddProductItem />
          {products.map((product) => {
            return <Product product={product} key={product.id}/>
          })}
      </div>
    </div>
  )
}

export default ProductsGrid