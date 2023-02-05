import { ChatActionsType, SendMessageActionInterface, sendMsgPayloadType } from "./contracts/actionType";


export const sendMessage = (payload: sendMsgPayloadType): SendMessageActionInterface => ({
    type: ChatActionsType.SEND_MESSAGE,
    payload
})