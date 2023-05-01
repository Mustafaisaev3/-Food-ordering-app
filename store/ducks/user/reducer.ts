import { LoadingStatus } from "../../types";
import { UserActions, UserActionsType } from "./contracts/actionsType";
import { UserState } from "./contracts/state";

const initialState: UserState = {
    user: {
        userName: 'USER',
        bio: 'Some Bio data',
        email: 'user@gmail.com',
        company: 'Pizza Company',
        first_name: 'User',
        last_name: 'Testovic',
        address: 'Ukraine',
        city: 'Melitopol',
        postal_code: '',
        country: 'Ukraine',
        about_me: 'It is me)',
        password: 'test123',
        website: 'user.com',
    },
    status: LoadingStatus.NEVER
}

export const userReducer = (state = initialState, action: UserActions) => {

    switch(action.type) {
        case UserActionsType.UPDATE_USER_DATA:    
            return {...state, user: {...action.user}}

        default:
            return state
            break
    }
}