import React, { useState, useRef } from 'react'

// type InputProps = {
//     name?: string,
//     id?: string,
//     value?: string,
//     label?: string,
//     classes?: string,
//     onBlur?: () => any,
//     onChange?: () => any,
// }



const Input = ({name, id, onBlur, onChange, value, label, classes, ...rest}: any) => {
    const inputRef = useRef()
    const [inputFocused, setInputFocused] = useState(false)

    const onFocusOut = (e) => {
        onBlur ? onBlur(e) : null
        if (inputRef?.current?.value.length){
            setInputFocused(true)
        } else if (inputRef?.current?.value.length == 0) {
            setInputFocused(false)
        }
    }

    return (
        <div className={`relative w-full ${classes} mt-3 rounded-[5px]`}>
            <label className= {`leading-none transition-all ${inputFocused ? 'absolute -top-[55%] left-0 text-[15px] font-bold text-white ' : 'absolute top-1/2 left-2 translate-y-[-50%] text-[#c3c3c3]'}`} htmlFor={id}>{label}</label>
            {/* <label className= {`text-[#c3c3c3] leading-none transition-all ${inputFocused ? 'absolute -top-2 left-2 text-[13px] ' : 'absolute top-1/2 left-2 translate-y-[-50%]'}`} htmlFor={id}>{label}</label> */}
            {/* <input ref={inputRef} onBlur={() => onFocusOut()} onFocus={() => setInputFocused(true)} type="text" className={`flex items-center rounded-[5px] w-full h-full p-[10px] outline-none text-white bg-[#2D303E]`} value={value} onChange={onChange} id={id} name={name} /> */}
            <input {...rest} ref={inputRef} onBlur={(e) => onFocusOut(e)} onFocus={() => setInputFocused(true)} className={`flex items-center rounded-[5px] w-full h-full p-[10px] outline-none text-white bg-[#2D303E]`} value={value} onChange={onChange} id={id} name={name} />
        </div>
    )
}

export default Input