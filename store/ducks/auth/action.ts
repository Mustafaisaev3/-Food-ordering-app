import { LoginUserActionInterface, LogoutUserActionInterface, AuthActionType } from "./contracts/actionType";


export const LoginUser = (payload: string): LoginUserActionInterface => ({
    type: AuthActionType.LOGIN_USER,
    payload
})

export const LogoutUser = (): LogoutUserActionInterface => ({
    type: AuthActionType.LOGOUT_USER,
})