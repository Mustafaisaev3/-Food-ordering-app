import { Action } from "redux"
import { UserType } from "../../../../utils/types"


export enum UserActionsType {
    UPDATE_USER_DATA = 'user/UPDATE_USER_DATA',
}

export interface UpdateUserActionInterface extends Action<UserActionsType> {
    type: UserActionsType.UPDATE_USER_DATA,
    user: UserType,
}




export type UserActions = UpdateUserActionInterface