import { RootState } from "../../store";

export const selectChatData = (state: RootState) => state.chat

export const selectChatConversations = (state: RootState) => selectChatData(state).conversations

export const selectChatUsers = (state: RootState) => selectChatData(state).users

export const selectChatActiveUser = (state: RootState) => selectChatData(state).activeUser