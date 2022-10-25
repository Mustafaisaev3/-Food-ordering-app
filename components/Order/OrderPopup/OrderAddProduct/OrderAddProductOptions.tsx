import React, { useState } from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { addProductToOrder } from '../../../../store/ducks/orders/actions'
import { Product } from '../../../../store/ducks/products/contract/state'

const OrderAddProductOptions = ({product, order_id}: {product: Product, order_id: number}) => {
  const [showProductInfo, setShowProductInfo] = useState<boolean>(false)
  const dispatch = useDispatch()
  console.log(order_id, 'product id')

  const onProductCardMouseOut = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setShowProductInfo(false)
  }

  const onProductCardMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setShowProductInfo(true)
  }

  const handleAddProductBtnClick = () => {
    dispatch(addProductToOrder({id: order_id, product}))
  }

  return (
        <div className='flex items-center justify-center'>
            <div className='w-[150px] h-[200px] relative cursor-pointer' onMouseEnter={(e) => onProductCardMouseOver(e)} onMouseLeave={(e) => onProductCardMouseOut(e)}>
            <div className='absolute bottom-0 left-0 z-1 w-[100%] h-[80%] bg-[#3c4056] rounded-lg '>
            </div>
            <div className='w-[100%] h-[auto] flex flex-col items-center justify-center relative z-10'>
                <div className="flex mb-3 md:mb-3.5">
                    <Image src={product.img} height={100} width={100} />
                </div>
                <div className='w-[100%] h-auto p-[10px] text-center'>
                    <h2 className='text-[white] text-center text-sm'>{product.title}</h2>
                    <div className='text-[white] my-[3px] text-sm'>$ {product.price}</div>
                    <p className='text-slate-400 text-sm'>20 Bowls available</p>
                </div>

                {/*  */}
                {showProductInfo && <div className='absolute bottom-0 left-0'>
                        <div className='w-[150px] h-[80px] rounded-md bg-[#3c4056] z-[10000000000000000000000] flex flex-col items-center gap-2 p-2'>
                        <div className='flex justify-around items-center gap-2'>
                            <div className='w-[30px] text-center py-1 rounded-md bg-[#252836] text-[#EA6969]'>S</div>
                            <div className='w-[30px] text-center py-1 rounded-md bg-[#252836] text-[#EA6969]'>M</div>
                            <div className='w-[30px] text-center py-1 rounded-md bg-[#252836] text-[#EA6969]'>L</div>
                        </div>
                        <button className='w-[80px] h-[30px] rounded-md text-white bg-[#EA6969]' onClick={handleAddProductBtnClick}>Add</button>
                        </div>
                    </div>
                }
                {/*  */}
            </div>
            </div>
        </div> 
  )
}

export default OrderAddProductOptions