import { OrdersActionsType, SetOrderActionInterface, SetOrderStatusActionInterface } from "./contracts/actionsType"
import { OrderState, OrderStatus } from "./contracts/state"

export const addOrder = (payload: OrderState['items']): SetOrderActionInterface => ({
    type: OrdersActionsType.SET_ORDER,
    payload
})


export const SetOrderStatus = (payload: {id: number, orderStatus: OrderStatus}): SetOrderStatusActionInterface => ({
    type: OrdersActionsType.SET_ORDER_STATUS,
    payload
})