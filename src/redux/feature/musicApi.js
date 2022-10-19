import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const musicApi = createApi({
    reducerPath: 'musicSlice',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key', `${process.env.REACT_APP_API_KEY}`)

            return headers
        }
    }),
    endpoints: (builder)=>({
        getTrending:builder.query({
            query:()=>'charts/world'
        }),
        getByGenre: builder.query({
            query:(genre)=>`/charts/genre-world?genre_code=${genre}`
        }),
        getBySearch: builder.query({
            query:(term)=>`/search/multi?search_type=SONGS_ARTISTS&query=${term}`
        }),
        getSongByLangauge: builder.query({
            query:(lang)=>`/search/multi?search_type=SONGS_ARTISTS&query=${lang}`
        })
    })
})

export const { useGetTrendingQuery, useGetByGenreQuery, useGetBySearchQuery } = musicApi