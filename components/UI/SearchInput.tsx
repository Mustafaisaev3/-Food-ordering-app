import React, { useState, useRef, useEffect } from 'react'

// type InputProps = {
//     name?: string,
//     id?: string,
//     value?: string,
//     label?: string,
//     classes?: string,
//     onBlur?: () => any,
//     onChange?: () => any,
// }



const SearchInput = ({name, id, onBlur, onChange, value, label, classes, rightIcon, leftIcon, ...rest}: any) => {
    const inputRef = useRef(0)
    const [inputFocused, setInputFocused] = useState(false)

    const onFocusOut = (e) => {
        onBlur ? onBlur(e) : null
        if (inputRef?.current?.value.length){
            setInputFocused(true)
        } else if (inputRef?.current?.value.length === 0) {
            setInputFocused(false)
        }
    }

    return (
        <div className={`relative w-full ${classes} rounded-[5px] flex items-center p-[10px] text-white bg-[#2D303E]`}>
            <div className='rightIcon pr-2'>
                { leftIcon }
            </div>
            <input {...rest} ref={inputRef} onBlur={(e) => onFocusOut(e)} onFocus={() => setInputFocused(true)} className={`flex items-center rounded-[5px] w-full h-full bg-[#2D303E] outline-none `} value={value} onChange={onChange} id={id} name={name} />
            <div className='rightIcon pl-2'>
                { rightIcon }
            </div>
        </div>
    )
}

export default SearchInput