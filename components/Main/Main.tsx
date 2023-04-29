import React from 'react'
import Header from '../Header/Header'


function Main({children}: {children?: any} ) {
  return (
    <div className='w-[100%] h-screen py-[30px] px-[30px] lg:px-[50px] bg-[#393C49] overflow-x-scroll'>
        <Header />
        {children}
    </div>
  )
}

export default Main