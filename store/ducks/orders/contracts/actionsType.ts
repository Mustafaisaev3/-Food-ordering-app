import { Action } from "redux";
import { LoadingStatus } from "../../../types";
import { Order, OrderStatus } from "./state";

export enum OrdersActionsType {
    SET_ORDER = 'orders/SET_ORDER',
    DELETE_ORDER = 'orders/DELETE_ORDER',
    SET_LOADING_STATE = 'orders/SET_LOADING_STATE',
    SET_ORDER_STATUS = 'orders/SET_ORDER_STATUS',

}

export interface SetOrderActionInterface extends Action<OrdersActionsType>{
    type: OrdersActionsType.SET_ORDER,
    payload: Order[]
}

export interface SetOrderStatusActionInterface extends Action<OrdersActionsType>{
    type: OrdersActionsType.SET_ORDER_STATUS,
    payload: {
        id: string,
        orderStatus: OrderStatus
    }
}

// export interface FetchSignUpActionInterface extends Action<UserActionsType>{
//     type: UserActionsType.FETCH_SIGN_UP,
//     payload: RegisterFormProps
// }


// export interface SetUserDateActionInterface extends Action<UserActionsType>{
//     type: UserActionsType.SET_USER_DATA,
//     payload: User | undefined
// }

// export interface SetUserLoadingStateActionInterface extends Action<UserActionsType>{
//     type: UserActionsType.SET_LOADING_STATE,
//     payload: LoadingState
// }

export type OrdersActions = SetOrderActionInterface | SetOrderStatusActionInterface