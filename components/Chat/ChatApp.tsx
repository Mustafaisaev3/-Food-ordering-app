import React from 'react'
import ChatContent from './ChatContent/ChatContent'
import ChatList from './ChatList/ChatList'

const ChatApp = () => {
  return (
    <div className='w-full h-[700px] flex my-[50px] rounded-md bg-[#252836]'>
        <ChatList />
        <ChatContent />
    </div>
  )
}

export default ChatApp