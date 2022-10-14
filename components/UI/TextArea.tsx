import React, {TextareaHTMLAttributes} from 'react'

const TextArea = (props: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea {...props} />
  )
}

export default TextArea