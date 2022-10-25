import React, { useMemo, useCallback, useEffect, useRef, useState, Children } from 'react'
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
import { useSelector } from 'react-redux'
import { selectActiveDepartment, selectDepartments } from '../../store/ducks/departmens/selectors'
import useFetchDirections from '../../hooks/useFetchDirections'
import { LatLngLiteral, MapOptions, DirectionsResult} from '../../utils/types'

interface MapInterface {
    showMap: (val: boolean) => any, 
    showTopBar?: boolean,
    setDestinationAddressTitle: (adress: string) => void,
    destinationCoordinates?: LatLngLiteral,
    setDeliveryCoordinates?: any, 
    children?: any
}

const Map = ({showMap, showTopBar = true, destinationCoordinates, setDeliveryCoordinates, setDestinationAddressTitle, children}: MapInterface) => {
  const {directions, getDirections} = useFetchDirections()
  const [address, setAddress] = useState<string>('');
  const [destination, setDestination] = useState<LatLngLiteral>();
  const mapRef = useRef<GoogleMap>()
  const center = useMemo<LatLngLiteral>(() => (origin ? origin : {lat: 48.460385, lng: 35.04904399999999}), [])
  const options = useMemo<MapOptions>(() => ({
    mapId: '7d402342532cf6c5',
    disableDefaultUI: true,
    clickableIcons: false
  }), [])

  const origin = useSelector(selectActiveDepartment)?.coordinates

  //   Set destibation coordinates from props
  const delivaryCoordinates = useMemo(() => {
    return destinationCoordinates
  }, [])

  const onLoad = useCallback(map => (mapRef.current = map), [])

  useEffect(() => {
      if(origin && delivaryCoordinates){
        getDirections({origin, destination: delivaryCoordinates})
      }
  }, [origin])

  if (origin && destination) {
    getDirections({origin, destination})
  }

  useEffect(() => {
    setDeliveryCoordinates(destination)
    setDestinationAddressTitle(address)
  }, [destination, address])

  return (
    <div className='w-full h-full relative'>
        <GoogleMap 
            center={center} 
            zoom={20} 
            mapContainerStyle={{width: '100%', height: '100%'}} 
            options={options} 
            onLoad={onLoad}
        >
            {directions && (
                <DirectionsRenderer
                directions={directions}
                options={{
                    polylineOptions: {
                    zIndex: 50,
                    strokeColor: "#EA6969",
                    strokeWeight: 5,
                    },
                }}
                />
            )}

            <Marker position={center} title={'first Marker'} icon={FoodIconPng.src}/>
            {destination && <Marker position={destination} title={'Second Marker'} />}
            {delivaryCoordinates && <Marker position={delivaryCoordinates} title={'Destination Marker'} />}
            
        </GoogleMap>
        <div className='w-full h-auto z-[1000000000] absolute top-0 left-0' >
            <div className='flex justify-center gap-2 px-3'>
                <div className='flex items-center cursor-pointer h-[50px] p-3 mt-5 bg-[#2D303E] rounded-md' onClick={() => showMap(false)}>
                    <AiOutlineClose size={20} color={'white'}/>
                </div>
                {showTopBar && <Places 
                                    setDestination={(position: any) => {
                                        setDestination(position);
                                        mapRef.current?.panTo(position);
                                    }}
                                    setAddress={setAddress}
                                />
                }
                
            </div>
        </div>
        <div className='w-full h-auto z-[1000000000] absolute bottom-5 left-0' >
            <div className='flex flex-col items-center justify-center gap-2 px-3'>
                <div className='w-full p-3 text-xl grow bg-[#2D303E] rounded-md'>
                    <p className='text-[#EA6969] text-sm'>Delivery location</p>
                    <div className='text-white '>{address}</div>
                </div>
                <div className='choose-delivery-place w-full'>
                    {children}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Map