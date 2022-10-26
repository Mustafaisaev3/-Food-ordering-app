import { AuthActions, AuthActionType } from "./contracts/actionType";
import { AuthState } from "./contracts/state";



const initialState: AuthState = {
    token: '',
    isAuth: false
}

export const authReducer = (state = initialState, action: AuthActions) => {
    switch (action.type){
        case AuthActionType.LOGIN_USER:
            return {
                ...state,
                token: action.payload,
                isAuth: true
            }
        case AuthActionType.LOGOUT_USER:
            return {
                ...state,
                token: '',
                isAuth: false
            }

        default:
            return state
    }
}