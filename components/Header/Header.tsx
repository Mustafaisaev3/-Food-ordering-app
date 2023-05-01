import React, { useRef, useState } from 'react'
import {HomeIcon, ClockIcon, MailIcon, UserCircleIcon, UserIcon } from '@heroicons/react/outline'
import { FiMenu } from 'react-icons/fi'
import { motion } from 'framer-motion' 

import { useUI } from '../../contexts/ui.context'
import { GoBell } from 'react-icons/go'
import { BsSearch } from 'react-icons/bs'
import {FiShoppingCart} from 'react-icons/fi'
import { Badge } from '../Badge'
import { useDispatch, useSelector } from 'react-redux'
import { LogoutUser } from '../../store/ducks/auth/action'
import NotificationContainer from '../Notification/NotificationContainer'
import { fadeInTop } from '../../utils/motion/fade-in-top'
import UserModal from '../UserModal/UserModal'
import { useRouter } from 'next/router'
import HeaderSearch from './HeaderSearch'
import useOnClickOutside from '../../utils/use-click-outside'
import { selectCartItemsCount } from '../../store/ducks/cart/selectors'



function Header() {
  const { openDrawer, openMobileMenu } = useUI();
  const [showNotification, setShowNotification] = useState(false)
  const [showUserModal, setShowUserModal] = useState(false)
  const [searchInputValue, setSearchInputValue] = useState('')
  const router = useRouter()
  const cartItemsCount = useSelector(selectCartItemsCount)
  
  // Handle outside clicks
  const notificationModalRef = useRef(null)
  const userModalRef = useRef(null)
  useOnClickOutside(notificationModalRef, null, () => setShowNotification(false))
  useOnClickOutside(userModalRef, null, () => setShowUserModal(false))

  function handleDrawerView() {
    return openDrawer();
  }

  const handleNotificationBtnClick = () => {
    setShowNotification(!showNotification)
  }

  const handleUserModalBtnClick = () => {
    setShowUserModal(!showUserModal)
  }

  const onSearchInputSubmit = (e: any) => {
    e.preventDefault()
    router.push(`http://localhost:3000/search?value=${searchInputValue}`)
  }

  return (
    <header className='w-[100%] h-[auto] flex items-center justify-between bg-[#252836] p-20px rounded-md'>
        <HeaderSearch />
        <div className="user-ui flex mx-20px  gap-5">
            <div ref={notificationModalRef} className='relative cursor-pointer  hidden sm:block' onClick={handleNotificationBtnClick}>
                <GoBell size={30} color={'white'} />
                <Badge bg='green' textColor='white' content={5} />
                {showNotification &&
                    <motion.div
                        className='absolute top-[40px] right-[30%] z-[100]'
                        initial="from"
                        animate="to"
                        exit="from"
                        variants={fadeInTop()}
                    >
                        <NotificationContainer />
                    </motion.div>
                }
                {/* <div className='absolute top-[-10px] right-[-5px] text-center text-[white] bg-[green] rounded-full leading-none w-5 h-5'>2</div> */}
            </div>
            <div className='relative cursor-pointer ' onClick={handleDrawerView}>
                <FiShoppingCart size={30} color={'white'} />
                {cartItemsCount ? <Badge bg='#EA6969' textColor='white' content={cartItemsCount} /> : null}
                {/* <div className='absolute top-[-10px] right-[-5px] text-center text-[white] bg-[red] rounded-full leading-none w-5 h-5'>2</div> */}
            </div>
            <div ref={userModalRef} className='relative cursor-pointer hidden sm:block'>
                <div className='w-[30px] h-[30px] rounded-full bg-[#ffffffd9]' onClick={handleUserModalBtnClick}></div>
                {showUserModal &&
                    <motion.div
                        className='absolute top-[40px] right-[30%] z-[100]'
                        initial="from"
                        animate="to"
                        exit="from"
                        variants={fadeInTop()}
                    >
                        <UserModal />
                    </motion.div>
                }
            </div>
            <div className='lg:hidden cursor-pointer flex items-center gap-3'>
              <FiMenu size={25} color={'white'} onClick={openMobileMenu} />
            </div>
        </div>
        {/* <div className='sm:hidden ml-5 cursor-pointer flex items-center gap-3'>
          <div className='relative cursor-pointer' onClick={handleDrawerView}>
            <FiShoppingCart size={25} color={'white'} />
            {cartItemsCount ? <Badge bg='#EA6969' textColor='white' content={cartItemsCount} /> : null}
          </div>
        </div> */}
    </header>
  )
}

export default Header