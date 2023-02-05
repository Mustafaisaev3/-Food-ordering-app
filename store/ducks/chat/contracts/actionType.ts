import { Action } from "redux";


export enum ChatActionsType {
    SEND_MESSAGE = 'chat/SEND_MESSAGE'
}

export type msgType = {
    text: string,
    sender: number,
}

export type sendMsgPayloadType = {
    message: msgType,
        conversationId: number
}

export interface SendMessageActionInterface extends Action<ChatActionsType> {
    type: ChatActionsType.SEND_MESSAGE,
    payload: sendMsgPayloadType,
}

export type ChatActions = SendMessageActionInterface