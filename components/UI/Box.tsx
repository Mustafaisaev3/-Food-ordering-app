import React from 'react'

const Box = ({children}: any) => {
  return (
    <div className='w-full h-full py-[28px]'>
        {children}
    </div>
  )
}

export default Box