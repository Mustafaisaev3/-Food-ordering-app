import React, { useState, useRef, useEffect } from 'react'
import {motion} from 'framer-motion'

function Modal() {
  const [isActive, setIsActive] = useState<boolean>(true)

  const modalRef = useRef()

  useEffect(() => {
      document.addEventListener('mousedown', (event) => {
        const node = modalRef.current as any
        if (!node.contains(event.target)){
            setIsActive(false)
        }
      })
  })

    const heightCollapse = () => {
    return {
      from: { 
        opacity: 0,
        height: 0,
        transition: {
          ease: [0.04, 0.62, 0.23, 0.98]
        } 
      },
      to: { 
        opacity: 1,
        height: 'auto',
        transition: {
          ease: [0.04, 0.62, 0.23, 0.98]
        } 
      },
    }
  }

  return (
      <motion.div initial={'from'} animate={'to'} exit="from" variants={heightCollapse()} className='absolute left-0 top-0 z-50 w-screen h-screen bg-[#676767eb] overflow-hidden flex justify-end'>
            <motion.div ref={modalRef} transition={{duration: 0.5}} initial={isActive ? {x: '100%'} : {x: '0'}} animate={isActive ? {x: '0'} : {x: '100%'}} className='w-[30%] h-screen bg-white rounded-xl'>

            </motion.div>
        </motion.div>
  )
}

export default Modal





// import React, { useState, useRef, useEffect } from 'react'
// import {motion} from 'framer-motion'

// function Modal() {
//   const [isActive, setIsActive] = useState<boolean>(true)

//   const modalRef = useRef()

//   useEffect(() => {
//       document.addEventListener('mousedown', (event) => {
//         const node = modalRef.current as any
//         if (!node.contains(event.target)){
//             setIsActive(false)
//         }
//       })
//   })

//     const heightCollapse = () => {
//     return {
//       from: { 
//         opacity: 0,
//         height: 0,
//         transition: {
//           ease: [0.04, 0.62, 0.23, 0.98]
//         } 
//       },
//       to: { 
//         opacity: 1,
//         height: 'auto',
//         transition: {
//           ease: [0.04, 0.62, 0.23, 0.98]
//         } 
//       },
//     }
//   }

//   return (
//       <motion.div initial={isActive ? {opacity: 0.1} : {opacity: 1}} animate={isActive ? {opacity: 1} : {opacity: 0.3}} className='absolute left-0 top-0 z-50 w-screen h-screen bg-[#676767eb] overflow-hidden flex justify-end'>
//             <motion.div ref={modalRef} transition={{duration: 0.5}} initial={isActive ? {x: '100%'} : {x: '0'}} animate={isActive ? {x: '0'} : {x: '100%'}} className='w-[30%] h-screen bg-white rounded-xl'>

//             </motion.div>
//         </motion.div>
//   )
// }

// export default Modal