import { Action } from "redux";


export enum AuthActionType {
    IS_AUTH = 'auth/IS_AUTH',
    LOGIN_USER = 'auth/LOGIN_USER',
    LOGOUT_USER = 'auth/LOGOUT_USER',
}

export interface LoginUserActionInterface extends Action<AuthActionType> {
    type: AuthActionType.LOGIN_USER,
    payload: string
}

export interface LogoutUserActionInterface extends Action<AuthActionType> {
    type: AuthActionType.LOGOUT_USER,
}

export type AuthActions = LoginUserActionInterface | LogoutUserActionInterface