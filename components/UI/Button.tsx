import React, { ButtonHTMLAttributes } from 'react'

interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
    btnType?: string,
}

const Button = (props: ButtonInterface) => {
  return (
    <button {...props} className={`btn-${props.btnType} ${props.className}`}>{props.children}</button>
  )
}

export default Button