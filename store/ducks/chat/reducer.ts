import { Conversations, usersData } from "../../../data/chat/chat"
import { ChatActionsType } from "./contracts/actionType"
import { ChatState } from "./contracts/state"

const initialState: ChatState = {
    conversations: Conversations,
    users: usersData,
    activeUser: usersData[0]
}

export const chatReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case ChatActionsType.SEND_MESSAGE:
            let filteredConversationArray = state.conversations.filter((conv: any) => {
                return conv.id !== action.payload.conversationId
            })
            let targetConversation = state.conversations.filter((conv: any) => {
                return conv.id === action.payload.conversationId
            })
            // const targetConversationIndex = state.conversations.findIndex((conv: any) => {
            //     return conv.id === action.payload.conversationId
            // })
            targetConversation[0].messages.push(action.payload.message)

            filteredConversationArray.unshift(targetConversation[0]) 

            console.log(filteredConversationArray)
            return {
                ...state,
                conversations: [...filteredConversationArray]
            }
        default:
            return state
    }
}