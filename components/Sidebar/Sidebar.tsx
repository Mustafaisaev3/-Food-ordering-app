import React from 'react'
import {HomeIcon, ClockIcon, MailIcon, UserCircleIcon, BellIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'
import MenuIconContainer from './MenuIconContainer'

type MenuItemProps = {
    children: any
}

function Sidebar() {
  return (
    <div className='w-[150px] h-screen bg-[#252836] rounded-r-lg'>
        <div className='flex flex-col items-center'>
            
            <MenuIconContainer>
                <div className='text-[30px] text-[white]'>
                    LOGO
                </div>
            </MenuIconContainer>
            <MenuIconContainer>
                <HomeIcon color='white' className='h-[50px] w-[50px] '  />
            </MenuIconContainer>
            <MenuIconContainer>
                <ClockIcon color='white' className='h-[50px] w-[50px]' />
            </MenuIconContainer>
            <MenuIconContainer>
                <MailIcon color='white' className='h-[50px] w-[50px]' />
            </MenuIconContainer>
            <MenuIconContainer>
                <UserCircleIcon color='white' className='h-[50px] w-[50px]' />
            </MenuIconContainer>
            <MenuIconContainer>
                <BellIcon color='white' className='h-[50px] w-[50px]' />
            </MenuIconContainer>
        </div>
    </div>
  )
}

export default Sidebar