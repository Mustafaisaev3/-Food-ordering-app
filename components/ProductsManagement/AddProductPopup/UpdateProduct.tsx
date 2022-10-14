import React, { useState,ReactEventHandler } from 'react'
import { useDispatch } from 'react-redux'
import { useUI } from '../../../contexts/ui.context'
import { AddProduct, UpdateProduct } from '../../../store/ducks/products/actions'
import { Product } from '../../../store/ducks/products/contract/state'
import Input from '../../UI/Input'


const UpdateProductPopup = () => {
    const {modalData, closeModal, addToast} = useUI()

    const [title, setTitle] = useState(modalData ? modalData.title : '')
    const [description, setDescription] = useState(modalData ? modalData.description : '')
    const [price, setPrice] = useState(modalData ? modalData.price : '')
    const [category, setCategory] = useState(modalData ? modalData.category : '')
    const [imageUrl, setImageUrl] = useState(modalData ? modalData.img : '')

    const dispatch = useDispatch()


    // id: 15,
    // title: 'Some burger',
    // description: '',
    // price: 15,
    // category: 'burger',
    // img: '/assets/images/products/burger/burger1.png'

    const handleUpdateProductBtnClick = (e: any) => {
        e.preventDefault()

        const product = {
            id: modalData.id,
            title, 
            description, 
            price: price, 
            category, 
            img: imageUrl
        }
        dispatch(UpdateProduct(product))
        addToast({id: Math.random(), toastType: 'success', text: `${title} - successfully updated`})
        closeModal()
    }

    const handleUpdateProductCloseBtnClick = (e) => {
        e.preventDefault()
        closeModal()
    }

  return (
    <div className='w-[900px] h-auto flex flex-col rounded-md bg-[#252836]'>
        <div className='text-white text-2xl py-4 px-5 border-b-[1px] border-b-[#EA9769]'>Add new product</div>
        <form className='flex flex-col grow'>
            <div className='grow w-full py-4 px-5'>
                {/* <TextArea className='w-full' rows={3} /> */}
                <Input label='Title' onChange={(e) => setTitle(e.target.value)} value={title}/>
                <Input label='Description' onChange={(e) => setDescription(e.target.value)} value={description} />
                <Input label='Price' onChange={(e) => setPrice(e.target.value)} value={price} />
                <Input label='Category' onChange={(e) => setCategory(e.target.value)} value={category} />
                <Input label='Image url' onChange={(e) => setImageUrl(e.target.value)} value={imageUrl}/>
            </div>
            <div className='py-4 px-5 flex items-center justify-center gap-5'>
                <button type='submit' className='w-[150px] px-3 py-2 text-white bg-[#3aad1d] rounded-md cursor-pointer' onClick={(e) => handleUpdateProductBtnClick(e)}>Add product</button>
                <button className='w-[150px] px-3 py-2 text-white bg-[#ad1d1d] rounded-md cursor-pointer' onClick={(e) => handleUpdateProductCloseBtnClick(e)}>Cancel</button>
            </div>
        </form>
    </div>
  )
}

export default UpdateProductPopup