import React from 'react'
import Trending from '../../components/Trending'
import Search from '../../components/Search'
import { Route, Routes } from 'react-router-dom'

const MainPage = () => {
  return (
    <div className='overflow-hidden w-[100%] h-[90%]'>
        <Routes>
          <Route path='/' element={<Trending />} />
          <Route exact path='/search/*' element={<Search />} />
        </Routes>
    </div>
  )
}

export default MainPage