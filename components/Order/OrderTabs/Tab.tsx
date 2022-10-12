import React from 'react'

type Tab = {
    classes: string,
    text: string
}

const Tab = ({ classes, text }: Tab) => {
  return (
    <div className={`${classes} px-[10px] py-1 rounded  cursor-pointer`}>{text}</div>
  )
}

export default Tab