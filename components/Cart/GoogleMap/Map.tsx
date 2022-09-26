import React from 'react'
import {motion} from 'framer-motion'
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api'
const center = {lat: 48.8584, lng: 2.2945}


const Map = () => {
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyCKTq7Tur983QHRIYNSfAlsv6jzhFAEgC0'
    })
  return (
    <motion.div className='absolute left-0 top-0 w-full h-full bg-cyan-300 z-50' transition={{duration: 0.2}} initial={{x: '100%'}} animate={{x: 0}}>
        {isLoaded && <GoogleMap center={center} zoom={20} mapContainerStyle={{width: '100%', height: '100%'}} />}
    </motion.div>
  )
}

export default Map