import React from 'react'
import VideoContainer from './VideoContainer'
import ButtonList from './ButtonList'

const MainContainer = () => {
  return (
    <div className='flex flex-col w-10/12 justify-center mt-20 overflow-x-hidden sm:w-full'>
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer