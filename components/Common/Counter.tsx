import React, {useState} from 'react'


const Counter = ({onIncrease, onDecrease, count}) => {

  return (
    <div className="flex items-center h-[60px] bg-[#252836] border-[#252836] rounded-md">
        <div className="w-[80px] text-center text-white text-[30px] cursor-pointer" onClick={() => onDecrease()}>-</div>
        <input className="w-[130px] text-center text-white bg-[#393C49] text-[30px] p-[1px]" value={count} placeholder={'1'}/>
        <div className="w-[80px] text-center text-white text-[30px] cursor-pointer" onClick={() => onIncrease()}>+</div>
    </div>
  )
}

export default Counter