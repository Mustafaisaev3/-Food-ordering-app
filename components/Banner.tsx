import {Movie} from '../typings'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { baseUrl } from '../constants/movie'
import {FaPlay} from 'react-icons/fa'
import { InformationCircleIcon } from '@heroicons/react/outline'

interface Props {
    netflixOriginals: Movie[]
}

function Banner({netflixOriginals}: Props) {

    const [movie, setMovie] = useState< Movie | null> (null)

    useEffect(() => {
        setMovie(
            // netflixOriginals[Math.floor(Math.random()) * netflixOriginals.length]
            netflixOriginals[6]
        )
    }, [netflixOriginals])

    console.log(movie)

    return (
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
            <div className='absolute top-0 left-0 h-[95vh] w-screen -z-10'>
                <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} layout='fill' objectFit='cover' />
                {/* <img src='https://image.tmdb.org/t/p/original/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg' width='100%' height='100%' /> */}
            </div>
            <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">{movie?.title || movie?.name || movie?.original_title}</h1>
            <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-2-2xl lg:text-2xl text-shadow-md">{movie?.overview}</p>
            <div className='flex space-x-3'>
                <button className="bannerButton bg-white text-black"><FaPlay className="h-4 w-4 text-black md:h-7 md:w-7"/> Play</button>
                <button className="bannerButton bg-[gray]/70">More Info <InformationCircleIcon className='h-5 w-5 md:h-8 md:w-8' /></button>
            </div>
        </div>
    )
}

export default Banner