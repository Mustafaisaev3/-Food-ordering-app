import { combineReducers } from "redux";
import { authReducer } from "./ducks/auth/reducer";
import { cartReducer } from "./ducks/cart/reducer";
import { chatReducer } from "./ducks/chat/reducer";
import { departmentReducer } from "./ducks/departmens/reducer";

import { orderReducer } from "./ducks/orders/reducer";
import { productsReducer } from "./ducks/products/reducer";


export const rootReducer = combineReducers({
    orders: orderReducer,
    cart: cartReducer,
    products: productsReducer,
    departments: departmentReducer,
    auth: authReducer,
    chat: chatReducer
})