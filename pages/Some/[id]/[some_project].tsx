import React from 'react'
import {useRouter} from 'next/router'

const SomeProject = () => {
    const router = useRouter()
    console.log(router.pathname)
    console.log(router.query)
    console.log(router.route)
  return (
    <div>SomeProject</div>
  )
}

export default SomeProject