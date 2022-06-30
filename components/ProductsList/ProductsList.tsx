import React from 'react'
import Product from './ProductItem/Product'

function ProductsList() {
  return (
    <div className='flex flex-wrap gap-8'>
        <Product image_src={'/assets/images/products/Images2.png'} />
        <Product image_src={'/assets/images/products/health-food-meal.png'} />
        <Product image_src={'/assets/images/products/Images2.png'} />
        <Product image_src={'/assets/images/products/health-food-meal.png'} />
        <Product image_src={'/assets/images/products/Images2.png'} />
        <Product image_src={'/assets/images/products/health-food-meal.png'} />
        <Product image_src={'/assets/images/products/Images2.png'} />
        <Product image_src={'/assets/images/products/health-food-meal.png'} />
        <Product image_src={'/assets/images/products/Images2.png'} />
        <Product image_src={'/assets/images/products/health-food-meal.png'} />
        {/* <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product /> */}
    </div>
  )
}

export default ProductsList