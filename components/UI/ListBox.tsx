import React, { useRef, useState } from 'react'
import { HiOutlineSelector, HiCheck } from "react-icons/hi";
import useOnClickOutside from '../../utils/use-click-outside';

type Option = {
    id?: string;
	name: string;
    value?: any
};

interface ListBoxInterface {
    options: Option[],
    onSelectOption?: (item: any) => void
}

const ListBox = ({ options, onSelectOption, }: ListBoxInterface) => {
  const [activeOptionsItemTitle, setActiveOptionsItemTitle] = useState(options[0].value)
  const [openDropdown, setOpenDropdown] = useState(false)

  //Handle ouside click
  const optionsDropdownRef = useRef(null)
  useOnClickOutside(optionsDropdownRef, () => setOpenDropdown(false))

  const handleSelectOption = (item: Option) => {
    if (item) {
        onSelectOption(item)
        setActiveOptionsItemTitle(item.value)
        setOpenDropdown(false)
    }
  }

  return (
    <div className='listbox-container relative'>
        <div className='listbox-header flex items-center justify-between px-3 py-2 bg-[#252836] rounded-md' onClick={() => setOpenDropdown(!openDropdown)}>
            <div className='text-white pr-5'>{activeOptionsItemTitle}</div>
            <HiOutlineSelector
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
            />
        </div>
        {openDropdown &&
            <div ref={optionsDropdownRef} className='overflow-hidden absolute top-[45px] left-0 w-full h-auto bg-[#252836] rounded-md'>
                <ul>
                    {options.map((item) => {
                        return <li className='p-2 cursor-pointer hover:bg-[#2f313ac1] text-white' onClick={() => handleSelectOption(item)}>
                            {item.value}
                        </li>
                    })}
                </ul>
            </div>
        }
    </div>
  )
}

export default ListBox

