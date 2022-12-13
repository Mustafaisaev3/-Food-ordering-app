import Link from 'next/link'
import React from 'react'

import { HiUser, HiQuestionMarkCircle } from 'react-icons/hi'
import { AiOutlineSetting } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'

const UserModal = () => {
  return (
    <div className='w-[250px] h-auto rounded-md bg-[#2D303E] flex flex-col'>
      <div className='notification-header w-full flex items-center px-5 py-3 border-b-[0.3px] border-[#aeaeae9c]'>
        <div className='w-[50px] h-[50px] rounded-full bg-[#e121ff7a]'></div>
        <div className='px-4'>
            <div className='text-white'>Test User</div>
            <div className='text-[#aeaeae9c]'>admin</div>
        </div>
      </div>
      <div className='grow px-2'>

        <div className='my-2'>
            <Link href={'/'}>
                <div className='w-full flex items-center justify-between py-2 px-3 rounded-md hover:bg-[#3b4053]'>
                        <HiUser size={20} color={'white'} />
                        <div className='grow px-4'>
                            <div className='text-white text-md'>Profile</div>
                        </div> 
                </div>
            </Link>
        </div>

        <div className='my-2'>
            <Link href={'/'}>
                <div className='w-full flex items-center justify-between py-2 px-3 rounded-md hover:bg-[#3b4053]'>
                        <AiOutlineSetting size={20} color={'white'} />
                        <div className='grow px-4'>
                            <div className='text-white text-md'>Settings</div>
                        </div> 
                </div>
            </Link>
        </div>

        <div className='my-2'>
            <Link href={'/'}>
                <div className='w-full flex items-center justify-between py-2 px-3 rounded-md hover:bg-[#3b4053]'>
                        <HiQuestionMarkCircle size={20} color={'white'} />
                        <div className='grow px-4'>
                            <div className='text-white text-md'>FAQ</div>
                        </div> 
                </div>
            </Link>
        </div>

      </div>
      <div className='py-2 px-2 border-t-[0.3px] border-[#aeaeae9c]'>
        <Link href={'/'}>
            <div className='w-full flex items-center justify-between py-2 px-3 rounded-md hover:bg-[#3b4053]'>
                    <FiLogOut size={20} color={'white'} />
                    <div className='grow px-4'>
                        <div className='text-white text-md'>Logout</div>
                    </div> 
            </div>
        </Link> 
      </div> 
    </div>
  )
}

export default UserModal