import React, { useRef, useEffect } from 'react'


const Audio = ({ src, isPlaying, activeSong, onEnded, volume }) => {
    console.log(src);
    const ref = useRef(null)

    useEffect(()=>{
        if (ref.current) {
            if (isPlaying) {
                ref.current.play()
            } else {
                ref.current.pause()
            }
        }
    }, [activeSong, isPlaying])

    useEffect(()=>{
        ref.current.volume = volume
    },[volume])
        
    return (
        <div>
            <audio
                src={src}
                ref={ref}
                onEnded={onEnded}
            />
        </div>
    )
}

export default Audio