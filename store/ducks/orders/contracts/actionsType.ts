import { Action } from "redux";
import { LatLngLiteral, OrderType } from "../../../../utils/types";
import { LoadingStatus } from "../../../types";
import { Product } from "../../products/contract/state";
import { OrderStatus } from "./state";

export enum OrdersActionsType {
    SET_ORDER = 'orders/SET_ORDER',
    DELETE_ORDER = 'orders/DELETE_ORDER',
    SET_LOADING_STATE = 'orders/SET_LOADING_STATE',
    SET_ORDER_STATUS = 'orders/SET_ORDER_STATUS',
    ADD_PRODUCT_TO_ORDER = 'orders/ADD_PRODUCT_TO_ORDER',
    DELETE_PRODUCT_FROM_ORDER = 'orders/DELETE_PRODUCT_FROM_ORDER',
    UPDATE_PRODUCT_IN_ORDER = 'orders/UPDATE_PRODUCT_IN_ORDER',
    UPDATE_ORDER_DELIVERY_LOCATION = 'orders/UPDATE_ORDER_DELIVERY_LOCATION',
    UPDATE_CLIENT_PHONE_NUMBER = 'orders/UPDATE_CLIENT_PHONE_NUMBER',
    UPDATE_CLIENT_INITIALS = 'orders/UPDATE_CLIENT_INITIALS',

}

export interface SetOrderActionInterface extends Action<OrdersActionsType>{
    type: OrdersActionsType.SET_ORDER,
    payload: OrderType[]
}

export interface DeleteOrderActionInterface extends Action<OrdersActionsType>{
    type: OrdersActionsType.DELETE_ORDER,
    payload: number
}

export interface SetOrderStatusActionInterface extends Action<OrdersActionsType>{
    type: OrdersActionsType.SET_ORDER_STATUS,
    payload: {
        id: number,
        orderStatus: OrderStatus | string
    }
}

export interface AddProductToOrderActionInterface extends Action<OrdersActionsType>{
    type: OrdersActionsType.ADD_PRODUCT_TO_ORDER,
    payload: {
        id: number,
        product: Product
    }
}

export interface DeleteProductFromOrderActionInterface extends Action<OrdersActionsType>{
    type: OrdersActionsType.DELETE_PRODUCT_FROM_ORDER,
    payload: {
        id: number,
        productId: string
    }
}

export interface UpdateProductInOrderActionInterface extends Action<OrdersActionsType>{
    type: OrdersActionsType.UPDATE_PRODUCT_IN_ORDER,
    payload: {
        id: number,
        product: Product
    }
}

export interface UpdateOrderDeliveryLocationActionInterface extends Action<OrdersActionsType>{
    type: OrdersActionsType.UPDATE_ORDER_DELIVERY_LOCATION,
    payload: {
        id: number,
        delivery: {
            isDelivery: boolean,
            deliveryPlaceTitle: string,
            deliveryCoordinates: LatLngLiteral | undefined,
        },
    }
}

export interface UpdateClientPhoneNumberActionInterface extends Action<OrdersActionsType>{
    type: OrdersActionsType.UPDATE_CLIENT_PHONE_NUMBER,
    payload: {
        id: number,
        phoneNumber: number
    }
}

export interface UpdateClientInitialsActionInterface extends Action<OrdersActionsType>{
    type: OrdersActionsType.UPDATE_CLIENT_INITIALS,
    payload: {
        id: number,
        clientInitials: string
    }
}



export type OrdersActions = SetOrderActionInterface | SetOrderStatusActionInterface | DeleteOrderActionInterface | AddProductToOrderActionInterface | DeleteProductFromOrderActionInterface | UpdateProductInOrderActionInterface | UpdateOrderDeliveryLocationActionInterface | UpdateClientPhoneNumberActionInterface | UpdateClientInitialsActionInterface