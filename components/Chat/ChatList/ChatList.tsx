import React from 'react'
import SearchInput from '../../UI/SearchInput'

import {BsSearch} from 'react-icons/bs'
import { getUser } from '../../../data/chat/chat'

const ChatList = ({users, conversations, activeConversation, setActiveConversation, activeUser}: any) => {
  const handleConversationClickBtn = (conversation: any) => {
    setActiveConversation(conversation)
  }
  
  return (
    <div className='min-w-[300px] max-w-[500px] min-h-[300px] w-full h-full flex flex-col rounded-md border-[#ffffff33] overflow-y-hidden bg-[#252836]'>
        <div className='chatlist__header w-full h-[80px] flex items-center p-4 border-b-[0.3px] border-[#ffffff33]'>
            <div className='min-w-[50px] h-[50px] rounded-full overflow-hidden'>
                <img className='w-full h-full object-cover' src={`${activeUser.photo}`} />
            </div>
            <SearchInput classes={'ml-3'} placeholder={'Search ...'} leftIcon={<BsSearch style={{marginRight: '10px'}} color={'white'}/>} />
        </div>

        <div className=' overflow-x-hidden overflow-y-auto '>
            <div className='chatlist__chats p-5'>
                <div className='w-full h-auto'>
                    <h2 className='text-white text-xl font-semibold'>Contacts</h2>
                </div>
                <div className='w-full h-auto py-2 flex gap-4 overflow-hidden '  >
                    {users.map((user: any) => {
                        return (
                            <div className='flex flex-col gap-1 cursor-pointer'>
                                <div className='w-[40px] max-w-[40px] max-h-[40px] rounded-full bg-[#218cff93] overflow-hidden '>
                                    <img src={`${user.photo}`} alt="" className='w-full h-full object-cover' />
                                </div>
                                <p className='text-sm text-[#c2c9d6]'>{user.nickname}</p>
                            </div>
                        )
                    })}
                    {/* <div className='min-w-[40px] h-[40px] rounded-full bg-[#218cff93]'></div>
                    <div className='min-w-[40px] h-[40px] rounded-full bg-[#218cff93]'></div>
                    <div className='min-w-[40px] h-[40px] rounded-full bg-[#218cff93]'></div> */}
                </div>
            </div>

            <div className='chatlist__chats px-5 pb-5'>
                <div className='w-full h-auto'>
                    <h2 className='text-white text-xl font-semibold'>Chats</h2>
                </div>
                <div className='w-full h-auto py-2 flex flex-col gap-2'>
                    {conversations.map((conversation: any) => {
                        return (
                            <div className='notification-body__item w-full flex items-center justify-between py-3 cursor-pointer hover:-translate-x-1 transition-all' onClick={() => handleConversationClickBtn(conversation)}>
                                <div className={`min-w-[40px] h-[40px] rounded-full  ${activeConversation.id == conversation.id ? 'border-[3px] border-[#218cff93]' : ''} overflow-hidden`}>
                                    <img src={`${getUser(conversation.users[1])?.photo}`} alt="" className='w-full h-full object-cover' />
                                </div>
                                <div className='h-[40px] grow px-3 '>
                                    <div className='w-full text-base text-white whitespace-nowrap overflow-clip text-ellipsis'>{getUser(conversation.users[1])?.username}</div>
                                    <div className='w-full text-sm text-[#aeaeae9c] whitespace-nowrap overflow-hidden text-ellipsis'>{conversation.messages[conversation.messages.length - 1].text}</div>
                                </div>
                            </div>
                        )
                    })}
                    {/* <div className='notification-body__item w-full flex items-center justify-between py-3 cursor-pointer hover:-translate-x-1 transition-all'>
                        <div className='min-w-[40px] h-[40px] rounded-full bg-[#218cff93]'></div>
                        <div className='h-[40px] grow px-3 '>
                            <div className='w-full text-base text-white whitespace-nowrap overflow-clip text-ellipsis'>Congratulation Flora! 🎉</div>
                            <div className='w-full text-sm text-[#aeaeae9c] whitespace-nowrap overflow-hidden text-ellipsis'>Won the monthly best seller badge</div>
                        </div>
                    </div>
                    <div className='notification-body__item w-full flex items-center justify-between py-3 cursor-pointer hover:-translate-x-1 transition-all'>
                        <div className='min-w-[40px] h-[40px] rounded-full bg-[#218cff93]'></div>
                        <div className='h-[40px] grow px-3 '>
                            <div className='w-full text-base text-white whitespace-nowrap overflow-clip text-ellipsis'>Congratulation Flora! 🎉</div>
                            <div className='w-full text-sm text-[#aeaeae9c] whitespace-nowrap overflow-hidden text-ellipsis'>Won the monthly best seller badge</div>
                        </div>
                    </div>
                    <div className='notification-body__item w-full flex items-center justify-between py-3 cursor-pointer hover:-translate-x-1 transition-all'>
                        <div className='min-w-[40px] h-[40px] rounded-full bg-[#218cff93]'></div>
                        <div className='h-[40px] grow px-3 overflow-hidden '>
                            <div className='w-full text-base text-white whitespace-nowrap overflow-clip text-ellipsis'>Congratulation Flora! 🎉</div>
                            <div className='w-full text-sm text-[#aeaeae9c] whitespace-nowrap overflow-hidden text-ellipsis'>Won the monthly best seller badge sssssssssssssssss</div>
                        </div>
                    </div>
                    <div className='notification-body__item w-full flex items-center justify-between py-3 cursor-pointer hover:-translate-x-1 transition-all'>
                        <div className='min-w-[40px] h-[40px] rounded-full bg-[#218cff93]'></div>
                        <div className='h-[40px] grow px-3 overflow-hidden '>
                            <div className='w-full text-base text-white whitespace-nowrap overflow-clip text-ellipsis'>Congratulation Flora! 🎉</div>
                            <div className='w-full text-sm text-[#aeaeae9c] whitespace-nowrap overflow-hidden text-ellipsis'>Won the monthly best seller badge sssssssssssssssss</div>
                        </div>
                    </div>
                    <div className='notification-body__item w-full flex items-center justify-between py-3 cursor-pointer hover:-translate-x-1 transition-all'>
                        <div className='min-w-[40px] h-[40px] rounded-full bg-[#218cff93]'></div>
                        <div className='h-[40px] grow px-3 overflow-hidden '>
                            <div className='w-full text-base text-white whitespace-nowrap overflow-clip text-ellipsis'>Congratulation Flora! 🎉</div>
                            <div className='w-full text-sm text-[#aeaeae9c] whitespace-nowrap overflow-hidden text-ellipsis'>Won the monthly best seller badge sssssssssssssssss</div>
                        </div>
                    </div>
                    <div className='notification-body__item w-full flex items-center justify-between py-3 cursor-pointer hover:-translate-x-1 transition-all'>
                        <div className='min-w-[40px] h-[40px] rounded-full bg-[#218cff93]'></div>
                        <div className='h-[40px] grow px-3 overflow-hidden '>
                            <div className='w-full text-base text-white whitespace-nowrap overflow-clip text-ellipsis'>Congratulation Flora! 🎉</div>
                            <div className='w-full text-sm text-[#aeaeae9c] whitespace-nowrap overflow-hidden text-ellipsis'>Won the monthly best seller badge sssssssssssssssss</div>
                        </div>
                    </div>
                    <div className='notification-body__item w-full flex items-center justify-between py-3 cursor-pointer hover:-translate-x-1 transition-all'>
                        <div className='min-w-[40px] h-[40px] rounded-full bg-[#218cff93]'></div>
                        <div className='h-[40px] grow px-3 overflow-hidden '>
                            <div className='w-full text-base text-white whitespace-nowrap overflow-clip text-ellipsis'>Congratulation Flora! 🎉</div>
                            <div className='w-full text-sm text-[#aeaeae9c] whitespace-nowrap overflow-hidden text-ellipsis'>Won the monthly best seller badge sssssssssssssssss</div>
                        </div>
                    </div> */}
                </div>
            </div>  
        </div>
    </div>
  )
}

export default ChatList