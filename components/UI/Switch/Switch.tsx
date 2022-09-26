import React from 'react'

type SwitchType = {
    switchStatus: boolean,
    setSwicthSatus: () => any
}

const Switch = ({switchStatus, setSwicthSatus}: SwitchType) => {
  return (
    <div className='pt-20px'>
        <div className={`w-[50px] h-[25px] rounded-[40px] bg-[#bdbdbd] flex items-center transition-all duration-300 p-[7px] cursor-pointer ${switchStatus ? 'bg-[#17ff17] justify-end' : 'bg-[#bdbdbd] justify-start'}`} onClick={() => setSwicthSatus(!switchStatus)}>
            <div className='w-[15px] h-[15px] rounded-full bg-white transition-all duration-300'></div>
        </div>
    </div>
  )
}

export default Switch