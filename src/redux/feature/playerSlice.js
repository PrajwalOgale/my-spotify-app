import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentSongs:[],
  currentSongIndex: 0,
  isPlaying: false,
  activeSong:{}
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    selectSong:(state, action)=>{
      state.activeSong = action.payload.songDetails
      state.currentSongs = action.payload.data
      state.currentSongIndex = action.payload.index
    },
    playNext:(state, action)=>{
      state.activeSong = state.currentSongs[action.payload]
      state.currentSongIndex = action.payload
    },
    playPrev:(state, action)=>{
      state.activeSong = state.currentSongs[action.payload]
      state.currentSongIndex = action.payload
    },
    playShuffle:(state, action)=>{
      state.activeSong = state.currentSongs[action.payload]
      state.currentSongIndex = action.payload
    },
    playPause:(state, action)=>{
      state.isPlaying = action.payload
    }

  }
})

export const { selectSong, playPause, playNext, playPrev, playShuffle } = playerSlice.actions

export default playerSlice.reducer