import React, { useState } from 'react'
import {HomeIcon, ClockIcon, MailIcon, UserCircleIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'

import { useUI } from '../../contexts/ui.context'
import { GoBell } from 'react-icons/go'
import { BsSearch } from 'react-icons/bs'
import {FiShoppingCart} from 'react-icons/fi'
import { Badge } from '../Badge'
import { useDispatch } from 'react-redux'
import { LogoutUser } from '../../store/ducks/auth/action'
import NotificationContainer from '../Notification/NotificationContainer'
import { fadeInTop } from '../../utils/motion/fade-in-top'



function Header() {
  const { openDrawer } = useUI();
  const [showNotification, setShowNotification] = useState(false)

  function handleDrawerView() {
    return openDrawer();
  }

  
  const handleNotificationBtnClick = () => {
    setShowNotification(!showNotification)
  }

  return (
    <header className='w-[100%] h-[auto] flex items-center justify-between'>
        <div className="user-info text-[white]">
            <div className='text-[25px]'>Alex Gray</div>
            <div className='text-[15px]'>Tusday, 28 June</div>
        </div>
        <div className="search-input flex items-center rounded-[5px] w-[500px] bg-[#2D303E] p-[10px]">
            <BsSearch style={{marginRight: '10px'}} color={'white'}/>
            <input type="text" className=' outline-none text-white bg-[#2D303E]' placeholder='Search food...'/>
        </div>
        <div className="user-ui mx-20px flex gap-5">
            <div className='relative cursor-pointer' onClick={handleNotificationBtnClick}>
                <GoBell size={30} color={'white'} />
                <Badge bg='green' textColor='white' content={2} />
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
            <div className='relative cursor-pointer' onClick={handleDrawerView}>
                <FiShoppingCart size={30} color={'white'} />
                <Badge bg='red' textColor='white' content={10} />
                {/* <div className='absolute top-[-10px] right-[-5px] text-center text-[white] bg-[red] rounded-full leading-none w-5 h-5'>2</div> */}
            </div>
        </div>
    </header>
  )
}

export default Header