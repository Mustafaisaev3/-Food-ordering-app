import React, {useState} from 'react'
import EmojiPicker from 'emoji-picker-react';
import { BsTelephone, BsCameraVideo, BsSearch, BsLink45Deg } from 'react-icons/bs'
import { BiMicrophone } from 'react-icons/bi'
import { GrEmoji } from 'react-icons/gr'
import Input from '../../UI/Input'
import { usersData } from '../../../data/chat/chat';

const ChatContent = ({ themeColor, activeConversation }: any) => {
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
                    <img className='w-full h-full object-cover' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjxX4jQy8LJC6WJjW18kxPMKtY9sJ7GIqTY-KPWmJl05GI9TR5AENBjawujgnSwMOCUCE&usqp=CAU'} />
                </div>
                <div className='px-4'>
                    <div className='text-white'>Test User</div>
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
            {/* <div className=''>
                <div className='cursor-pointer p-2 rounded-full hover:bg-[#2d3745ae]'>
                    <BsSearch size={20} color='white' />
                </div>
            </div> */}
        </div>

        <div className='chatcontent__content w-full grow px-5 flex flex-col overflow-hidden'>
            {/* Chat messages */}
            <div className='grow overflow-hidden'>
                <div className='w-full h-[100%] py-3 overflow-y-scroll'>
                    <div className='w-full h-full flex flex-col pr-3'>
                        <div className='flex pb-[40px]'>
                            <div className='min-w-[50px] w-[50px] h-[50px] mr-2 rounded-full bg-[#218cff93] overflow-hidden'>
                                {/* <img src={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.i9HN8v7fLZZ90KSXeu6oPgHaHa%26pid%3DApi&f=1&ipt=483a45f40a9a7fcdd697cbc4c73bdf8be5220f42850ed1b069f029b9d4f3a59e&ipo=images'} /> */}
                                {/* <img src={'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png'} /> */}
                                <img className='w-full h-full object-cover' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjxX4jQy8LJC6WJjW18kxPMKtY9sJ7GIqTY-KPWmJl05GI9TR5AENBjawujgnSwMOCUCE&usqp=CAU'} />
                            </div>
                            <div className='flex flex-col'>
                                <p className={`bg-[${themeColor}] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2`}>
                                    Hey John, I am looking for the best admin template. Could you please help me to find it out?
                                </p>
                                <p className={`bg-[${themeColor}] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2`}>
                                    Hey John, I am looking for the best admin template. Could you please help me to find it out?
                                    Hey John, I am looking for the best admin template. me to find it out?
                                </p>
                            </div>
                        </div>
                        <div className='flex pb-[40px]'>
                            <div className='flex flex-col'>
                                <p className={`bg-[${themeColor}] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2`}>
                                    Hey John, I am looking for the best admin template. Could you please help me to find it out?
                                </p>
                                <p className={`bg-[${themeColor}] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2`}>
                                    Hey John, I am looking for the best admin template. Could you please help me to find it out?
                                    Hey John, I am looking for the best admin template. me to find it out?
                                </p>
                            </div>
                            <div className='min-w-[50px] h-[50px] rounded-full bg-[#218cff93] ml-2'></div>
                        </div>
                        <div className='flex pb-[40px]'>
                            <div className='min-w-[50px] h-[50px] rounded-full bg-[#218cff93] mr-2'></div>
                            <div className='flex flex-col'>
                                <p className={`bg-[${themeColor}] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2`}>
                                    Hey John, I am looking for the best admin template. Could you please help me to find it out?
                                </p>
                                <p className={`bg-[${themeColor}] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2`}>
                                    Hey John, I am looking for the best admin template. Could you please help me to find it out?
                                    Hey John, I am looking for the best admin template. me to find it out?
                                </p>
                            </div>
                        </div>
                        <div className='flex pb-[40px]'>
                            <div className='flex flex-col'>
                                <p className={`bg-[${themeColor}] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2`}>
                                    Hey John, I am looking for the best admin template. Could you please help me to find it out?
                                </p>
                                <p className={`bg-[${themeColor}] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2`}>
                                    Hey John, I am looking for the best admin template. Could you please help me to find it out?
                                    Hey John, I am looking for the best admin template. me to find it out?
                                </p>
                            </div>
                            <div className='min-w-[50px] h-[50px] rounded-full bg-[#218cff93] ml-2'></div>
                        </div>
                        <div className='flex pb-[40px]'>
                            <div className='min-w-[50px] h-[50px] rounded-full bg-[#218cff93] mr-2'></div>
                            <div className='flex flex-col'>
                                <p className={`bg-[${themeColor}] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2`}>
                                    Hey John, I am looking for the best admin template. Could you please help me to find it out?
                                </p>
                                <p className={`bg-[${themeColor}] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2`}>
                                    Hey John, I am looking for the best admin template. Could you please help me to find it out?
                                    Hey John, I am looking for the best admin template. me to find it out?
                                </p>
                            </div>
                        </div>
                        <div className='flex pb-[40px]'>
                            <div className='flex flex-col'>
                                <p className={`bg-[${themeColor}] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2`}>
                                    Hey John, I am looking for the best admin template. Could you please help me to find it out?
                                </p>
                                <p className={`bg-[${themeColor}] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2`}>
                                    Hey John, I am looking for the best admin template. Could you please help me to find it out?
                                    Hey John, I am looking for the best admin template. me to find it out?
                                </p>
                            </div>
                            <div className='min-w-[50px] h-[50px] rounded-full bg-[#218cff93] ml-2'></div>
                        </div>
                        <div className='flex pb-[40px]'>
                            <div className='min-w-[50px] h-[50px] rounded-full bg-[#218cff93] mr-2'></div>
                            <div className='flex flex-col'>
                                <p className={`bg-[${themeColor}] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2`}>
                                    Hey John, I am looking for the best admin template. Could you please help me to find it out?
                                </p>
                                <p className={`bg-[${themeColor}] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2`}>
                                    Hey John, I am looking for the best admin template. Could you please help me to find it out?
                                    Hey John, I am looking for the best admin template. me to find it out?
                                </p>
                            </div>
                        </div>
                        <div className='flex pb-[40px]'>
                            <div className='flex flex-col'>
                                <p className={`bg-[${themeColor}] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2`}>
                                    Hey John, I am looking for the best admin template. Could you please help me to find it out?
                                </p>
                                <p className={`bg-[${themeColor}] rounded-md rounded-tl-none text-white text-sm py-3 px-4 mb-2`}>
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
            </div>

            <div className='w-full h-auto mx-auto py-3'>
                <div className='w-full h-[60px] flex items-center justify-between rounded-md bg-[#2D303E] p-3'>
                    <div className='grow'>
                        <Input classes='w-full mt-0' onChange={(e) => setMessageText(e.target.value)} value={messageText} placeholder='Type your message...' />
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