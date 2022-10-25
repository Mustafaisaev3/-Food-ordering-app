import React, { useState, useRef } from 'react'
import useOnClickOutside from '../../../utils/use-click-outside'
import {BsThreeDotsVertical} from 'react-icons/bs'


const DropsDropdown = ({children}: {children?: any}) => {
  const [openDropdow, setOpenDropdow] = useState(false)

  //Handle ouside click
  const dropdownRef = useRef(null)
  useOnClickOutside(dropdownRef, null, () => setOpenDropdow(false))

  const handleDropdownClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setOpenDropdow(true)
  }

  return (
    <>
        <div onClick={(e) => handleDropdownClick(e)} className={'relative'}>
            <div className='pl-2 overflow-hidden'>
                <BsThreeDotsVertical size={20} color='white' />
            </div>
            {openDropdow && <div ref={dropdownRef} className='absolute bg-[#34384b] top-0 left-2 overflow-hidden rounded-md w-auto'>
                {children}
            </div>
        }
        </div>
    </>
  )
}

export default DropsDropdown