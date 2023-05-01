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
import { useFormik } from 'formik'
import { UserAccountSchema } from '../../schemas/UserAccountSchemas'


const User = () => {
  const dispatch = useDispatch()
  const { addToast } = useUI()
  const user = useSelector(selectUser)
  const [userObj, setUserObj] = useState<UserType>(user)

  const {values, touched, errors, handleSubmit, handleBlur, getFieldProps, handleChange} = useFormik({
    initialValues: {
      ...userObj
    },
    onSubmit(values) {
      handleSaveUserProfile()
    },
    validationSchema: UserAccountSchema
  })

  const handleSaveUserProfile = () => {
    dispatch(updateUser(userObj))
    addToast({id: Math.random(), toastType: 'success', text: 'Изменения сохраненны!'})
  }


  return (
    <Box className='w-full h-full'>
      <form onSubmit={handleSubmit}>
        <div className='w-full h-full grid sm:grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-3 md:gap-5' >
            <div className='w-full h-auto sm:col-span-1 md:col-span-1 lg:col-span-1 rounded-md bg-[#252836]'>
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
                  <TextArea label='BIO' name='bio' onChange={handleChange} value={values.bio} rows={4} />
                  {touched.bio && errors.bio ? <div className='text-[red]'>{errors.bio}</div> : null}

                  <Input label='Email' name='email' onChange={handleChange} value={values.email}/>
                  {touched.email && errors.email ? <div className='text-[red]'>{errors.email}</div> : null}

                  <Input label='Password' name='password' onChange={handleChange} type='password' value={values.password}/>
                  {touched.password && errors.password ? <div className='text-[red]'>{errors.password}</div> : null}

                  <Input label='Website' name='website' onChange={handleChange} value={values.website}/>
                  {touched.website && errors.website ? <div className='text-[red]'>{errors.website}</div> : null}

                  <Button btnType='primary' className='mt-[30px]' type='submit'>Save</Button>
                </div>
              </div>
            </div>
            <div className='w-full h-auto sm:col-span-1 md:col-span-2 rounded-md bg-[#252836]'>
              <div className='p-[28px]'>
                <h2 className='text-[20px] text-white font-semibold'>Edit Profile</h2>
                <div className='w-full h-auto flex flex-col gap-4 pt-[20px]'>
                  <div className='grid sm:grid-cols-1 md:grid-cols-8 gap-4'>
                    <div className='sm:col-span-1 md:col-span-4'>
                      <Input label='Company' name='company' onChange={handleChange} value={values.company}/>
                      {touched.company && errors.company ? <div className='text-[red]'>{errors.company}</div> : null}
                    </div>
                    <div className='sm:col-span-1 md:col-span-4'>
                      <Input label='Username' name='username' onChange={handleChange} value={values.userName}/>
                      {touched.userName && errors.userName ? <div className='text-[red]'>{errors.userName}</div> : null}
                    </div>
                    {/* <div className='sm:col-span-1 md:col-span-2'>
                      <Input label='Email' name='email' onChange={handleChange} value={values.email}/>
                      {touched.email && errors.email ? <div className='text-[red]'>{errors.email}</div> : null}
                    </div> */}
                  </div>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='col-span-1'>
                      <Input label='First Name' name='first_name' onChange={handleChange} value={values.first_name}/>
                      {touched.first_name && errors.first_name ? <div className='text-[red]'>{errors.first_name}</div> : null}
                    </div>
                    <div className='col-span-1'>
                      <Input label='Last Name' name='last_name' onChange={handleChange} value={values.last_name}/>
                      {touched.last_name && errors.last_name ? <div className='text-[red]'>{errors.last_name}</div> : null}
                    </div>
                  </div>
                  <div className='grid'>
                    <div className='col-span-1'>
                      <Input label='Address' name='address' onChange={handleChange} value={values.address}/>
                      {touched.address && errors.address ? <div className='text-[red]'>{errors.address}</div> : null}
                    </div>
                  </div>
                  <div className='grid grid-cols-6 gap-4'>
                    <div className='col-span-2'>
                      <Input label='City' name='city' onChange={handleChange} value={values.city}/>
                      {touched.city && errors.city ? <div className='text-[red]'>{errors.city}</div> : null}
                    </div>
                    <div className='col-span-2'>
                      <Input label='Postal Code' name='postal_code' onChange={handleChange} value={values.postal_code}/>
                      {touched.postal_code && errors.postal_code ? <div className='text-[red]'>{errors.postal_code}</div> : null}
                    </div>
                    <div className='col-span-2'>
                      <Input label='Country' name='country' onChange={handleChange} value={values.country}/>
                      {touched.country && errors.country ? <div className='text-[red]'>{errors.country}</div> : null}
                    </div>
                  </div>
                  <div className='grid'>
                    <div className='col-span-1'>
                      <TextArea label='About Me' name='about_me' onChange={handleChange} value={values.about_me}/>
                      {touched.about_me && errors.about_me ? <div className='text-[red]'>{errors.about_me}</div> : null}
                    </div>
                  </div>
                </div>
                <div className='w-full mt-[20px] border-t-[1px] border-[#EA6969]'>
                  <Button btnType='primary' onClick={handleSaveUserProfile} className='mt-[30px]'>Update Profile</Button>
                </div>
              </div>
            </div>
        </div>
      </form>
    </Box>
  )
}

export default User

