import React, { ButtonHTMLAttributes } from 'react'

interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnType?: string,
}

const Button = ({btnType, className, children, ...rest}: ButtonInterface) => {
  return (
    <button {...rest} className={btnType ? `btn-${btnType} ${className}` : `btn-primary ${className}`}>{children}</button>
  )
}

export default Button