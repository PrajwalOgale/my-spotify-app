import React from 'react'

const SongLength = ({min, max}) => {
  return (
    <div>
        <input 
        type='range'
        min={min}
        max={max}
        />
    </div>
  )
}

export default SongLength