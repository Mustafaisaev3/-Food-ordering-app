import React, {useState} from 'react'
import EmojiPicker from 'emoji-picker-react';
import { BsTelephone, BsCameraVideo, BsSearch, BsLink45Deg } from 'react-icons/bs'
import { BiMicrophone } from 'react-icons/bi'
import { GrEmoji } from 'react-icons/gr'
import Input from '../../UI/Input'

const ChatContent = () => {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false)
    const [messageText, setMessageText] = useState('')
    const [messages, setMessages] = useState([])

  const handleEmojiPickerClick = (e) => {
    console.log(e)
    setShowEmojiPicker(!showEmojiPicker)
  }
  const handleEmojiClick = (emojiObj, event) => {
    setMessageText(prevText => prevText + emojiObj.emoji)
    setShowEmojiPicker(!showEmojiPicker)
  }

  const handleSendMessage = () => {
    setMessages(prev => [...prev, messageText])
    setMessageText('')
  }

  return (
    <div className='w-full h-full flex flex-col'>
        <div className='chatcontent__header w-full h-[80px] px-5 py-3 flex items-center border-b-[0.3px] border-[#ffffff33]'>
            <div className='notification-header w-auto flex items-center '>
                <div className='w-[50px] h-[50px] rounded-full bg-[#218cff93] overflow-hidden'>
                    {/* <img src={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.i9HN8v7fLZZ90KSXeu6oPgHaHa%26pid%3DApi&f=1&ipt=483a45f40a9a7fcdd697cbc4c73bdf8be5220f42850ed1b069f029b9d4f3a59e&ipo=images'} /> */}
                    {/* <img src={'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png'} /> */}
                    <img src={'data:image/jpeg;base64,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'} />
                </div>
                <div className='px-4'>
                    <div className='text-white'>Test User</div>
                    <div className='text-[#aeaeae9c]'>admin</div>
                </div>
            </div>
            <div className='w-auto h-full flex items-center justify-center gap-4'>
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
            <div className=''>
                <div className='cursor-pointer p-2 rounded-full hover:bg-[#2d3745ae]'>
                    <BsSearch size={20} color='white' />
                </div>
            </div>
        </div>

        <div className='chatcontent__content w-full grow px-5 flex flex-col overflow-hidden'>
            {/* Chat messages */}
            <div className='grow overflow-hidden'>
                <div className='w-full h-[100%] py-3 overflow-y-scroll'>
                    <div className='flex pb-[40px]'>
                        <div className='min-w-[50px] h-[50px] rounded-full bg-[#218cff93] mr-2'></div>
                        <div className='flex flex-col'>
                            <p className='bg-[#2D303E] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2'>
                                Hey John, I am looking for the best admin template. Could you please help me to find it out?
                            </p>
                            <p className='bg-[#2D303E] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2'>
                                Hey John, I am looking for the best admin template. Could you please help me to find it out?
                                Hey John, I am looking for the best admin template. me to find it out?
                            </p>
                        </div>
                    </div>
                    <div className='flex pb-[40px]'>
                        <div className='flex flex-col'>
                            <p className='bg-[#2D303E] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2'>
                                Hey John, I am looking for the best admin template. Could you please help me to find it out?
                            </p>
                            <p className='bg-[#2D303E] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2'>
                                Hey John, I am looking for the best admin template. Could you please help me to find it out?
                                Hey John, I am looking for the best admin template. me to find it out?
                            </p>
                        </div>
                        <div className='min-w-[50px] h-[50px] rounded-full bg-[#218cff93] ml-2'></div>
                    </div>
                    <div className='flex pb-[40px]'>
                        <div className='min-w-[50px] h-[50px] rounded-full bg-[#218cff93] mr-2'></div>
                        <div className='flex flex-col'>
                            <p className='bg-[#2D303E] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2'>
                                Hey John, I am looking for the best admin template. Could you please help me to find it out?
                            </p>
                            <p className='bg-[#2D303E] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2'>
                                Hey John, I am looking for the best admin template. Could you please help me to find it out?
                                Hey John, I am looking for the best admin template. me to find it out?
                            </p>
                        </div>
                    </div>
                    <div className='flex pb-[40px]'>
                        <div className='flex flex-col'>
                            <p className='bg-[#2D303E] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2'>
                                Hey John, I am looking for the best admin template. Could you please help me to find it out?
                            </p>
                            <p className='bg-[#2D303E] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2'>
                                Hey John, I am looking for the best admin template. Could you please help me to find it out?
                                Hey John, I am looking for the best admin template. me to find it out?
                            </p>
                        </div>
                        <div className='min-w-[50px] h-[50px] rounded-full bg-[#218cff93] ml-2'></div>
                    </div>
                    <div className='flex pb-[40px]'>
                        <div className='min-w-[50px] h-[50px] rounded-full bg-[#218cff93] mr-2'></div>
                        <div className='flex flex-col'>
                            <p className='bg-[#2D303E] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2'>
                                Hey John, I am looking for the best admin template. Could you please help me to find it out?
                            </p>
                            <p className='bg-[#2D303E] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2'>
                                Hey John, I am looking for the best admin template. Could you please help me to find it out?
                                Hey John, I am looking for the best admin template. me to find it out?
                            </p>
                        </div>
                    </div>
                    <div className='flex pb-[40px]'>
                        <div className='flex flex-col'>
                            <p className='bg-[#2D303E] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2'>
                                Hey John, I am looking for the best admin template. Could you please help me to find it out?
                            </p>
                            <p className='bg-[#2D303E] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2'>
                                Hey John, I am looking for the best admin template. Could you please help me to find it out?
                                Hey John, I am looking for the best admin template. me to find it out?
                            </p>
                        </div>
                        <div className='min-w-[50px] h-[50px] rounded-full bg-[#218cff93] ml-2'></div>
                    </div>
                    <div className='flex pb-[40px]'>
                        <div className='min-w-[50px] h-[50px] rounded-full bg-[#218cff93] mr-2'></div>
                        <div className='flex flex-col'>
                            <p className='bg-[#2D303E] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2'>
                                Hey John, I am looking for the best admin template. Could you please help me to find it out?
                            </p>
                            <p className='bg-[#2D303E] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2'>
                                Hey John, I am looking for the best admin template. Could you please help me to find it out?
                                Hey John, I am looking for the best admin template. me to find it out?
                            </p>
                        </div>
                    </div>
                    <div className='flex pb-[40px]'>
                        <div className='flex flex-col'>
                            <p className='bg-[#2D303E] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2'>
                                Hey John, I am looking for the best admin template. Could you please help me to find it out?
                            </p>
                            <p className='bg-[#2D303E] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2'>
                                Hey John, I am looking for the best admin template. Could you please help me to find it out?
                                Hey John, I am looking for the best admin template. me to find it out?
                            </p>
                            {messages.map(msg => {
                                return  <p className='bg-[#2D303E] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2'>
                                           {msg}
                                        </p>
                            })}
                        </div>
                        <div className='min-w-[50px] h-[50px] rounded-full bg-[#218cff93] ml-2'></div>
                    </div>

                </div>
            </div>

            <div className='w-full h-auto p-3 mx-auto'>
                <div className='w-full h-[60px] flex items-center justify-between rounded-md bg-[#2D303E]'>
                    <div className='grow'>
                        <Input className='w-full m-0' onChange={setMessageText} value={messageText} placeholder='Type your message...' />
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