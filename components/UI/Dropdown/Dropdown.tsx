import React, { useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion'
import {IoMdArrowDropdown} from 'react-icons/io'

type DropdownPorps = {
    title: string,
    items: string[]
}

function Dropdown({title, items}: DropdownPorps) {
  const [isActive, setActive] = useState(false)

  const dropRef = useRef()

  useEffect(() => {
    document.addEventListener('mousedown', (e) => {
        let node = dropRef.current! as any 
        if(!node.contains(e.target)){
            setActive(false)
        } else {
            return
        }
    })   
  })
  return (
    <div className='w-[auto] h-[auto] relative' ref={dropRef}>
        <div className='w-[100%] p-[10px] rounded-lg cursor-pointer text-white bg-[#252836] flex justify-between items-center' onClick={() => setActive(!isActive)}>{title} <motion.span className='ml-[10px]' animate={isActive ? {rotate: -180} : {rotate: 0}}><IoMdArrowDropdown /></motion.span></div> 
        {isActive && <motion.div initial={{height: 0}} animate={{ height: 100}}  className="dropdown_container w-[100%] p-[10px] rounded-lg cursor-pointer bg-white absolute left-0 top-[110%] z-30 overflow-hidden">
            {
                items.map((i) => {
                    return <div className="dropdown_item">{i}</div>
                })
            }
        </motion.div>
        }
        
    </div>
  )
}

export default Dropdown