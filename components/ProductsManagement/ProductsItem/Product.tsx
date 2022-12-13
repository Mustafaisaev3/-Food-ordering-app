import React from 'react'
import Image from 'next/image'
import { ProductType } from '../../../utils/types'
import {RiEdit2Line} from 'react-icons/ri'
import { useUI } from '../../../contexts/ui.context'


const Product = ({product}: {product: ProductType}) => {
  const {openModal, setModalView, setModalData} = useUI()

  const handleAddProductBtnClick = () => {
    setModalData(product)
    setModalView('UPDATE_PRODUCT_VIEW')
    return openModal()
  }

  return (
    <div className='w-full h-auto flex justify-center'>
      <div className='w-full h-[300px] flex flex-col rounded-md border-[1px] border-[#8b8b8b] overflow-hidden'>
          <div className='grow flex items-center justify-center flex-col'>
          <Image src={product.img} height={150} width={150} />
          <div className='pt-5 text-white font-semibold'>{product.title}</div>
          </div>
          <div className='flex items-center justify-center cursor-pointer bg-[#e7895747] p-3 text-[#EA9769]' onClick={handleAddProductBtnClick}><RiEdit2Line className='mr-2' color='#EA9769' size={20}/> Edit dish</div>
      </div>
    </div>
  )
}

export default Product