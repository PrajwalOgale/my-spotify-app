import React from 'react'
import { useGetTrendingQuery } from '../redux/feature/musicApi'
import SongCard from './SongCard'
import Loader from './Loader'
import Error from './Error'

const Trending = () => {

  const { data, isError, isSuccess, isLoading } = useGetTrendingQuery()
  let content

  if (isLoading) {
    (content = <Loader/>)
  } else if (isSuccess) {
    (
      content = data.map((card, index) => {
        return <SongCard
          key={card.key}
          image={card?.images}
          subtitle={card?.subtitle}
          title={card?.title}
          songDetails={card}
          data={data}
          index = {index}
        />
      }))
  } else if (isError) {
    (content = <Error/>)
  }

  return (
    <div className='h-[100%] flex flex-col gap-2 p-2 md:pl-10 pr-0 py-2 justify-start items-start overflow-y-scroll'>
      <h3 className='text-2xl md:text-4xl font-semibold px-5 mt-2 md:mt-5 tracking-wider'>World Wide Trending</h3>
      <div className='h-[100%] w-[100%] flex flex-wrap justify-center md:justify-start items-center gap-3  overflow-y-scroll'>
        {content}
      </div>
    </div>
  )

}

export default Trending