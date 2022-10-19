import { configureStore } from "@reduxjs/toolkit";
import playerReducer from './feature/playerSlice'
import {musicApi} from './feature/musicApi'


export const store = configureStore({
    reducer:{
        [musicApi.reducerPath]: musicApi.reducer,
        player: playerReducer,
    },
    // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(musicApi.middleware)
})