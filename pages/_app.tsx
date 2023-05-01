import '../styles/globals.css'
import { useEffect, useState, useLayoutEffect } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Layout } from '../layout/Layout'
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from '../store/store'

import ToastList from '../components/toast/ToastList'
import ManagedConfirmationModal from '../components/UI/ConfirmationModal/managet-confirmation-modal'
import MobileMenu from '../components/MobileMenu/MobileMenu';
import Login from './login'

import ManagedModal from '../components/UI/Modal/managet-modal'
import ManagedDrawer from '../components/UI/Drawer/managed-drawer'
import { ManagedUIContext } from '../contexts/ui.context'
import { LoginUser } from '../store/ducks/auth/action';
import { selectUserAuth } from '../store/ducks/auth/selectors'


function App ({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch()
  const isUserAuth = useSelector(selectUserAuth)
  const router = useRouter()

  useLayoutEffect(() => {
    if(localStorage.getItem('pizzaAppUserTocken') === '123456') {
      dispatch(LoginUser('123456'))
      console.log(isUserAuth, 'lay')
      router.push('/')
    } else {
      router.push('/login')
    }
  }, [isUserAuth.isAuth])

  // useEffect(() => {
  //   if(isUserAuth.isAuth){
  //     router.push('/')
  //   } else {
  //     router.push('/login')
  //    }
  //    console.log(isUserAuth, 'eff')

  // }, [isUserAuth.isAuth])

  return (
    <Provider store={store}>
      <ManagedUIContext>
        {
          isUserAuth.isAuth 
          ?
          <Layout> 
            <Component {...pageProps} />
            <ManagedModal/>
            <ManagedConfirmationModal />
            <ManagedDrawer />
            <ToastList />
            <MobileMenu />
          </Layout> 
          :
          <Login />
        }
      </ManagedUIContext>
    </Provider>
  ) 
}

function MyApp({ Component, pageProps }: AppProps) {


  return (
    <Provider store={store}>
      {/* @ts-ignore */}
      <App Component={Component} pageProps={pageProps} />
    </Provider>
  ) 
}

export default MyApp
