import './ExpoloreStyle.css'
import React from 'react'
import Side from '../../Side'
import Ppost from '../expolore/Ppost'
import { useState } from 'react'


function Expolore() {
  const [posts ,setPosts]=useState([
    {
      user:'sathish',
      postimage:'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      linkes:18,
      timespamp:'1d',
      message:30
    },
    {
      user:'Umaiyal',
      postimage:'https://images.pexels.com/photos/916344/pexels-photo-916344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      linkes:100,
      timespamp:'10h',
      message:10
    },
    {
      user:'Athini',
      postimage:'https://images.pexels.com/photos/19091448/pexels-photo-19091448/free-photo-of-smiling-teenager-lying-with-books-camera-and-violin.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      linkes:80,
      timespamp:'2d',
      message:300
    },
    {
      user:'Athiran',
      postimage:'https://images.pexels.com/photos/19055978/pexels-photo-19055978/free-photo-of-a-man-with-a-backpack-in-an-autumn-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      linkes:50,
      timespamp:'3d',
      message:200
    },
    {
      user:'Lakshitha',
      postimage:'https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg?auto=compress&cs=tinysrgb&w=600',
      linkes:150,
      timespamp:'1d',
      message:30
    },
    {
      user:'Sridevi',
      postimage:'https://images.pexels.com/photos/2072577/pexels-photo-2072577.jpeg?auto=compress&cs=tinysrgb&w=600',
      linkes:612,
      timespamp:'2h',
      message:150
    },
    {
      user:'Sridevi',
      postimage:'https://images.pexels.com/photos/15999575/pexels-photo-15999575/free-photo-of-gothic-cologne-cathedral.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      linkes:100,
      timespamp:'2h',
      message:3
    },
    {
      user:'Sridevi',
      postimage:'https://images.pexels.com/photos/19145595/pexels-photo-19145595/free-photo-of-golden-retriever.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      linkes:90,
      timespamp:'2h',
      message:80
    },
    {
      user:'Sridevi',
      postimage:'https://images.pexels.com/photos/17850755/pexels-photo-17850755/free-photo-of-view-of-the-canal-between-traditional-buildings-in-venice-italy.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      linkes:50,
      timespamp:'2h',
      message:75
    },
    {
      user:'Sridevi',
      postimage:'https://images.pexels.com/photos/18525949/pexels-photo-18525949/free-photo-of-heaven.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      linkes:55,
      timespamp:'2h',
      message:200
    },

  ])


  return (
    <div className='expolore_mainnn'>
        <div className='expolore_sideee'>
            <Side/>

        </div>

        <div className='expolore_expoloree'>
        <div className="timeline_postt">
            {
              posts.map(post=>(
                <Ppost user={post.user} postimage={post.postimage} like={post.linkes} mess={post.message} Timelink={post.timespamp} />
              ))
            }
          </div>

        </div>

    </div>
  )
}

export default Expolore
