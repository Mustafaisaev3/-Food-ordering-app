import React from 'react'
import Link from 'next/link'
import {HomeIcon, ClockIcon, MailIcon, UserCircleIcon, BellIcon, OfficeBuildingIcon } from '@heroicons/react/outline'
import {IoIosCreate} from 'react-icons/io'
import {FiLogOut} from 'react-icons/fi'
import {BsFillChatLeftDotsFill} from 'react-icons/bs'
import MenuIconContainer from './MenuIconContainer'
import { useDispatch } from 'react-redux'
import { LogoutUser } from '../../store/ducks/auth/action'
import { useUI } from '../../contexts/ui.context'


function Sidebar() {
    const dispatch = useDispatch()
    const {setConfirmationModalData, openConfirmationModal} = useUI()

    const handleLogoutClick = () => {
        function Logout () {
            localStorage.removeItem('userToken')
            dispatch(LogoutUser())
        }

        setConfirmationModalData({ data: {questionText: `Logout?`, perfomedFunction: () => Logout()} });
		return openConfirmationModal();
    }
  return (
    <div className='w-[150px] h-screen bg-[#252836] rounded-r-lg flex flex-col items-center justify-between'>
        <div className='flex flex-col items-center gap-2 pt-10'>
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
                <Link href='/chat'>
                    <BsFillChatLeftDotsFill color='white' className='h-[40px] w-[40px]' />
                </Link>
            </MenuIconContainer>
            <MenuIconContainer>
                <UserCircleIcon color='white' className='h-[50px] w-[50px]' />
            </MenuIconContainer>
            <MenuIconContainer>
                <BellIcon color='white' className='h-[50px] w-[50px]' />
            </MenuIconContainer>
        </div>
        <div className='pb-10'>
            <MenuIconContainer>
                <div onClick={handleLogoutClick}>
                    <FiLogOut color='white' className='h-[50px] w-[50px]' />
                </div>
            </MenuIconContainer>
        </div>
    </div>
  )
}

export default Sidebar
