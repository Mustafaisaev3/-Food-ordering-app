import React, { useEffect, useState } from 'react'
import { HiPencil } from 'react-icons/hi'
import { MdNotificationsOff } from 'react-icons/md'
import { IoMdWarning } from 'react-icons/io'

enum themeColors {
    color1 ="#559bfb",
    color2 ="#816bff",
    color3 ="#f4bd0e",
    color4 ="#1ee0ac",
    color5 ="#e85347",
    color6 ="#09c2de",
    color7 ="#ff63a5",
    color8 ="#ffa353",
    color9 ="#364a63"
}

const ChangeNickname = () => {
    return(
        <div className='w-auto flex items-center gap-2 cursor-pointer'>
            <div className='p-2 rounded-full bg-[#2d3745ae]'>
                <HiPencil size={18} color='white' />
            </div>
            <p className='text-sm text-white'>Nickname</p>
        </div>
    )
}

const ChangeTheme = ({changeThemeColor, themeColor}: any) => {
    const [showModal, setShowModal] = useState(false)
    const handleShowModalClick = () => {
        setShowModal(!showModal)
    }

    return(
        <div className='w-auto cursor-pointer relative'>
            <div className='flex items-center gap-2' onClick={handleShowModalClick}>
                <div className='p-2 rounded-full bg-[#2d3745ae]'>
                    <div style={{backgroundColor: themeColor}} className={`bg-[${themeColor}] rounded-full w-[20px] h-[20px]`}></div>
                </div>
                <p className='text-sm text-white'>Change Theme</p>
            </div>
            {showModal ? (
                <div className='w-auto h-auto bg-[#565656] absolute top-[100%] left-1 rounded-md shadow'>
                    <div className='w-full h-auto p-1 grid grid-cols-3 grid-rows-3 gap-2'>
                        <div style={{backgroundColor: themeColors.color1}} className={`w-[50px] h-[25px] bg-[${themeColors.color1}] cursor-pointer`} onClick={() => changeThemeColor(themeColors.color1)}></div>
                        <div style={{backgroundColor: themeColors.color2}} className={`w-[50px] h-[25px] bg-[${themeColors.color2}] cursor-pointer`} onClick={() => changeThemeColor(themeColors.color2)}></div>
                        <div style={{backgroundColor: themeColors.color3}} className={`w-[50px] h-[25px] bg-[${themeColors.color3}] cursor-pointer`} onClick={() => changeThemeColor(themeColors.color3)}></div>
                        <div style={{backgroundColor: themeColors.color4}} className={`w-[50px] h-[25px] bg-[${themeColors.color4}] cursor-pointer`} onClick={() => changeThemeColor(themeColors.color4)}></div>
                        <div style={{backgroundColor: themeColors.color5}} className={`w-[50px] h-[25px] bg-[${themeColors.color5}] cursor-pointer`} onClick={() => changeThemeColor(themeColors.color5)}></div>
                        <div style={{backgroundColor: themeColors.color6}} className={`w-[50px] h-[25px] bg-[${themeColors.color6}] cursor-pointer`} onClick={() => changeThemeColor(themeColors.color6)}></div>
                        <div style={{backgroundColor: themeColors.color7}} className={`w-[50px] h-[25px] bg-[${themeColors.color7}] cursor-pointer`} onClick={() => changeThemeColor(themeColors.color7)}></div>
                        <div style={{backgroundColor: themeColors.color8}} className={`w-[50px] h-[25px] bg-[${themeColors.color8}] cursor-pointer`} onClick={() => changeThemeColor(themeColors.color8)}></div>
                        <div style={{backgroundColor: themeColors.color9}} className={`w-[50px] h-[25px] bg-[${themeColors.color9}] cursor-pointer`} onClick={() => changeThemeColor(themeColors.color9)}></div>
                    </div>
                </div>
            ): null}
        </div>
    )
}

const ChatUserInfo = ({setThemeColor, themeColor, activeUser}: any) => {

  return (
    <div className='min-w-[300px] w-[300px] h-full hidden flex-col rounded-md border-[#ffffff33] sm:hidden md:hidden lg:flex bg-[#252836]'>
        <div className='w-full h-auto py-8 flex flex-col items-center justify-center gap-2 border-b-[0.3px] border-[#ffffff33]'>
            <div className='min-w-[60px] h-[60px] rounded-full bg-[#218cff93] overflow-hidden'>
                <img className='w-full h-full object-cover' src={`${activeUser.photo}`} />
            </div>
            <h5 className='text-xl text-white'>{activeUser.username}</h5>
            <p className='text-[#8094ae] text-[13px]'>Active now ago</p>
        </div>
        <div className='w-full h-auto p-4 flex flex-col gap-2 border-b-[0.3px] border-[#ffffff33]'>
            <h2 className='text-base text-white pb-2'>Options</h2>
            <ChangeNickname />
            <ChangeTheme changeThemeColor={setThemeColor} themeColor={themeColor}/>
        </div>
        <div className='w-full h-auto p-4 flex flex-col gap-2 border-b-[0.3px] border-[#ffffff33]'>
            <h2 className='text-base text-white pb-2'>Settings</h2>
            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2  cursor-pointer'>
                    <div className='p-2 rounded-full bg-[#2d3745ae]'>
                        <MdNotificationsOff size={18} color='white' />
                    </div>
                    <div>
                        <p className='text-sm text-white'>Something Wrong</p>
                        <p className='text-xs text-[#ffffff5d]'>Give feedback and report conversion.</p>
                    </div>
                </div>
                <div className='flex items-center gap-2  cursor-pointer'>
                    <div className='p-2 rounded-full bg-[#2d3745ae]'>
                        <IoMdWarning size={18} color='white' />
                    </div>
                    <div>
                        <p className='text-sm text-white'>Ignore Message</p>
                        <p className='text-xs text-[#ffffff5d]'>You won’t be notified when message you.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full h-auto p-4 flex flex-col gap-2'>
            <h2 className='text-base text-white pb-2'>Shared Photos</h2>
            <div className='w-full grid grid-cols-3 gap-2'>
                <div className='rounded overflow-hidden cursor-pointer'>
                    <img src='assets/images/chat/food-9.jpg' alt='image' />
                </div>
                <div className='rounded overflow-hidden cursor-pointer'>
                    <img src='assets/images/chat/food-11.jpg' alt='image' />
                </div>
                <div className='rounded overflow-hidden cursor-pointer'>
                    <img src='assets/images/chat/object-3.jpg' alt='image' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatUserInfo