import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { BsSearch } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { useUI } from '../../contexts/ui.context'
import { addToCart } from "../../store/ducks/cart/action";
import { selectProductsItems } from '../../store/ducks/products/selectors'
import useOnClickOutside from '../../utils/use-click-outside'

const HeaderSearch = ({}) => {
  const [showProductsList, setShowProductsList] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const productsData = useSelector(selectProductsItems)
  const [products, setProducts] = useState(productsData)

  const searchInnerRef = useRef(null)
  useOnClickOutside(searchInnerRef, null, () => setShowProductsList(false))

  const router = useRouter()
  const dispatch = useDispatch()
  const { addToast } = useUI();

  useEffect(() => {
    if(inputValue){
      const filteredProducts = productsData.filter((product: any) => {
        const productTitle = product.title.toLowerCase()
        return productTitle.includes(inputValue) 
      })
    
      setProducts(filteredProducts)
    }
  }, [inputValue])

  const handleSearchCkick = () => {
    router.push(`http://localhost:3000/search?value=${inputValue}`)
  }

  return (
    <div ref={searchInnerRef} className="search-input flex items-center rounded-[5px] w-[500px] bg-[#2D303E] p-[10px] relative">
        <BsSearch style={{marginRight: '10px'}} color={'white'}/>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onFocus={() => setShowProductsList(true)} className='w-full outline-none text-white bg-[#2D303E]' placeholder='Search food...'/>
        {showProductsList ? (
            <div className='min-w-[300px] w-full h-auto flex flex-col gap-4 rounded-[5px] bg-[#2D303E] p-[10px] absolute left-0 top-[105%] z-20'>
                {inputValue && products.slice(0,5).map((product) => {
                    return (
                        <div className='w-full h-auto flex items-center hover:bg-slate-700 rounded-[5px] py-1 px-2'>
                            <img src={product.img} alt={product.title} className='w-[50px] h-[50px]' />
                            <div className='flex flex-col flex-1 px-3'>
                                <span className='text-white text-lg'>{product.title}</span>
                                <span className='text-[#EA6969] text-base'>{product.price} $</span>
                            </div>
                            <div className='w-[50px] h-[30px] flex items-center justify-center rounded-[3px] bg-[#EA6969] cursor-pointer' onClick={() => { 
                                dispatch(addToCart(product, 1))
                                addToast({id: Math.random(), toastType: 'success', text: `Товар добавлен в корзину: ${product.title}`})
						    }}>
                                <FiShoppingCart size={20} color={'white'} />
                            </div>
                        </div>
                    )
                })}
                <div className='flex items-center justify-center text-base text-[#EA6969] p-1 cursor-pointer' onClick={handleSearchCkick}>Seacrh for <span className='text-white pl-2'>"{inputValue}"</span></div>
            </div>
        ): null}
    </div>
  )
}

export default HeaderSearch


