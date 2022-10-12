import React, {useState, useRef, ReactElement} from 'react'
import useOnClickOutside from '../../../utils/use-click-outside'
import {BsThreeDotsVertical} from 'react-icons/bs'


const DropsDropdown = ({children}: {children?: any}) => {
  const [openTweetDropdow, setOpenTweetDropdow] = useState(false)

  //Handle ouside click
  const dropdownRef = useRef(null)
  useOnClickOutside(dropdownRef, () => setOpenTweetDropdow(false))

  const handleTweetDropdownClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setOpenTweetDropdow(true)
  }

  return (
    <>
        <div onClick={(e) => handleTweetDropdownClick(e)} className={'relative'}>
            <div className='pl-2 overflow-hidden'>
                <BsThreeDotsVertical size={20} color='white' />
            </div>
            {openTweetDropdow && <div ref={dropdownRef} className='absolute bg-[#34384b] top-0 left-2 overflow-hidden rounded-md w-auto'>
                {children}
            </div>
        }
        </div>
    </>
  )
}

export default DropsDropdown