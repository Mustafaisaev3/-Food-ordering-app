import React from 'react'

type BadgeType = {
    textColor: string,
    bg: string,
    content: any
}

export const Badge = ({textColor, bg, content}: BadgeType) => {
  return (
    <span className={`flex items-center justify-center absolute top-[-10px] right-[-5px] text-center text-xs text-[${textColor}] bg-[${bg}] rounded-full leading-none w-5 h-5`}>{content}</span>
  )
}
