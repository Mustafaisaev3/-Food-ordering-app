import React, { useMemo, useCallback, useEffect, useRef, useState } from 'react'
import {
    GoogleMap,
    Marker,
    DirectionsRenderer,
    Circle,
    MarkerClusterer
} from '@react-google-maps/api'
import FoodIconPng from '../../public/assets/images/orange_dinner_icon.png'
import Places from './Places'
import { AiOutlineClose } from 'react-icons/ai'

type LatLngLiteral = google.maps.LatLngLiteral
type DirectionsResult = google.maps.DirectionsResult
type MapOptions = google.maps.MapOptions

const Map = ({showMap} : {showMap: any}) => {
  const [address, setAddress] = useState<string>();
  const [office, setOffice] = useState<LatLngLiteral>();
  const mapRef = useRef<GoogleMap>()
  const center = useMemo<LatLngLiteral>(() => ({lat: 48.8584, lng: 2.2945}), [])
  const options = useMemo<MapOptions>(() => ({
    mapId: '7d402342532cf6c5',
    disableDefaultUI: true,
    clickableIcons: false
  }), [])

  console.log(office)

  const onLoad = useCallback(map => (mapRef.current = map), [])

  return (
    <div className='w-full h-full relative'>
        <GoogleMap 
            center={center} 
            zoom={20} 
            mapContainerStyle={{width: '100%', height: '100%'}} 
            options={options} 
            onLoad={onLoad}
        >
            <Marker position={center} title={'first Marker'} icon={FoodIconPng.src}/>
            {office && <Marker position={office} title={'Second Marker'} />}
            
        </GoogleMap>
        <div className='w-full h-auto z-[1000000000] absolute top-5 left-0' >
            <div className='flex justify-center gap-2 px-3'>
                <div className='flex items-center cursor-pointer h-[50px] p-3 bg-white rounded-md' onClick={() => showMap(false)}>
                    <AiOutlineClose size={20} color={'black'}/>
                </div>
                <Places 
                    setOffice={(position: any) => {
                        setOffice(position);
                        mapRef.current?.panTo(position);
                    }}
                    setAddress={setAddress}
                />
            </div>
        </div>
        <div className='w-full h-auto z-[1000000000] absolute bottom-5 left-0' >
            <div className='flex flex-col items-center justify-center gap-2 px-3'>
                <div className='w-full p-3 text-xl grow bg-white rounded-md'>
                    <p className='text-gray text-sm'>Delivery location</p>
                    <div>{address}</div>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <div className='flex justify-center items-center p-[15px] cursor-pointer bg-[#EA6969] rounded-lg w-full h-auto'>
                        <div className='text-[15px] font-bold text-[white]'>Deliver here</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Map