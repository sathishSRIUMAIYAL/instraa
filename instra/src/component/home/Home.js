import React from 'react'
import './HomeStyle.css'
import Side from '../side/Side'
import Reel from '../reelse/Reel'
import Sugggesion from '../sugges/Sugggesion'

function Home() {
  return (
    <div className='home_page'>
      
        <div className='side_bar'>
          <Side/>
        </div>

        <div className='reels'>  
          <Reel />
        </div>

        <div className='suggesion'>
          <Sugggesion />
        </div>
      
    </div>
  )
}

export default Home
