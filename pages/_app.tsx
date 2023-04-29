import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider} from '../hooks/useAuth'
import { Layout } from '../layout/Layout'
import { Provider, useSelector } from 'react-redux';


import ManagedModal from '../components/UI/Modal/managet-modal'
import ManagedDrawer from '../components/UI/Drawer/managed-drawer'

import { ManagedUIContext } from '../contexts/ui.context'
import { store } from '../store/store'
import ToastList from '../components/toast/ToastList'
import ManagedConfirmationModal from '../components/UI/ConfirmationModal/managet-confirmation-modal'
import Login from './login'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { selectUserAuth } from '../store/ducks/auth/selectors'

function App ({ Component, pageProps }: AppProps) {
  const isUserAuth = useSelector(selectUserAuth)
  const router = useRouter()

  useEffect(() => {
     if(isUserAuth.isAuth){
      router.push('/')
    } else {
      router.push('/login')
     }

  }, [isUserAuth])

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
          </Layout> 
          :
          <Login />
        }
        {/* <Layout> 
          <Component {...pageProps} />
          <ManagedModal/>
          <ManagedConfirmationModal />
          <ManagedDrawer />
          <ToastList />
        </Layout>  */}
      </ManagedUIContext>
    </Provider>
  ) 
}

function MyApp({ Component, pageProps }: AppProps) {


  return (
    <Provider store={store}>
      <App Component={Component} pageProps={pageProps} />
    </Provider>
  ) 
}

export default MyApp






// function App ({ Component, pageProps }: AppProps) {
//   const isUserAuth = useSelector(selectUserAuth)
//   const [isAuth, setIsAuth] = useState(isUserAuth)
//   const router = useRouter()
//   let userToken
//   useEffect(() => {
//      userToken = localStorage.getItem('userToken')
//      if(isUserAuth){
//       router.push('/')
//     } else {
//       router.push('/login')
//      }

//   }, [isUserAuth])

//   return (
//     <Provider store={store}>
//       <ManagedUIContext>
//         {
//           isUserAuth 
//           ?
//           <Layout> 
//             <Component {...pageProps} />
//             <ManagedModal/>
//             <ManagedConfirmationModal />
//             <ManagedDrawer />
//             <ToastList />
//           </Layout> 
//           :
//           <Login />
//         }
//       </ManagedUIContext>
//     </Provider>
//   ) 
// }