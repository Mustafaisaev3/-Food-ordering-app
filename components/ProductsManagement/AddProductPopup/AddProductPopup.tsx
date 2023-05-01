import { useFormik, Formik } from 'formik'
import React, { useState,ReactEventHandler } from 'react'
import { useDispatch } from 'react-redux'
import { useUI } from '../../../contexts/ui.context'
import { AddProductSchema } from '../../../schemas/Schemas'
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

    // console.log(productId, title, description, price, category, imageUrl, 'hhhh', modalData)


    const onSubmit = (values: any, actions: any) => {

        const product = {
            id: modalData ? productId : String(Math.floor(Math.random())),
            title: values.title, 
            description: values.description, 
            price: values.price, 
            category: values.category, 
            img: values.imageUrl
        }

        dispatch(AddProduct(product))
        addToast({id: Math.random(), toastType: 'success', text: `${product.title} - successfully created`})
        actions.resetForm()
        closeModal()
    }

    const handleAddProductCloseBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        closeModal()
    }

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            price: '',
            category: '',
            imageUrl: '',
        },
        validationSchema: AddProductSchema,
        onSubmit
    })
    // console.log(formik)

  return (
    <div className='w-auto md:w-[900px] lg:w-[900px] h-auto flex flex-col rounded-md bg-[#252836]'>
        <div className='text-white text-2xl py-4 px-5 border-b-[1px] border-b-[#EA9769]'>Add new product</div>
        <form onSubmit={formik.handleSubmit} className='flex flex-col grow'>
            <div className='grow w-full py-4 px-5'>
                <Input 
                    id='title' 
                    label='Title' 
                    onChange={formik.handleChange} 
                    value={formik.values.title} 
                    onBlur={formik.handleBlur}
                    classes={formik.touched.title && formik.errors.title ? 'border-[1px] border-red-600' : ''}
                />
                {formik.touched.title && formik.errors.title ? <div className='text-[red]'>{formik.errors.title}</div> : null}
                
                <Input 
                    id='description' 
                    label='Description' 
                    onChange={formik.handleChange} 
                    value={formik.values.description} 
                    onBlur={formik.handleBlur}
                    classes={formik.touched.description && formik.errors.description ? 'border-[1px] border-red-600' : ''}
                />
                {formik.touched.description && formik.errors.description ? <div className='text-[red]'>{formik.errors.description}</div> : null}

                <Input 
                    id='price' 
                    label='Price' 
                    onChange={formik.handleChange} 
                    value={formik.values.price} 
                    onBlur={formik.handleBlur}
                    classes={formik.touched.price && formik.errors.price ? 'border-[1px] border-red-600' : ''}
                />
                {formik.touched.price && formik.errors.price ? <div className='text-[red]'>{formik.errors.price}</div> : null}

                <Input 
                    id='category' 
                    label='Category' 
                    onChange={formik.handleChange} 
                    value={formik.values.category} 
                    onBlur={formik.handleBlur}
                    classes={formik.touched.category && formik.errors.category ? 'border-[1px] border-red-600' : ''}
                />
                {formik.touched.category && formik.errors.category ? <div className='text-[red]'>{formik.errors.category}</div> : null}

                <Input 
                    id='imageUrl' 
                    label='Image url' 
                    onChange={formik.handleChange} 
                    value={formik.values.imageUrl} 
                    onBlur={formik.handleBlur}
                    classes={formik.touched.imageUrl && formik.errors.imageUrl ? 'border-[1px] border-red-600' : ''}
                />
                {formik.touched.imageUrl && formik.errors.imageUrl ? <div className='text-[red]'>{formik.errors.imageUrl}</div> : null}

            </div>
            <div className='py-4 px-5 flex items-center justify-center gap-5'>
                <button type='submit' className='w-[150px] px-3 py-2 text-white bg-[#3aad1d] rounded-md cursor-pointer'>Add product</button>
                <button className='w-[150px] px-3 py-2 text-white bg-[#ad1d1d] rounded-md cursor-pointer' onClick={(e) => handleAddProductCloseBtnClick(e)}>Cancel</button>
            </div>
        </form>
    </div>
  )
}

export default AddProductPopup




// import { useFormik } from 'formik'
// import React, { useState,ReactEventHandler } from 'react'
// import { useDispatch } from 'react-redux'
// import { useUI } from '../../../contexts/ui.context'
// import { AddProduct } from '../../../store/ducks/products/actions'
// import Input from '../../UI/Input'

// const AddProductPopup = () => {
//     const {modalData, closeModal, addToast} = useUI()

//     const [productId, setProductId] = useState(modalData ? modalData.id : '')
//     const [title, setTitle] = useState(modalData ? modalData.title : '')
//     const [description, setDescription] = useState(modalData ? modalData.description : '')
//     const [price, setPrice] = useState(modalData ? modalData.price : '')
//     const [category, setCategory] = useState(modalData ? modalData.category : '')
//     const [imageUrl, setImageUrl] = useState(modalData ? modalData.img : '')

//     const formik = useFormik({
//         initialValues: {
//             title: '',
//             description: '',
//             price: '',
//             category: '',
//             imageUrl: '',
//         },
//         onSubmit
//     })

//     const dispatch = useDispatch()

//     // console.log(productId, title, description, price, category, imageUrl, 'hhhh', modalData)

//     const handleAddProductBtnClick = (e: any) => {
//         e.preventDefault()

//         const product = {
//             id: modalData ? productId : String(Math.floor(Math.random())),
//             title, 
//             description, 
//             price: price, 
//             category, 
//             img: imageUrl
//         }
//         dispatch(AddProduct(product))
//         addToast({id: Math.random(), toastType: 'success', text: `${title} - successfully created`})
//         console.log()
//     }

//     const handleAddProductCloseBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
//         e.preventDefault()
//         closeModal()
//     }

//   return (
//     <div className='w-[900px] h-auto flex flex-col rounded-md bg-[#252836]'>
//         <div className='text-white text-2xl py-4 px-5 border-b-[1px] border-b-[#EA9769]'>Add new product</div>
//         <form className='flex flex-col grow'>
//             <div className='grow w-full py-4 px-5'>
//                 <Input id='title' label='Title' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} value={title}/>
//                 <Input id='description' label='Description' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)} value={description} />
//                 <Input id='price' label='Price' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(e.target.value)} value={price} />
//                 <Input id='category' label='Category' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)} value={category} />
//                 <Input id='imageUrl' label='Image url' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImageUrl(e.target.value)} value={imageUrl}/>
//             </div>
//             <div className='py-4 px-5 flex items-center justify-center gap-5'>
//                 <button type='submit' className='w-[150px] px-3 py-2 text-white bg-[#3aad1d] rounded-md cursor-pointer' onClick={(e) => handleAddProductBtnClick(e)}>Add product</button>
//                 <button className='w-[150px] px-3 py-2 text-white bg-[#ad1d1d] rounded-md cursor-pointer' onClick={(e) => handleAddProductCloseBtnClick(e)}>Cancel</button>
//             </div>
//         </form>
//     </div>
//   )
// }

// export default AddProductPopup