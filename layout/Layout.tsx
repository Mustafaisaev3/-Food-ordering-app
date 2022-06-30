import React, { FunctionComponent } from 'react'
import {LayoutProps} from './Layout.props'
import Head from 'next/head'
import Sidebar from '../components/Sidebar/Sidebar'
import Main from '../components/Main/Main'


export const Layout = ({children}: LayoutProps): JSX.Element => {
  return (
    <div className='relative h-screen lg:h-[100vh]'>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='flex bg-[#393C49]'>
            <Sidebar />
            <Main>
                {children}
            </Main>
        </div>
    </div>
  )
}



export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        )
    }
}