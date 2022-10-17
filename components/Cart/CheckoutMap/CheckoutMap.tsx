import React from 'react'
import {motion} from 'framer-motion'
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api'
import Map from '../../GoogleMap/Map'



const CheckoutMap = ({showMap} : {showMap:any}) => {
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyBACUw-EBiUVXDYqpDtAz-V0abW15-WwoI',
        libraries: ['places']
    })
  return (
    <motion.div className='absolute left-0 top-0 w-full h-full bg-cyan-300 z-50' transition={{duration: 0.2}} initial={{x: '100%'}} animate={{x: 0}}>
        {isLoaded && <Map showMap={showMap} />}
    </motion.div>
  )
}

export default CheckoutMap