import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider} from '../hooks/useAuth'
import { Layout } from '../layout/Layout'
import { createStoreHook } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import { Provider, useSelector } from 'react-redux';

import { CategoryReducer } from '../store/reducers/SelectedCategoryReducer'
import { CartReducer } from '../store/reducers/cartReducers'

import ManagedModal from '../components/UI/Modal/managet-modal'
import ManagedDrawer from '../components/UI/Drawer/managed-drawer'

import { ManagedUIContext } from '../contexts/ui.context'
import { store } from '../store/store'


// const reducers = combineReducers({
//   category: CategoryReducer,
//   cart: CartReducer,
//   orders: OrderReducer
// })
// const store = createStore(reducers)


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ManagedUIContext>
        <Layout>
          <Component {...pageProps} />
          <ManagedModal/>
          <ManagedDrawer />
        </Layout>
      </ManagedUIContext>
    </Provider>
  ) 
}

export default MyApp

