import React, {useEffect, useLayoutEffect, useRef, useState} from 'react'
import EmojiPicker from 'emoji-picker-react';
import { BsTelephone, BsCameraVideo, BsSearch, BsLink45Deg } from 'react-icons/bs'
import { BiMicrophone } from 'react-icons/bi'
import { GrEmoji } from 'react-icons/gr'
import Input from '../../UI/Input'
import { getUser } from '../../../data/chat/chat';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../../../store/ducks/chat/actions';

const ChatContent = ({ themeColor, activeConversation, activeUser }: any) => {
  const companion = getUser(activeConversation.users.filter((userID: any) => userID != activeUser.id)[0])
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [messageText, setMessageText] = useState('')
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const handleEmojiPickerClick = (e: any) => {
    console.log(e)
    setShowEmojiPicker(!showEmojiPicker)
  }
  const handleEmojiClick = (emojiObj: any, event: any) => {
    setMessageText(prevText => prevText + emojiObj.emoji)
    setShowEmojiPicker(!showEmojiPicker)
  }

  const handleSendMessage = () => {
    dispatch(sendMessage({message: {text: messageText, sender: activeUser.id}, conversationId: activeConversation.id }))
    setMessageText('')
  }

  useLayoutEffect(() => {
    scrollContainerRef.current?.scrollTo(0, scrollContainerRef.current.scrollHeight)
  })

  return (
    <div className='w-full h-full flex flex-col'>
        <div className='chatcontent__header w-full h-[80px] px-5 py-3 flex items-center border-b-[0.3px] border-[#ffffff33]'>
            <div className='notification-header w-auto flex items-center '>
                <div className='w-[50px] h-[50px] rounded-full bg-[#218cff93] overflow-hidden'>
                    <img className='w-full h-full object-cover' src={`${companion.photo}`} />
                </div>
                <div className='px-4'>
                    <div className='text-white'>{companion.username}</div>
                    <div className='text-[#aeaeae9c]'>admin</div>
                </div>
            </div>
            <div className='w-auto h-full flex flex-1 items-center justify-end gap-4'>
                <div className='cursor-pointer p-3 rounded-full hover:bg-[#2d3745ae]'>
                    <BsTelephone size={20} color='white' />
                </div>
                <div className='cursor-pointer p-3 rounded-full hover:bg-[#2d3745ae]'>
                    <BsCameraVideo size={20} color='white' />
                </div>
                <div className='cursor-pointer p-3 rounded-full hover:bg-[#2d3745ae]'>
                    <BsSearch size={20} color='white' />
                </div>
            </div>
        </div>

        <div className='chatcontent__content w-full grow px-5 flex flex-col overflow-hidden'>
            {/* Chat messages */}
            <div className='grow overflow-hidden'>
                <div ref={scrollContainerRef} className='w-full h-[100%] py-3 overflow-y-scroll'>
                    <div className='w-full h-full flex flex-col pr-3'>
                        {activeConversation 
                            ?
                            activeConversation.messages.map((msg: any) => {
                                if(msg.sender == companion.id){
                                    return (
                                        <div className='flex pb-[40px] justify-start'>
                                            <div className='min-w-[50px] w-[50px] h-[50px] mr-2 rounded-full bg-[#218cff93] overflow-hidden'>
                                                <img className='w-full h-full object-cover' src={`${companion.photo}`} />
                                            </div>
                                            <div className='flex flex-col'>
                                                <p style={{backgroundColor: themeColor}} className={`bg-[${themeColor}] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2`}>
                                                {msg.text}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div className='flex pb-[40px] justify-end'>
                                            <div className='flex flex-col'>
                                                <p style={{backgroundColor: themeColor}} className={`bg-[${themeColor}] rounded-md rounded-tr-none text-white text-sm py-3 px-4 mb-2`}>
                                                    {msg.text}
                                                </p>
                                            </div>
                                            <div className='min-w-[50px] w-[50px] h-[50px] ml-2 rounded-full bg-[#218cff93] overflow-hidden'>
                                                <img className='w-full h-full object-cover' src={`${activeUser.photo}`} />
                                            </div>
                                        </div>
                                    )
                                }
                            }): <></>}
                    </div>        
                </div>
            </div>

            <div className='w-full h-auto mx-auto py-3'>
                <div className='w-full h-[60px] flex items-center justify-between rounded-md bg-[#2D303E] p-3'>
                    <div className='grow'>
                        <Input classes='w-full mt-0' onChange={(e: any) => setMessageText(e.target.value)} value={messageText} placeholder='Type your message...' />
                    </div>
                    <div className='w-auto flex'>
                        <div className='cursor-pointer p-2 rounded-full hover:bg-[#2d3745ae]'>
                            <BiMicrophone size={20} color='white' />
                        </div>
                        <div className='cursor-pointer p-2 rounded-full hover:bg-[#2d3745ae]'>
                            <BsLink45Deg size={20} color='white' />
                        </div>
                        <div className='cursor-pointer mr-2 p-2 rounded-full hover:bg-[#2d3745ae] relative'>
                            <GrEmoji size={20} color='white' onClick={(e) => handleEmojiPickerClick(e)} />
                            {showEmojiPicker && <div className='absolute bottom-0 right-0'>
                                                    <EmojiPicker onEmojiClick={handleEmojiClick} />
                                                </div>
                            }
                        </div>
                        <div className='cursor-pointer py-1 px-4 rounded-md bg-[#EA6969] hover:bg-[#eb7c7c] text-white' onClick={handleSendMessage}>
                            SEND
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatContent