import React from 'react'
import Header from '../Header/Header'


function Main({children}: {children?: any} ) {
  return (
    <div className='w-[100%] h-screen p-[24px] bg-[#393C49] overflow-x-scroll'>
        <Header />
        {children}
    </div>
  )
}

export default Main