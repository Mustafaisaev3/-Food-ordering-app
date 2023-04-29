import React, { useState } from 'react'
import Box from '../../components/UI/Box'
import TextArea from '../../components/UI/TextArea'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from '../../store/ducks/user/selectors'
import { UserType } from '../../utils/types'
import { updateUser } from '../../store/ducks/user/actions'
import { useUI } from '../../contexts/ui.context'


const User = () => {
  const dispatch = useDispatch()
  const { addToast } = useUI()
  const user = useSelector(selectUser)
  const [userObj, setUserObj] = useState<UserType>(user)

  const handleSaveUserProfile = () => {
    dispatch(updateUser(userObj))
    addToast({id: Math.random(), toastType: 'success', text: 'Изменения сохраненны!'})
  }
  const handleSaveUser = () => {
    console.log(user)
  }


  return (
    <Box className='w-full h-full'>
        <div className='w-full h-full grid grid-cols-3 gap-5'>
            <div className='w-full h-auto col-span-1 rounded-md bg-[#252836]'>
              <div className='p-[28px]'>
                <h2 className='text-[20px] text-white font-semibold'>User Profile</h2>
                <div className='py-[20px] flex items-center gap-[20px] border-b-[1px] border-[#EA6969]'>
                  <div className='w-[70px] h-[70px] rounded-full bg-white'></div>
                  <div>
                    <div className='text-[20px] text-white font-bold'>USER ADMIN</div>
                    <div className='text-white'>ADMIN</div>
                  </div>
                </div>
                <div className='flex flex-col'>
                  <TextArea label='BIO' onChange={(e) => setUserObj({...userObj, bio: e.target.value})} value={userObj.bio} rows={4} />
                  <Input label='Email' onChange={(e) => setUserObj({...userObj, email: e.target.value})} value={userObj.email}/>
                  <Input label='Password' onChange={(e) => setUserObj({...userObj, password: e.target.value})} type='password' value={userObj.password}/>
                  <Input label='Website' onChange={(e) => setUserObj({...userObj, website: e.target.value})} value={userObj.website}/>
                  <Button btnType='primary' className='mt-[30px]' onClick={handleSaveUserProfile}>Save</Button>
                </div>
              </div>
            </div>
            <div className='w-full h-auto col-span-2 rounded-md bg-[#252836]'>
              <div className='p-[28px]'>
                <h2 className='text-[20px] text-white font-semibold'>Edit Profile</h2>
                <div className='w-full h-auto flex flex-col gap-4 pt-[20px]'>
                  <div className='grid grid-cols-8 gap-4'>
                    <div className='col-span-4'>
                      <Input label='Company' onChange={(e) => setUserObj({...userObj, company: e.target.value})} value={userObj.company}/>
                    </div>
                    <div className='col-span-2'>
                      <Input label='Username' onChange={(e) => setUserObj({...userObj, userName: e.target.value})} value={userObj.userName}/>
                    </div>
                    <div className='col-span-2'>
                      <Input label='Email' onChange={(e) => setUserObj({...userObj, email: e.target.value})} value={userObj.email}/>
                    </div>
                  </div>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='col-span-1'>
                      <Input label='First Name' onChange={(e) => setUserObj({...userObj, first_name: e.target.value})} value={userObj.first_name}/>
                    </div>
                    <div className='col-span-1'>
                      <Input label='Last Name' onChange={(e) => setUserObj({...userObj, last_name: e.target.value})} value={userObj.last_name}/>
                    </div>
                  </div>
                  <div className='grid'>
                    <div className='col-span-1'>
                      <Input label='Address' onChange={(e) => setUserObj({...userObj, address: e.target.value})} value={userObj.address}/>
                    </div>
                  </div>
                  <div className='grid grid-cols-6 gap-4'>
                    <div className='col-span-2'>
                      <Input label='City' onChange={(e) => setUserObj({...userObj, city: e.target.value})} value={userObj.city}/>
                    </div>
                    <div className='col-span-2'>
                      <Input label='Postal Code' onChange={(e) => setUserObj({...userObj, postal_code: e.target.value})} value={userObj.postal_code}/>
                    </div>
                    <div className='col-span-2'>
                      <Input label='Country' onChange={(e) => setUserObj({...userObj, country: e.target.value})} value={userObj.country}/>
                    </div>
                  </div>
                  <div className='grid'>
                    <div className='col-span-1'>
                      <TextArea label='About Me' onChange={(e) => setUserObj({...userObj, about_me: e.target.value})} value={userObj.about_me}/>
                    </div>
                  </div>
                </div>
                <div className='w-full mt-[20px] border-t-[1px] border-[#EA6969]'>
                  <Button btnType='primary' onClick={handleSaveUser} className='mt-[30px]'>Update Profile</Button>
                </div>
              </div>
            </div>
        </div>
    </Box>
  )
}

// Profile Picture
// Name
// Email
// Contact Number
// Your Role

export default User

