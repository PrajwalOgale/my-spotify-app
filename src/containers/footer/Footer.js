import React from 'react'
import Player from '../../components/Player'
import PlayingSongCard from '../../components/PlayingSongCard'
import Volume from '../../components/Volume'
import { useState } from 'react'

const Footer = () => {

  const [volume, setVolume] = useState(0.4)
  

  return (
    <div className='flex justify-between items-center gap-1 bg-[#181818] sticky h-14 md:h-20'
    style={{  
      background: 'linear-gradient(90deg, rgba(15,23,60,0.7467319691548495) 35%, rgba(14,12,58,0.7467319691548495) 67%)',
      backdropFilter: 'blur(17.915px)'  }}
    >
        <PlayingSongCard />
        <Player volume={volume} />
        <Volume value={volume} min='0' max='1' onChange={(e)=>{setVolume(e.target.value)}} setVolume={setVolume} />
    </div>
  )
}

export default Footer