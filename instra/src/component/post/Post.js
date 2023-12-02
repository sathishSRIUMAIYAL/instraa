import React from 'react'
import './PostStyle.css'
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';



function Post({user,postimage,like,Time}) {
  return (
    <div className='post'>
        <div className="post_header">
            <div className="post_headerhhh">
            <Avatar className='ss'>{user.charAt(0).toUpperCase()}</Avatar>
            {user}_<span>{Time}</span>
            </div>
            <MoreHorizIcon/>
        </div>

        <div className="post_image">
        <img src={postimage} alt="" style={{width:'100%',height:'50vh'}} />
        </div>
        
        <div className="post_footer">
            <div className="post_fotericon">
                <div className="post_iconsmain"> <div className="post_iconSave">
                    <FavoriteBorderIcon className='posticon'/>
                    <ChatBubbleOutlineIcon className='posticon'/>
                    < TelegramIcon className='posticon'/>
                </div>
                </div>
               
                <BookmarkBorderIcon className='posticon'/>
            </div>
            Liked by {like} people
        </div>
    </div>
  )
}

export default Post