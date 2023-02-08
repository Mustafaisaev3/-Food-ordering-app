import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectProductsItems } from '../../store/ducks/products/selectors'
import Product from '../ProductsList/ProductItem/Product'
import SearchHeader from './SearchHeader/SearchHeader'
import SearchInput from './SearchInput/SearchInput'

const Search = () => {
  const productsData = useSelector(selectProductsItems)
  const [products, setProducts] = useState(productsData) 
  const router = useRouter()
  let querySearchValue = router.query.value

  useEffect(() => {
    if(querySearchValue){
        const filteredProducts = products.filter((product: any) => {
            const productTitle = product.title.toLowerCase()
            return productTitle.includes(querySearchValue) 
        })

        setProducts(filteredProducts)
    }
  }, [querySearchValue])

  return (
    <div className='py-[20px]'>
        <SearchHeader />
        <SearchInput value={querySearchValue} productsState={productsData} setProductsState={setProducts}/>
        <div className='py-[20px]'>
            {products.length 
                ?
                <motion.div layout className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8'>
                    {products.map((product) => {
                        return <Product key={product.id} data={product} />
                    })}
                </motion.div>
                :
                <div className='w-full h-auto flex items-center justify-center'>
                    <img src='/assets/images/no_products_found.png' />
                </div>
            }
        </div>
    </div>
  )
}

export default Search