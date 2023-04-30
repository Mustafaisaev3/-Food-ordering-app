import React, {useState} from 'react'


const Counter = ({onIncrease, onDecrease, count}: any) => {

  return (
    <div className="flex items-center h-[40px] sm:h-[40px] md:h-[50px] lg:h-[60px] bg-[#252836] border-[#252836] rounded-md">
        <div className="w-[80px] text-center text-white text-[30px] cursor-pointer" onClick={() => onDecrease()}>-</div>
        <input className="w-[130px] text-center text-white bg-[#393C49] text-[20px] sm:text-[20px] md:text-[25px] lg:text-[30px] p-[1px]" value={count} placeholder={'1'}/>
        <div className="w-[80px] text-center text-white text-[30px] cursor-pointer" onClick={() => onIncrease()}>+</div>
    </div>
  )
}

export default Counter