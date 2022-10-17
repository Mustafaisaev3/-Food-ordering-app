import React, { useState,ReactEventHandler } from 'react'
import { useDispatch } from 'react-redux'
import { useUI } from '../../../contexts/ui.context'
import { AddProduct } from '../../../store/ducks/products/actions'
import Input from '../../UI/Input'

const AddProductPopup = () => {
    const {modalData, closeModal, addToast} = useUI()

    const [productId, setProductId] = useState(modalData ? modalData.id : '')
    const [title, setTitle] = useState(modalData ? modalData.title : '')
    const [description, setDescription] = useState(modalData ? modalData.description : '')
    const [price, setPrice] = useState(modalData ? modalData.price : '')
    const [category, setCategory] = useState(modalData ? modalData.category : '')
    const [imageUrl, setImageUrl] = useState(modalData ? modalData.img : '')

    const dispatch = useDispatch()

    console.log(productId, title, description, price, category, imageUrl, 'hhhh', modalData)

    const handleAddProductBtnClick = (e: any) => {
        e.preventDefault()

        const product = {
            id: modalData ? productId : String(Math.floor(Math.random())),
            title, 
            description, 
            price: price, 
            category, 
            img: imageUrl
        }
        dispatch(AddProduct(product))
        addToast({id: Math.random(), toastType: 'success', text: `${title} - successfully created`})
        console.log()
    }

    const handleAddProductCloseBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        closeModal()
    }

  return (
    <div className='w-[900px] h-auto flex flex-col rounded-md bg-[#252836]'>
        <div className='text-white text-2xl py-4 px-5 border-b-[1px] border-b-[#EA9769]'>Add new product</div>
        <form className='flex flex-col grow'>
            <div className='grow w-full py-4 px-5'>
                <Input label='Title' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} value={title}/>
                <Input label='Description' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)} value={description} />
                <Input label='Price' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(e.target.value)} value={price} />
                <Input label='Category' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)} value={category} />
                <Input label='Image url' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImageUrl(e.target.value)} value={imageUrl}/>
            </div>
            <div className='py-4 px-5 flex items-center justify-center gap-5'>
                <button type='submit' className='w-[150px] px-3 py-2 text-white bg-[#3aad1d] rounded-md cursor-pointer' onClick={(e) => handleAddProductBtnClick(e)}>Add product</button>
                <button className='w-[150px] px-3 py-2 text-white bg-[#ad1d1d] rounded-md cursor-pointer' onClick={(e) => handleAddProductCloseBtnClick(e)}>Cancel</button>
            </div>
        </form>
    </div>
  )
}

export default AddProductPopup