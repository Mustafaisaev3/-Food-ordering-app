import { createStore, compose, applyMiddleware } from "redux"

import { rootReducer } from "./rootReducer"
// import createSagaMiddleware from '@redux-saga/core'

// import { rootSaga } from "./saga"
// import { TweetsState } from "./ducks/tweets/contracts/state"
// import { TagsState } from "./ducks/tags/contracts/state"
// import { UserState } from "./ducks/user/contracts/state"
// import { UsersState } from "./ducks/users/contracts/state"
import { OrderState } from "./ducks/orders/contracts/state"
import { CartState } from "./ducks/cart/contracts/state"
import { ProductsState } from "./ducks/products/contract/state"
import { DepartmentsState } from "./ducks/departmens/contracts/state"



export interface RootState {
    orders: OrderState,
    cart: CartState, 
    products: ProductsState,
    departments: DepartmentsState
}

export const store = createStore(rootReducer)
