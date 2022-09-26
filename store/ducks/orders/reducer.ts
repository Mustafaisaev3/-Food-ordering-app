import { LoadingStatus } from "../../types"
// import { LoadingState } from "../../types"
import { OrdersActionsType } from "./contracts/actionsType"
import { OrdersActions } from "./contracts/actionsType"
import { OrderState } from "./contracts/state"

const initialUsersState: OrderState = {
    items: [],
    status: LoadingStatus.NEVER
}

export const orderReducer = (state = initialUsersState , action: OrdersActions) => {

    switch(action.type) {
        case OrdersActionsType.SET_ORDER:
            return {
                ...state,
                items: [...state.items, action.payload],
                status: LoadingStatus.LOADED
            }
            break
        default:
            return state
            break

    }

}


