import React, { useState } from 'react'
import Image from 'next/image'
import Input from '../components/UI/Input'
import { AiFillFacebook } from 'react-icons/ai'
import { ImGoogle2 } from 'react-icons/im'
import { useDispatch } from 'react-redux'
import { LoginUser } from '../store/ducks/auth/action'

const Login = () => {
  const [email, setEmail] = useState<string>('demo@gmail.com')
  const [password, setPassword] = useState<string>('demo')
  const loginUserData = {
    email: 'demo@gmail.com',
    password: 'demo'
  }

  const dispatch = useDispatch()

  const handleLoginBtnClick = () => {
      if (email === loginUserData.email && password === loginUserData.password){
        localStorage.setItem('pizzaAppUserTocken','123456')
        dispatch(LoginUser('123456'))
      }
  }

  return (
    <div className='w-full h-screen flex items-center justify-center bg-[#252836] relative'>
        <Image sizes='100vw' layout='fill' src={'/assets/images/pizza_background.jpg'} className='object-cover' />
        <div className='w-[500px] h-auto p-[30px] rounded-md bg-[#252836] z-10'>
            <div className='w-full h-full flex flex-col justify-start'>
                <div className="text-center mb-2 pt-2.5">
                    <div className='text-[#EA6969] text-[35px] font-bold'>
                        Login
                    </div>
                    <p className="text-white text-sm md:text-base text-body mt-2 mb-2 sm:mb-3">
                        Login with your email & password
                    </p>
                </div>
                <form>
                    <Input id='Email' name='Email' label='Email' value={'demo@gmail.com'} onChange={(e) => setEmail('demo@gmail.com')} classes={'mt-[40px]'} />
                    <Input id='Password' name='Password' type='password' label='Password' value={'demo'} onChange={(e) => setPassword('demo')} classes={'mt-[40px]'}/>

                    <div onClick={handleLoginBtnClick} className='flex justify-center items-center mt-10 p-[10px] cursor-pointer bg-[#EA6969] rounded-lg w-full h-auto'>
                        <div className='text-[15px] text-[white]'>Login</div>
                    </div>

                    <div className="flex flex-col items-center justify-center relative text-sm text-heading mt-6 mb-3.5">
                        <hr className="w-full border-[#EA6969]" />
                        <span className="absolute -top-2.5 px-2 bg-[#252836] text-white">
                            Or
                        </span>
                    </div>

                    <div className='flex justify-center items-center gap-1 mt-10 p-[10px] cursor-pointer bg-[#4267B2] rounded-lg w-full h-auto'>
                        <AiFillFacebook size={18} color={'white'} />
                        <div className='text-[15px] text-[white]'>Login with Facebook</div>
                    </div>
                    <div className='flex justify-center items-center gap-1 mt-5 p-[10px] cursor-pointer bg-[#4285F4] rounded-lg w-full h-auto'>
                        <ImGoogle2 size={18} color={'white'} />
                        <div className='text-[15px] text-[white]'>Login with Google</div>
                    </div>
                </form>
            </div>
        </div>        
    </div>
  )
}

export default Login