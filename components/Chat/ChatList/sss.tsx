import React from 'react'
import SearchInput from '../../UI/SearchInput'

import {BsSearch} from 'react-icons/bs'

const ChatList = () => {
  return (
    <div className='min-w-[350px] h-full flex flex-col border-r-[0.3px] border-[#ffffff33] overflow-y-hidden'>
        <div className='chatlist__header w-full h-[80px] flex items-center p-4 border-b-[0.3px] border-[#ffffff33]'>
            <div className='min-w-[50px] h-[50px] rounded-full bg-[#e121ff7a]'></div>
            <SearchInput classes={'ml-3'} placeholder={'Search ...'} leftIcon={<BsSearch style={{marginRight: '10px'}} color={'white'}/>} />
        </div>

        <div className='overflow-x-hidden overflow-y-auto '>
            <div className='chatlist__chats'>
                <div className='w-full h-auto'>
                    <h2 className='text-white text-xl font-semibold p-5'>Chats</h2>
                </div>
                <div className='notification-body__item w-full flex items-center justify-between px-5 py-3'>
                    <div className='min-w-[40px] h-[40px] rounded-full bg-[#218cff93]'></div>
                    <div className='h-[40px] grow px-3 '>
                        <div className='w-full text-base text-white whitespace-nowrap overflow-clip text-ellipsis'>Congratulation Flora! 🎉</div>
                        <div className='w-full text-sm text-[#aeaeae9c] whitespace-nowrap overflow-hidden text-ellipsis'>Won the monthly best seller badge</div>
                    </div>
                    <div className=' text-sm text-[#aeaeae9c]'>
                        Yesterday
                    </div>
                </div>
                <div className='notification-body__item w-full flex items-center justify-between px-5 py-3'>
                    <div className='min-w-[40px] h-[40px] rounded-full bg-[#218cff93]'></div>
                    <div className='h-[40px] grow px-3 '>
                        <div className='w-full text-base text-white whitespace-nowrap overflow-clip text-ellipsis'>Congratulation Flora! 🎉</div>
                        <div className='w-full text-sm text-[#aeaeae9c] whitespace-nowrap overflow-hidden text-ellipsis'>Won the monthly best seller badge</div>
                    </div>
                    <div className=' text-sm text-[#aeaeae9c]'>
                        Yesterday
                    </div>
                </div>
                <div className='notification-body__item w-full flex items-center justify-between px-5 py-3'>
                    <div className='min-w-[40px] h-[40px] rounded-full bg-[#218cff93]'></div>
                    <div className='h-[40px] grow px-3 '>
                        <div className='w-full text-base text-white whitespace-nowrap overflow-clip text-ellipsis'>Congratulation Flora! 🎉</div>
                        <div className='w-full text-sm text-[#aeaeae9c] whitespace-nowrap overflow-hidden text-ellipsis'>Won the monthly best seller badge</div>
                    </div>
                    <div className=' text-sm text-[#aeaeae9c]'>
                        Yesterday
                    </div>
                </div>
            </div>

            <div className='chatlist__chats '>
                <div className='w-full h-auto'>
                    <h2 className='text-white text-xl font-semibold p-5'>Chats</h2>
                </div>
                <div className='notification-body__item w-full flex items-center justify-between px-5 py-3'>
                    <div className='min-w-[40px] h-[40px] rounded-full bg-[#218cff93]'></div>
                    <div className='h-[40px] grow px-3 '>
                        <div className='w-full text-base text-white whitespace-nowrap overflow-clip text-ellipsis'>Congratulation Flora! 🎉</div>
                        <div className='w-full text-sm text-[#aeaeae9c] whitespace-nowrap overflow-hidden text-ellipsis'>Won the monthly best seller badge</div>
                    </div>
                </div>
                <div className='notification-body__item w-full flex items-center justify-between px-5 py-3'>
                    <div className='min-w-[40px] h-[40px] rounded-full bg-[#218cff93]'></div>
                    <div className='h-[40px] grow px-3 '>
                        <div className='w-full text-base text-white whitespace-nowrap overflow-clip text-ellipsis'>Congratulation Flora! 🎉</div>
                        <div className='w-full text-sm text-[#aeaeae9c] whitespace-nowrap overflow-hidden text-ellipsis'>Won the monthly best seller badge</div>
                    </div>
                </div>
                <div className='notification-body__item w-full flex items-center justify-between px-5 py-3'>
                    <div className='min-w-[40px] h-[40px] rounded-full bg-[#218cff93]'></div>
                    <div className='h-[40px] grow px-3 overflow-hidden '>
                        <div className='w-full text-base text-white whitespace-nowrap overflow-clip text-ellipsis'>Congratulation Flora! 🎉</div>
                        <div className='w-full text-sm text-[#aeaeae9c] whitespace-nowrap overflow-hidden text-ellipsis'>Won the monthly best seller badge sssssssssssssssss</div>
                    </div>
                </div>
                <div className='notification-body__item w-full flex items-center justify-between px-5 py-3'>
                    <div className='min-w-[40px] h-[40px] rounded-full bg-[#218cff93]'></div>
                    <div className='h-[40px] grow px-3 overflow-hidden '>
                        <div className='w-full text-base text-white whitespace-nowrap overflow-clip text-ellipsis'>Congratulation Flora! 🎉</div>
                        <div className='w-full text-sm text-[#aeaeae9c] whitespace-nowrap overflow-hidden text-ellipsis'>Won the monthly best seller badge sssssssssssssssss</div>
                    </div>
                </div>
                <div className='notification-body__item w-full flex items-center justify-between px-5 py-3'>
                    <div className='min-w-[40px] h-[40px] rounded-full bg-[#218cff93]'></div>
                    <div className='h-[40px] grow px-3 overflow-hidden '>
                        <div className='w-full text-base text-white whitespace-nowrap overflow-clip text-ellipsis'>Congratulation Flora! 🎉</div>
                        <div className='w-full text-sm text-[#aeaeae9c] whitespace-nowrap overflow-hidden text-ellipsis'>Won the monthly best seller badge sssssssssssssssss</div>
                    </div>
                </div>
                <div className='notification-body__item w-full flex items-center justify-between px-5 py-3'>
                    <div className='min-w-[40px] h-[40px] rounded-full bg-[#218cff93]'></div>
                    <div className='h-[40px] grow px-3 overflow-hidden '>
                        <div className='w-full text-base text-white whitespace-nowrap overflow-clip text-ellipsis'>Congratulation Flora! 🎉</div>
                        <div className='w-full text-sm text-[#aeaeae9c] whitespace-nowrap overflow-hidden text-ellipsis'>Won the monthly best seller badge sssssssssssssssss</div>
                    </div>
                </div>
                <div className='notification-body__item w-full flex items-center justify-between px-5 py-3'>
                    <div className='min-w-[40px] h-[40px] rounded-full bg-[#218cff93]'></div>
                    <div className='h-[40px] grow px-3 overflow-hidden '>
                        <div className='w-full text-base text-white whitespace-nowrap overflow-clip text-ellipsis'>Congratulation Flora! 🎉</div>
                        <div className='w-full text-sm text-[#aeaeae9c] whitespace-nowrap overflow-hidden text-ellipsis'>Won the monthly best seller badge sssssssssssssssss</div>
                    </div>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default ChatList