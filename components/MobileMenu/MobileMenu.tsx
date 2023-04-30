import { ClockIcon, HomeIcon, OfficeBuildingIcon, UserCircleIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React from 'react'
import { BsFillChatLeftDotsFill, BsFillChatSquareDotsFill } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'
import { GoSearch } from 'react-icons/go'
import { IoIosCreate, IoMdChatboxes } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import { useUI } from '../../contexts/ui.context'
import MenuIconContainer from '../Sidebar/MenuIconContainer'
import { useRouter } from 'next/router'

const MobileMenu = () => {
  const {displayMobileMenu, closeMobileMenu} = useUI()
  const router = useRouter()

  return (
    <>
        {displayMobileMenu 
        ?
            <div className='w-full h-full absolute left-0 top-0 bg-[#252836] z-10 flex flex-col overflow-hidden'>
                <header className='w-full flex items-center justify-end p-5'>
                    <MdClose size={30} onClick={closeMobileMenu} className='text-white cursor-pointer' />
                </header>
                <div className='flex-1 flex flex-col justify-between'>
                    <div className='flex flex-col p-10 gap-2 pt-10'>
                        <div className='w-full h-[60px] px-[20px] flex items-center relative cursor-pointer rounded-lg  hover:bg-slate-700'>
                            <Link href='/' className='w-full'>
                                <div className='flex items-center gap-5'>
                                    <HomeIcon color='white' className='h-[40px] w-[40px] '  />
                                    <div className='text-[20px] text-white font-semibold'>Home</div>
                                </div>
                            </Link>
                        </div>
                        <div className='w-full h-[60px] px-[20px] flex items-center relative cursor-pointer rounded-lg  hover:bg-slate-700'>
                            <Link href='/orders' className='w-full'>
                                <div className='flex items-center gap-5'>
                                <ClockIcon color='white' className='h-[40px] w-[40px]' />
                                    <div className='text-[20px] text-white font-semibold'>Orders</div>
                                </div>
                            </Link>
                        </div>
                        <div className='w-full h-[60px] px-[20px] flex items-center relative cursor-pointer rounded-lg  hover:bg-slate-700'>
                            <Link href='/chat' className='w-full'>
                                <div className='flex items-center gap-5'>
                                    <IoMdChatboxes color='white' className='h-[40px] w-[40px]' />
                                    <div className='text-[20px] text-white font-semibold'>Chat</div>
                                </div>
                            </Link>
                        </div>
                        <div className='w-full h-[60px] px-[20px] flex items-center relative cursor-pointer rounded-lg  hover:bg-slate-700'>
                            <Link href='/search' className='w-full'>
                                <div className='flex items-center gap-5'>
                                    <GoSearch color='white' className='h-[40px] w-[40px]' />
                                    <div className='text-[20px] text-white font-semibold'>Search</div>
                                </div>
                            </Link>
                        </div>
                        <div className='w-full h-[60px] px-[20px] flex items-center relative cursor-pointer rounded-lg  hover:bg-slate-700'>
                            <Link href='/products-management' className='w-full'>
                                <div className='flex items-center gap-5'>
                                    <IoIosCreate color='white' className='h-[40px] w-[40px]' />
                                    <div className='text-[20px] text-white font-semibold'>Product management</div>
                                </div>
                            </Link>
                        </div>
                        <div className='w-full h-[60px] px-[20px] flex items-center relative cursor-pointer rounded-lg  hover:bg-slate-700'>
                            <Link href='/departments' className='w-full'>
                                <div className='flex items-center gap-5'>
                                    <OfficeBuildingIcon color='white' className='h-[40px] w-[40px]' />
                                    <div className='text-[20px] text-white font-semibold'>Departments</div>
                                </div>
                            </Link>
                        </div>
                        <div className='w-full h-[60px] px-[20px] flex items-center relative cursor-pointer rounded-lg  hover:bg-slate-700'>
                            <Link href='/user' className='w-full'>
                                <div className='flex items-center gap-5'>
                                <UserCircleIcon color='white' className='h-[40px] w-[40px]' />
                                    <div className='text-[20px] text-white font-semibold'>User</div>
                                </div>
                            </Link>
                        </div>
                        {/* <MenuIconContainer>
                            <Link href='/' className='w-full'>
                                <div className='text-[30px] text-[white]'>
                                    LOGO
                                </div>
                            </Link>  
                        </MenuIconContainer>
                        <MenuIconContainer active={router.pathname == '/' ? true : false} tooltip={'home'}>
                            <Link href='/' className='w-full'>
                                <HomeIcon color='white' className='h-[40px] w-[40px] '  />
                            </Link>
                        </MenuIconContainer>
                        <MenuIconContainer active={router.pathname == '/orders' ? true : false} tooltip={'orders'}>
                            <Link href='/orders'>
                                <ClockIcon color='white' className='h-[40px] w-[40px]' />
                            </Link>
                        </MenuIconContainer>
                        <MenuIconContainer active={router.pathname == '/chat' ? true : false} tooltip={'chat'}>
                            <Link href='/chat'>
                                <BsFillChatLeftDotsFill color='white' className='h-[30px] w-[30px]' />
                            </Link>
                        </MenuIconContainer>
                        <MenuIconContainer active={router.pathname == '/search' ? true : false} tooltip={'search'}>
                            <Link href='/search'>
                                <GoSearch color='white' className='h-[30px] w-[30px]' />
                            </Link>
                        </MenuIconContainer>
                        <MenuIconContainer active={router.pathname == '/products-management' ? true : false} tooltip={'products management'}>
                            <Link href='/products-management'>
                                <IoIosCreate color='white' className='h-[40px] w-[40px]' />
                            </Link>
                        </MenuIconContainer>
                        <MenuIconContainer active={router.pathname == '/departments' ? true : false} tooltip={'departments'}>
                            <Link href='/departments'>
                                <OfficeBuildingIcon color='white' className='h-[40px] w-[40px]' />
                            </Link>
                        </MenuIconContainer>
                        <MenuIconContainer active={router.pathname == '/user' ? true : false} tooltip={'user'}>
                            <Link href='/user'>
                                <UserCircleIcon color='white' className='h-[40px] w-[40px]' />
                            </Link>
                        </MenuIconContainer> */}
                    </div>
                    <div className='pb-10 flex items-center justify-center'>
                        <MenuIconContainer>
                            <div>
                                <FiLogOut color='white' className='h-[40px] w-[40px]' />
                            </div>
                        </MenuIconContainer>
                    </div>
                </div>
            </div>
        
        : null
        }
    </>
  )
}

export default MobileMenu