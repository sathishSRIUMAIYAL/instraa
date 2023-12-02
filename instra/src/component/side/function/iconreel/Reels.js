import React, { useEffect, useState } from 'react'
import Side from '../../Side'
import './ReelsStyle.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


function Reels() {

  const [record,setRecord]=useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then( response => response.json())
    .then(data=> setRecord(data))
    .catch(err => console.log(err))
  },[])

  return (
    <div className='reels_page'>
        <div className='side_reelsicon'>
            <Side/>
        </div>

        <div className='reels_page'>
          <div className='ok'>
            <ul>
              
              {record.slice(0,20).map((list,index)=>(
                <div className='flex'>
                <li key={index}><img style={{width:'350px',height:'600px'}} src={list.url} />
                <div className='iconn'>
                < FavoriteBorderIcon className='ii' titleAccess='Like'/>
                <h6>Likes</h6>
                < MessageIcon className='ii' titleAccess='Message'/>
                <h6>150</h6>
                < TelegramIcon className='ii' titleAccess='Direct'/>
                < BookmarkBorderIcon className='ii' titleAccess='Save'/>
                < MoreHorizIcon className='ii' titleAccess='More'/>
                
                </div> 
                </li>
                </div>
              
              ))}
             
              
            </ul>
            
          </div>
            

        </div>

    </div>

  )
}

export default Reels
