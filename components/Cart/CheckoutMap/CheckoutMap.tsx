import React, { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api'
import { fadeInRight } from '../../../utils/motion/fade-in-right'
import Map from '../../GoogleMap/Map'

interface CheckoutMapInterface {
  showMap: () => any, 
  setDeliveryCoordinates: () => any, 
  setDestinationAddressTitle: () => any
}

const CheckoutMap = ({showMap, setDeliveryCoordinates, setDestinationAddressTitle} : CheckoutMapInterface) => {
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyBACUw-EBiUVXDYqpDtAz-V0abW15-WwoI',
        libraries: ['places']
    })

    
  return (
    // <motion.div className='absolute left-0 top-0 w-full h-full bg-cyan-300 z-50' transition={{duration: 0.2}} initial={{x: '100%'}} animate={{x: 0}}>
    <AnimatePresence>
      <motion.div 
        className='absolute left-0 top-0 w-full h-full bg-cyan-300 z-50' 
        key='checkout-map'
        initial="from"
        animate="to"
        exit="from"
        variants={fadeInRight(0.50)}
      >
          {isLoaded 
            && 
            <Map showMap={showMap} setDestinationAddressTitle={setDestinationAddressTitle} setDeliveryCoordinates={setDeliveryCoordinates} >
              <div className='w-full flex items-center justify-center'>
                  <div className='flex justify-center items-center p-[15px] cursor-pointer bg-[#EA6969] rounded-lg w-full h-auto'>
                      <div className='text-[15px] font-bold text-[white]'>Deliver here</div>
                  </div>
              </div>
            </Map>
          }
      </motion.div>
    </AnimatePresence>
  )
}

export default CheckoutMap