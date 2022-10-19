import React from 'react'
import loader from './loader.svg'

const Loader = () => {
  return (
    <div className='w-[100%] h-[100%] flex justify-center items-start'>
        <img className='w-16 md:w-32 '  src={loader} alt='loading' />
    </div>
  )
}

export default Loader