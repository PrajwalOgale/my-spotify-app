import React from 'react'
import Controls from './Controls'
import Audio from './Audio'
import { useDispatch, useSelector } from 'react-redux'
import { playPause, playNext, playPrev, playShuffle } from '../redux/feature/playerSlice'


const Player = ({volume}) => {
  const {activeSong, isPlaying, currentSongIndex,currentSongs} = useSelector((state)=>state.player)
  const dispatch = useDispatch()

  const handlePlayPause = ()=>{
    if(isPlaying){
      dispatch(playPause(false))
    }else{
      dispatch(playPause(true))
    }
  }

  const handleNextSong = ()=>{
    if(currentSongIndex===currentSongs.length-1){
      dispatch(playNext(0))
    }else{
      dispatch(playNext(currentSongIndex+1))
    }
    dispatch(playPause(true))
  }

  const handlePrevSong = ()=>{
    if(currentSongIndex===0){
      dispatch(playPrev(currentSongs.length-1))
    }else{
      dispatch(playPrev(currentSongIndex-1))
    }
    dispatch(playPause(true))
  }

  const handleShuffle = ()=>{
    dispatch(playShuffle(Math.floor(Math.random()*currentSongs.length)))
    dispatch(playPause(true))
  }



  return (
    <div className='w-[33.33%]'>
      <Controls
      handlePlayPause ={handlePlayPause}
      handleNextSong = {handleNextSong}
      handlePrevSong = {handlePrevSong}
      handleShuffle = {handleShuffle}
      isPlaying = {isPlaying}
      />
      
      <Audio
      src={activeSong?.hub?.actions[1]?.uri}
      isPlaying={isPlaying}
      activeSong={activeSong}
      onEnded={handleNextSong}
      volume={volume}
      />
    </div>
  )
}

export default Player