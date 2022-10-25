import React, { useState,ReactEventHandler } from 'react'
import { useDispatch } from 'react-redux'
import { useUI } from '../../../contexts/ui.context'
import Input from '../../UI/Input'
import Places from '../../GoogleMap/Places'
import { AddDepartment } from '../../../store/ducks/departmens/actions'

const AddDepartmentPopup = () => {
    const {modalData, closeModal, addToast} = useUI()

    const [departmentId, setDepartmentId] = useState(modalData ? modalData.id : '')
    const [title, setTitle] = useState(modalData ? modalData.title : '')
    const [description, setDescription] = useState(modalData ? modalData.description : '')
    const [imageUrl, setImageUrl] = useState(modalData ? modalData.img : '')
    const [from, setFrom] = useState(modalData ? modalData.from : '')
    const [to, setTo] = useState(modalData ? modalData.to : '')
    const [address, setAddress] = useState(modalData ? modalData.address : '')
    const [coordinates, setCoordinates] = useState(modalData ? modalData.coordinates : {lat: null, lng: null})

    const dispatch = useDispatch()

    const handleAddDepartmentBtnClick = (e: any) => {
        e.preventDefault()

        const department = {
            id: modalData ? departmentId : String(Math.floor(Math.random())),
            title, 
            description, 
            img: imageUrl,
            timetable: {
                from,
                to
            },
            address,
            coordinates
        }
        console.log(department)
        dispatch(AddDepartment(department))
        addToast({id: Math.random(), toastType: 'success', text: `${title} - successfully created`})
    }

    const handleAddDepartmentCloseBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        closeModal()
    }

  return (
    <div className='w-[900px] h-auto flex flex-col rounded-md bg-[#252836]'>
        <div className='text-white text-2xl py-4 px-5 border-b-[1px] border-b-[#EA9769]'>Add new Department</div>
        <form className='flex flex-col grow'>
            <div className='grow w-full py-4 px-5'>
                {
                    imageUrl && <img className='w-[100px] h-[100px]' src={imageUrl} />
                }
                <Input label='Title' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} value={title}/>
                <Input label='Description' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)} value={description} />
                <Input label='Image url' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImageUrl(e.target.value)} value={imageUrl}/>
                <div className=''>
                    <div className='w-full text-white pt-7 text-center'>Work time</div>
                    <div className='flex gap-2'>
                        <Input label='From' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFrom(e.target.value)} value={from}/>
                        <Input label='To' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTo(e.target.value)} value={to}/>
                    </div>
                </div>
                <div className=''>
                    <div className='w-full text-white pt-7 text-center'>Choose an address</div>
                    <div className='flex gap-2'>
                        <Places setDestination={setCoordinates} setAddress={setAddress} />
                    </div>
                </div>
            </div>
            <div className='py-4 px-5 flex items-center justify-center gap-5'>
                <button type='submit' className='w-[150px] px-3 py-2 text-white bg-[#3aad1d] rounded-md cursor-pointer' onClick={(e) => handleAddDepartmentBtnClick(e)}>Add department</button>
                <button className='w-[150px] px-3 py-2 text-white bg-[#ad1d1d] rounded-md cursor-pointer' onClick={(e) => handleAddDepartmentCloseBtnClick(e)}>Cancel</button>
            </div>
        </form>
    </div>
  )
}


export default AddDepartmentPopup