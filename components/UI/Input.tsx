import React, { useState, useRef, useEffect } from 'react'
import checkIsInputValue from '../../utils/checkIsInputEmpty'

// type InputProps = {
//     name?: string,
//     id?: string,
//     value?: string,
//     label?: string,
//     classes?: string,
//     onBlur?: () => any,
//     onChange?: () => any,
// }



const Input = ({name, id, onBlur, onChange, value, label, classes, rightIcon, leftIcon, ...rest}: any) => {
    const inputRef = useRef(0)
    const [inputFocused, setInputFocused] = useState(false)

    // const checkIsInputEmpty = () => {
    //     if (inputRef?.current?.value.length){
    //         setInputFocused(true)
    //     } else if (inputRef?.current?.value.length === 0) {
    //         setInputFocused(false)
    //     }
    // }

    const onFocusOut = (e) => {
        onBlur ? onBlur(e) : null
        checkIsInputValue(inputRef?.current?.value, setInputFocused)
    }

    useEffect(() => {
        checkIsInputValue(inputRef?.current?.value, setInputFocused)
    }, [])

    return (
        <div className={`relative w-full ${classes} rounded-[5px] flex p-[10px] text-white bg-[#2D303E]`}>
            <label className= {`leading-none transition-all ${inputFocused ? 'absolute -top-[55%] left-0 text-[15px] font-bold text-white ' : 'absolute top-1/2 left-2 translate-y-[-50%] text-[#c3c3c3]'}`} htmlFor={id}>{label}</label>
            <div className='rightIcon pr-2'>
                { leftIcon }
            </div>
            <input {...rest} ref={inputRef} onBlur={(e) => onFocusOut(e)} onFocus={() => setInputFocused(true)} className={`flex items-center rounded-[5px] w-full h-full bg-[#2D303E]  outline-none `} value={value} onChange={(e) => onChange(e.target.value)} id={id} name={name} />
            <div className='rightIcon pl-2'>
                { rightIcon }
            </div>
        </div>
    )
}

export default Input