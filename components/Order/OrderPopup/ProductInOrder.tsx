import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import {IoIosCloseCircle} from 'react-icons/io'
import {MdDeleteForever} from 'react-icons/md'

import { useDispatch } from 'react-redux'
import { deleteProductFromOrder } from '../../../store/ducks/orders/actions'
import { Product } from '../../../store/ducks/products/contract/state'



function ProductInOrder({item, order_id}: {item: Product, order_id: number}) {
	const productCountInputRef = useRef<HTMLInputElement>(null)
	const dispatch = useDispatch()
	// @ts-ignore
	const [productCount, setProductCount] = useState<number>(item.quantity)

    const strProductId = String(item.id)

	useEffect(() => {
		// dispatch(increaseCart(item, productCount))
	}, [productCount])

	// console.log(productCountInputRef?.current?.value)
	return (
		<div className='py-[20px]'>
			<div>
				<div className='flex items-center justify-between'>
					<div className='flex items-center w-[60%]'>
						<Image src={item.img} width={50} height={50} />
						<div className='pl-[20px] text-white'>
							<div>{item.title}</div>
							<div>$ {item.price}</div>
						</div>
					</div>
					<div className="w-[20%] flex justify-end">
						<input ref={productCountInputRef} type="text" className='flex items-center rounded-[5px] p-[10px] outline-none text-white text-center bg-[#2D303E] w-[60px] h-full' onChange={() => setProductCount(parseInt(productCountInputRef.current?.value!))} value={productCount} placeholder='0'/>
					</div>
					<div className='w-[20%] text-[20px] text-white text-center'>$ {parseInt(item.price) * productCount}</div>
				</div>
				<div className="pt-[10px] flex">
					<div className='w-[80%]'>
						<input type="text" className='search-input flex items-center rounded-[5px] w-[100%] h-full p-[10px] outline-none text-white bg-[#2D303E]' placeholder='Search food...'/>
					</div>
					<div className='w-[20%] flex justify-center cursor-pointer'>
						<div className='p-[10px] border-[1px] border-[#EA6969] rounded-[5px]' onClick={() => {dispatch(deleteProductFromOrder({id: order_id, productId: strProductId}))}}>
							<MdDeleteForever size={30} color={'#EA6969'}/>
						</div>
					</div>
				</div>
			</div>
			<div></div>
		</div>
	)
}

export default ProductInOrder