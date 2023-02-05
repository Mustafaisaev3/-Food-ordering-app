import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectChatActiveUser, selectChatConversations, selectChatUsers } from '../../store/ducks/chat/selectors'
import ChatContent from './ChatContent/ChatContent'
import ChatList from './ChatList/ChatList'
import ChatUserInfo from './ChatUserInfo/ChatUserInfo'

const ChatApp = () => {
  const chatUsers = useSelector(selectChatUsers)
  const chatConversations = useSelector(selectChatConversations)
  const activeUser = useSelector(selectChatActiveUser) 
  const [activeConversation, setActiveConversation] = useState(chatConversations[0])
  const [themeColor, setThemeColor] = useState('#2D303E')

  return (
    <div className='w-full h-[700px] flex my-[50px] rounded-md bg-[#252836]'>
        <ChatList activeUser={activeUser} users={chatUsers} conversations={chatConversations} activeConversation={activeConversation} setActiveConversation={setActiveConversation} />
        <ChatContent activeUser={activeUser} themeColor={themeColor} activeConversation={activeConversation} />
        <ChatUserInfo activeUser={activeUser} themeColor={themeColor} setThemeColor={setThemeColor} />
    </div>
  )
}

export default ChatApp