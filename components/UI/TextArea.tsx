import React, {useState, useRef, useEffect, TextareaHTMLAttributes} from 'react'
import checkIsInputValue from '../../utils/checkIsInputEmpty'

interface TextareaInterface extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string,
  onBlur? : (e: any) => any
}

const TextArea = (props: TextareaInterface) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [inputFocused, setInputFocused] = useState(false)

  const onFocusOut = (e: any) => {
    props.onBlur ? props.onBlur(e) : null
    checkIsInputValue(textareaRef.current?.value!, setInputFocused)
  }

  useEffect(() => {
    checkIsInputValue(textareaRef.current?.value!, setInputFocused)
  }, [])

  return (
    <div className='flex flex-col mt-[30px] relative'>
      {props.label ? <label className= {`leading-none transition-all ${inputFocused ? 'absolute -top-[25px] left-0 text-[15px] font-bold text-white ' : 'absolute top-[25px] left-2 translate-y-[-50%] text-[#c3c3c3]'}`} htmlFor={props.id}>{props.label}</label> : null}
      <textarea ref={textareaRef} onBlur={(e) => onFocusOut(e)} onFocus={() => setInputFocused(true)} className='bg-[#2D303E] text-white text-[15px] rounded-md outline-none p-3' {...props} />
    </div>
  )
}

export default TextArea