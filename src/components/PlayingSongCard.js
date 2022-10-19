import React from 'react'
import { useSelector } from 'react-redux'

const PlayingSongCard = () => {

  const {images, title, subtitle} = useSelector((state)=> state.player.activeSong)
  return (
    <div className='flex justify-start items-center gap-2 md:gap-6 ml-2 md:ml-5 w-[33.33%] '>
      <div className='w-12 md:w-16 my-5 object-cover '>
        <img className='w-[100%] rounded-md' src={images?.background} alt={`${title}`} />
      </div>
      <div className='flex flex-col md:w-[80%] justify-center  truncate'>
        <p className='text-sm md:text-lg font-semibold truncate'>{title}</p>
        <p className='text-xs md:text-sm truncate'>{subtitle}</p>
      </div>
    </div>
  )
}

export default PlayingSongCard