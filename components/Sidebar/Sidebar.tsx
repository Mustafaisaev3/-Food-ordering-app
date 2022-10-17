import React from 'react'
import Link from 'next/link'
import {HomeIcon, ClockIcon, MailIcon, UserCircleIcon, BellIcon, OfficeBuildingIcon } from '@heroicons/react/outline'
import {IoIosCreate} from 'react-icons/io'
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
                <Link href='/' className='w-full'>
                    <div className='text-[30px] text-[white]'>
                        LOGO
                    </div>
                </Link>  
            </MenuIconContainer>
            <MenuIconContainer>
                <Link href='/' className='w-full'>
                    <HomeIcon color='white' className='h-[50px] w-[50px] '  />
                </Link>
            </MenuIconContainer>
            <MenuIconContainer>
                <Link href='/orders'>
                    <ClockIcon color='white' className='h-[50px] w-[50px]' />
                </Link>
            </MenuIconContainer>
            <MenuIconContainer>
                <Link href='/products-management'>
                    <IoIosCreate color='white' className='h-[50px] w-[50px]' />
                </Link>
            </MenuIconContainer>
            <MenuIconContainer>
                <Link href='/departments'>
                    <OfficeBuildingIcon color='white' className='h-[50px] w-[50px]' />
                </Link>
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