import React from 'react'
import './ReelStyle.css'
import Post from '../post/Post'
import { useState } from 'react'

function Reel() {
  const [posts ,setPosts]=useState([
    {
      user:'sathish',
      postimage:'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      linkes:18,
      timespamp:'1d'
    },
    {
      user:'Umaiyal',
      postimage:'https://images.pexels.com/photos/916344/pexels-photo-916344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      linkes:100,
      timespamp:'10h'
    },
    {
      user:'Athini',
      postimage:'https://images.pexels.com/photos/19091448/pexels-photo-19091448/free-photo-of-smiling-teenager-lying-with-books-camera-and-violin.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      linkes:80,
      timespamp:'2d'
    },
    {
      user:'Athiran',
      postimage:'https://images.pexels.com/photos/19055978/pexels-photo-19055978/free-photo-of-a-man-with-a-backpack-in-an-autumn-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      linkes:50,
      timespamp:'3d'
    },
    {
      user:'Lakshitha',
      postimage:'https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg?auto=compress&cs=tinysrgb&w=600',
      linkes:150,
      timespamp:'1d'
    },
    {
      user:'Sridevi',
      postimage:'https://images.pexels.com/photos/2072577/pexels-photo-2072577.jpeg?auto=compress&cs=tinysrgb&w=600',
      linkes:550,
      timespamp:'2h'
    },

  ])
  return (
    <div className='Reel_container'>
      <div className='Status'>
        <div className='substatus'>
          <div className='imggg'> <img src="https://images.pexels.com/photos/10899309/pexels-photo-10899309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/></div>
          <div>Ram</div>
        </div>
        <div className='substatus'>
          <div className='imggg'> <img src="https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/></div>
          <div>Saran</div>
        </div>
        <div className='substatus'>
          <div className='imggg'> <img src="https://images.pexels.com/photos/355938/pexels-photo-355938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/></div>
          <div>aravinthan</div>
        </div>
        <div className='substatus'>
          <div className='imggg'> <img src="https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/></div>
          <div>Sam</div>
        </div>
        <div className='substatus'>
          <div className='imggg'> <img src="https://images.pexels.com/photos/256374/pexels-photo-256374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/></div>
          <div>Thara</div>
        </div>
        <div className='substatus'>
          <div className='imggg'> <img src="https://images.pexels.com/photos/2152/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/></div>
          <div>Tharani</div>
        </div>
        <div className='substatus'>
          <div className='imggg'> <img src="https://images.pexels.com/photos/4220967/pexels-photo-4220967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/></div>
          <div>santhosh</div>
        </div>
        <div className='substatus'>
          <div className='imggg'> <img src="https://images.pexels.com/photos/63332/science-world-false-creek-vancouver-british-columbia-63332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/></div>
          <div>Ajith</div>
        </div>

        <div className='substatus'>
          <div className='imggg'> <img src="https://images.pexels.com/photos/256161/pexels-photo-256161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/></div>
          <div>Poovarasan</div>
        </div>

        <div className='substatus'>
          <div className='imggg'> <img src="https://images.pexels.com/photos/163125/board-printed-circuit-board-computer-electronics-163125.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/></div>
          <div>palani</div>
        </div>

        <div className='substatus'>
          <div className='imggg'> <img src="https://images.pexels.com/photos/3912992/pexels-photo-3912992.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/></div>
          <div>selva</div>
        </div>

        <div className='substatus'>
          <div className='imggg'> <img src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/></div>
          <div>seemaraja</div>
        </div>

        <div className='substatus'>
          <div className='imggg'> <img src="https://images.pexels.com/photos/3912947/pexels-photo-3912947.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/></div>
          <div>chinna</div>
        </div>

       
      </div>

      <div className='Reels'>
        
    <div className='timeline'>
        <div className="timeline_left">
          <div className="timeline_post">
            {
              posts.map(post=>(
                <Post user={post.user} postimage={post.postimage} like={post.linkes} Timelink={post.timespamp} />
              ))
            }
          </div>
        </div>
    </div>
        

      </div>
    </div>
  )
}

export default Reel
