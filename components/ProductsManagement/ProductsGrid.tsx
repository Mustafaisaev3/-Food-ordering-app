import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from './ProductsItem/Product'
import AddProductItem from './ProductsItem/AddProductItem'
import { selectProductsItems } from '../../store/ducks/products/selectors'
import Header from './ProductManagementHeader/ProductManagementHeader'
import Categories from '../../data/categories/category-list'
import { BsSearch } from 'react-icons/bs'


const ProductsGrid = () => {
  const products = useSelector(selectProductsItems)
  const [searchInputValue, setSearchInputValue] = useState('')
  const [productsState, setProductsState] = useState(products)
  const [activeCategory, setActiveCategory] = useState(Categories[0])


  const handleSearchInput = (e: any) => {
    const inputValue = e.target.value.toLowerCase()

    setSearchInputValue(e.target.value)

    const filteredState = productsState.filter((item) => {
      const productTitle = item.title.toLowerCase()
      return productTitle.includes(inputValue)
    })
    // const filteredState = products.filter((item) => {
    //   const productTitle = item.title.toLowerCase()
    //   return productTitle.includes(inputValue)
    // })

    setProductsState(filteredState)
  }

  useEffect(() => {
    if(activeCategory) {
      if(activeCategory.value == 'all'){
        setProductsState(products)
      } else {
        const filteredProducts = products.filter((item: any) => {
          return item.category == activeCategory.value
        })
  
        setProductsState(filteredProducts)
      }
    }
  }, [activeCategory])
    
  return (
    <div className='pt-[50px]'>
      <Header setActiveCategory={setActiveCategory} />
      <div className='w-[100%] pb-[30px] flex justify-center items-center'>
        <div className="search-input flex items-center rounded-[5px] w-[500px] bg-[#2D303E] p-[10px]">
            <BsSearch style={{marginRight: '10px'}} color={'white'}/>
            <input type="text" value={searchInputValue} onChange={(e) => handleSearchInput(e)} className=' outline-none text-white bg-[#2D303E]' placeholder='Search food...'/>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8'>
          <AddProductItem />
          {productsState.map((product) => {
            return <Product product={product} key={product.id}/>
          })}
      </div>
    </div>
  )
}

export default ProductsGrid