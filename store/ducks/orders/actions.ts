import { OrdersActionsType, SetOrderActionInterface } from "./contracts/actionsType"
import { OrderState } from "./contracts/state"

export const addOrder = (payload: OrderState['items']): SetOrderActionInterface => ({
    type: OrdersActionsType.SET_ORDER,
    payload
})


