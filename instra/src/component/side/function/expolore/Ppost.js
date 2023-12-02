import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import './PpostStyle.css'



function Post({user,postimage,like,Time,mess}) {
  return (
    <div className='posttt'>
        <div className="post_imagee">
            <img src={postimage} alt="" style={{width:'300Px',height:'400px'}}  />
            <div className='fflex'>
                <div>
                    <FavoriteBorderIcon className='posticonn'/>
                    <h5>{like}</h5>
                </div>
               
                <div>
                    <ChatBubbleOutlineIcon className='posticonn'/>
                    <h5>{mess}</h5>
                </div>

            </div>
        </div>
        
             
        </div>
  )
}

export default Post