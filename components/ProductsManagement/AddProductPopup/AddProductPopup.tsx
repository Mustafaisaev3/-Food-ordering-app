import React, { useState,ReactEventHandler } from 'react'
import { useDispatch } from 'react-redux'
import { useUI } from '../../../contexts/ui.context'
import { AddProduct } from '../../../store/ducks/products/actions'
import { Product } from '../../../store/ducks/products/contract/state'
import Input from '../../UI/Input'
import TextArea from '../../UI/TextArea'

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

    // id: 15,
    // title: 'Some burger',
    // description: '',
    // price: 15,
    // category: 'burger',
    // img: '/assets/images/products/burger/burger1.png'

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

    const handleAddProductCloseBtnClick = (e) => {
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
                <button type='submit' className='w-[150px] px-3 py-2 text-white bg-[#3aad1d] rounded-md cursor-pointer' onClick={(e) => handleAddProductBtnClick(e)}>Add product</button>
                <button className='w-[150px] px-3 py-2 text-white bg-[#ad1d1d] rounded-md cursor-pointer' onClick={(e) => handleAddProductCloseBtnClick(e)}>Cancel</button>
            </div>
        </form>
    </div>
  )
}

export default AddProductPopup