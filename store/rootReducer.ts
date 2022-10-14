import { combineReducers } from "redux";
import { cartReducer } from "./ducks/cart/reducer";

import { orderReducer } from "./ducks/orders/reducer";
import { productsReducer } from "./ducks/products/reducer";


export const rootReducer = combineReducers({
    orders: orderReducer,
    cart: cartReducer,
    products: productsReducer
})