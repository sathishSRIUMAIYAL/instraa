import React, { useState } from 'react'
import './SideStyle.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import SendIcon from '@mui/icons-material/Send';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Link ,NavLink} from 'react-router-dom'
import { Avatar } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ReportIcon from '@mui/icons-material/Report';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import img from '../../images/create.jpg'
function Side() {
        const [popup,setPop]=useState(false);
        const clickpopup=()=>{
                setPop(!popup);
        }
  return (
    <div>
        <div className='navbar'>
        <div className="imgg">
        <img className='logo' src="https://tse3.mm.bing.net/th?id=OIP.WOGID8FL8MiaeWfCeSvOzgHaCH&pid=Api&P=0&h=180" alt="" />
        <p className='pp'><InstagramIcon/></p>
      
        </div>
        <div className="sidenav_buttons">

        <button className="sidenav_button">
                <NavLink to='/home' style={{color:'white'}}><HomeIcon /></NavLink>
                <span>Home</span> 
        </button>

        <div class="offcanvas offcanvas-start" id="demo">
                <div class="offcanvas-header">
                        <div style={{display:'flex',flexDirection:'column'}}>
                                <h4 class="offcanvas-title">Search</h4>
                                
                        </div>
                </div>

                <div class="offcanvas-body">
                        <input type="search" class="form-control" id="pwd" placeholder="Search" name="pswd" required style={{width:'100%'}} />
                        <hr style={{width:'100%'}}/>
                        <div style={{display:'flex',justifyContent:' space-between'}}>
                                <h5>Recent</h5>
                                <a href='' >Clear all</a>
                        </div>
                        <div style={{display:'flex',justifyContent:' space-between', marginTop:"5%"}}>
                                
                                <div style={{display:'flex'}}>
                                        <Avatar>A</Avatar>
                                        <h6 style={{display:'flex',flexDirection:'column',marginLeft:'5%'}}>Aravinthan_sambath
                                        <small>.Following</small>
                                        </h6> 
                                </div>

                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                        </div>

                        <div style={{display:'flex',justifyContent:' space-between', marginTop:"5%"}}>
                                
                                <div style={{display:'flex'}}>
                                        <Avatar/>
                                        <h6 style={{display:'flex',flexDirection:'column',marginLeft:'5%'}}>Tharani_supu
                                        <small>.Following</small>
                                        </h6> 
                                </div>

                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                        </div>

                        <div style={{display:'flex',justifyContent:' space-between', marginTop:"5%"}}>
                                
                                <div style={{display:'flex'}}>
                                        <Avatar>R</Avatar>
                                        <h6 style={{display:'flex',flexDirection:'column',marginLeft:'5%'}}>Ram
                                        <small>.Following</small>
                                        </h6> 
                                </div>

                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                        </div>

                        <div style={{display:'flex',justifyContent:' space-between', marginTop:"5%"}}>
                                
                                <div style={{display:'flex'}}>
                                        <Avatar/>
                                        <h6 style={{display:'flex',flexDirection:'column',marginLeft:'5%'}}>Sambath
                                        <small>.Following</small>
                                        </h6> 
                                </div>

                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                        </div>
                        
                </div>
        </div>


        

        <button className="sidenav_button" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
                <SearchIcon />
                <span>Search</span> 
        </button>

        <button className="sidenav_button">
                <NavLink to="/expolore" style={{color:'white'}}><ExploreIcon /></NavLink>
                <span>Explore</span> 
        </button>

        <button className="sidenav_button">
                <NavLink to='/reel' style={{color:'white'}}><SlideshowIcon/></NavLink>
                <span>Reels</span>
        </button>


        <div class="offcanvas offcanvas-start" id="demo11">
                <div class="offcanvas-header">
                        <div style={{display:'flex',flexDirection:'column'}}>
                                <h4 class="offcanvas-title">Sathish</h4>
                                
                        </div>
                </div>

                <div class="offcanvas-body">
                        <div style={{display:'flex',justifyContent:' space-between'}}>
                                <h5>Message</h5>
                                <small>Requests</small>
                        </div>
                        <div style={{display:'flex',justifyContent:' space-between', marginTop:"5%"}}>
                                
                                <div style={{display:'flex',width:'100%'}}>
                                        <Avatar><img src='https://i.pinimg.com/originals/2f/c5/10/2fc510754eba5a57dab0bf1c53b07ac5.jpg'/></Avatar>
                                        <h6 style={{display:'flex',flexDirection:'column',marginLeft:'5%'}}>Tharani_subu
                                        <small style={{color:'gray'}}>You send an attachment</small>
                                        </h6> 
                                </div>
                        </div>

                        <div style={{display:'flex',justifyContent:' space-between', marginTop:"5%"}}>
                                
                                <div style={{display:'flex',width:'100%'}}>
                                        <Avatar>A</Avatar>
                                        <h6 style={{display:'flex',flexDirection:'column',marginLeft:'5%'}}>Aravinthan_sambath
                                        <small style={{color:'gray'}}>You send an attachment</small>
                                        </h6> 
                                </div>
                        </div>
                        <div style={{display:'flex',justifyContent:' space-between', marginTop:"5%"}}>
                                
                                <div style={{display:'flex',width:'100%'}}>
                                        <Avatar><img src='https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600'/></Avatar>
                                        <h6 style={{display:'flex',flexDirection:'column',marginLeft:'5%'}}>Sasi
                                        <small style={{color:'gray'}}>You send an attachment</small>
                                        </h6> 
                                </div>
                        </div>
                        <div style={{display:'flex',justifyContent:' space-between', marginTop:"5%"}}>
                                
                                <div style={{display:'flex',width:'100%'}}>
                                        <Avatar><img src='https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=600'/></Avatar>
                                        <h6 style={{display:'flex',flexDirection:'column',marginLeft:'5%'}}>Vasanth_sambath
                                        <small style={{color:'gray'}}>Vasanth send an attachment</small>
                                        </h6> 
                                </div>
                        </div>
                        <div style={{display:'flex',justifyContent:' space-between', marginTop:"5%"}}>
                                
                                <div style={{display:'flex',width:'100%'}}>
                                        <Avatar><img src='https://images.pexels.com/photos/3810915/pexels-photo-3810915.jpeg?auto=compress&cs=tinysrgb&w=600'/></Avatar>
                                        <h6 style={{display:'flex',flexDirection:'column',marginLeft:'5%'}}>Sambath
                                        <small style={{color:'gray'}}>You send an attachment</small>
                                        </h6> 
                                </div>
                        </div>
                        <div style={{display:'flex',justifyContent:' space-between', marginTop:"5%"}}>
                                
                                <div style={{display:'flex',width:'100%'}}>
                                        <Avatar><img src='https://images.pexels.com/photos/2430288/pexels-photo-2430288.jpeg?auto=compress&cs=tinysrgb&w=600'/></Avatar>
                                        <h6 style={{display:'flex',flexDirection:'column',marginLeft:'5%'}}>Umaiyal
                                        <small style={{color:'gray'}}>React &#128515; to your message</small>
                                        </h6> 
                                </div>
                        </div>
                        <div style={{display:'flex',justifyContent:' space-between', marginTop:"5%"}}>
                                
                                <div style={{display:'flex',width:'100%'}}>
                                        <Avatar><img src='https://images.pexels.com/photos/1042206/pexels-photo-1042206.jpeg?auto=compress&cs=tinysrgb&w=600'/></Avatar>
                                        <h6 style={{display:'flex',flexDirection:'column',marginLeft:'5%'}}>Athitan
                                        <small style={{color:'gray'}}>React &#128515; to your message</small>
                                        </h6> 
                                </div>
                        </div>
                        <div style={{display:'flex',justifyContent:' space-between', marginTop:"5%"}}>
                                
                                <div style={{display:'flex',width:'100%'}}>
                                        <Avatar><img src='https://images.pexels.com/photos/2072577/pexels-photo-2072577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/></Avatar>
                                        <h6 style={{display:'flex',flexDirection:'column',marginLeft:'5%'}}>Ram
                                        <small style={{color:'gray'}}>React &#128514; to your message</small>
                                        </h6> 
                                </div>
                        </div>
                        <div style={{display:'flex',justifyContent:' space-between', marginTop:"5%"}}>
                                
                                <div style={{display:'flex',width:'100%'}}>
                                        <Avatar><img src='https://images.pexels.com/photos/208425/pexels-photo-208425.jpeg?auto=compress&cs=tinysrgb&w=600'/></Avatar>
                                        <h6 style={{display:'flex',flexDirection:'column',marginLeft:'5%'}}>Aravinthan_sambath
                                        <small style={{color:'gray'}}>You send an attachment</small>
                                        </h6> 
                                </div>
                        </div>
                        <div style={{display:'flex',justifyContent:' space-between', marginTop:"5%"}}>
                                
                                <div style={{display:'flex',width:'100%'}}>
                                        <Avatar><img src='https://images.pexels.com/photos/2917373/pexels-photo-2917373.jpeg?auto=compress&cs=tinysrgb&w=600'/></Avatar>
                                        <h6 style={{display:'flex',flexDirection:'column',marginLeft:'5%'}}>Love
                                        <small style={{color:'gray'}}>React &#128151; to your message</small>
                                        </h6> 
                                </div>
                        </div>
                        <div style={{display:'flex',justifyContent:' space-between', marginTop:"5%"}}>
                                
                                <div style={{display:'flex',width:'100%'}}>
                                        <Avatar><img src='https://images.pexels.com/photos/2409409/pexels-photo-2409409.jpeg?auto=compress&cs=tinysrgb&w=600'/></Avatar>
                                        <h6 style={{display:'flex',flexDirection:'column',marginLeft:'5%'}}>Saran
                                        <small style={{color:'gray'}}>You send an attachment</small>
                                        </h6> 
                                </div>
                        </div>
 
 
                </div>
        </div>

        <button className="sidenav_button" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo11">
                 <SendIcon />
                <span>Message</span>
        </button>


        
        <div class="offcanvas offcanvas-start" id="demo22">
                <div class="offcanvas-header">
                        <div style={{display:'flex',flexDirection:'column'}}>
                                <h4 class="offcanvas-title">Notification</h4> 
                        </div>
                </div>
                

                <div class="offcanvas-body">
                <h5>New</h5>
                        <div style={{display:'flex',justifyContent:' space-between', marginTop:"5%"}}>
                        
                                <div style={{display:'flex',width:'100%'}}>
                                       
                                        <Avatar><img src='https://i.pinimg.com/originals/2f/c5/10/2fc510754eba5a57dab0bf1c53b07ac5.jpg'/></Avatar>
                                        <p style={{display:'flex',flexDirection:'column',marginLeft:'5%'}}>Boovarasan from your contact in instragran as boo12</p> 
                                </div>
                                <div>
                                <button className='btn btn-primary'>Follow</button>
                                </div>
                        </div>
                        <hr/>
                        <h5>This Week</h5>
                        <div style={{display:'flex',justifyContent:' space-between', marginTop:"5%"}}>
                        
                        <div style={{display:'flex',width:'100%'}}>
                               
                                <Avatar><img src='https://images.pexels.com/photos/2868224/pexels-photo-2868224.jpeg?auto=compress&cs=tinysrgb&w=600'/></Avatar>
                                <p style={{display:'flex',flexDirection:'column',marginLeft:'5%'}}>Sam  from your contact in instragran as sam222</p> 
                        </div>
                        <div>
                        <button className='btn btn-primary'>Follow</button>
                        </div>
                </div>
                <hr/>
                <h5>This month</h5>

                        <div style={{display:'flex',justifyContent:' space-between', marginTop:"5%"}}>
                                
                                <div style={{display:'flex',width:'100%'}}>
                                        <Avatar>P</Avatar>
                                        <p style={{display:'flex',flexDirection:'column',marginLeft:'5%'}}>poovarasi <small>started following you</small>
                                        </p>
                                </div>

                                <div>
                        <button className='btn btn-secondary'>Following</button>
                        </div>
                        </div>
                        <div style={{display:'flex',justifyContent:' space-between', marginTop:"5%"}}>
                                
                                <div style={{display:'flex',width:'100%'}}>
                                        <Avatar><img src='https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600'/></Avatar>
                                        <h6 style={{display:'flex',flexDirection:'column',marginLeft:'5%'}}>Sasi
                                        <small style={{color:'gray'}}>like your post</small>
                                        </h6> 
                                </div>
                        </div>
                        <div style={{display:'flex',justifyContent:' space-between', marginTop:"5%"}}>
                                
                                <div style={{display:'flex',width:'100%'}}>
                                        <Avatar><img src='https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=600'/></Avatar>
                                        <h6 style={{display:'flex',flexDirection:'column',marginLeft:'5%'}}>Vasanth_sambath
                                        <small style={{color:'gray'}}>might know is on instragram</small>
                                        </h6> 
                                </div>
                                <div>
                        <button className='btn btn-primary'>Follow</button>
                        </div>
                        </div>
                        <div style={{display:'flex',justifyContent:' space-between', marginTop:"5%"}}>
                                
                                <div style={{display:'flex',width:'100%'}}>
                                        <Avatar><img src='https://images.pexels.com/photos/3810915/pexels-photo-3810915.jpeg?auto=compress&cs=tinysrgb&w=600'/></Avatar>
                                        <h6 style={{display:'flex',flexDirection:'column',marginLeft:'5%'}}>Sambath
                                        <small style={{color:'gray'}}>might know is on instragram</small>
                                        </h6> 
                                </div>
                                <div>
                        <button className='btn btn-primary'>Follow</button>
                        </div>
                        </div>
                        <div style={{display:'flex',justifyContent:' space-between', marginTop:"5%"}}>
                                
                                <div style={{display:'flex',width:'100%'}}>
                                        <Avatar><img src='https://images.pexels.com/photos/2430288/pexels-photo-2430288.jpeg?auto=compress&cs=tinysrgb&w=600'/></Avatar>
                                        <h6 style={{display:'flex',flexDirection:'column',marginLeft:'5%'}}>Umaiyal
                                        <small style={{color:'gray'}}>might know is on instragram</small>
                                        </h6> 
                                </div>
                                <div>
                        <button className='btn btn-primary'>Follow</button>
                        </div>
                        </div>
                        <div style={{display:'flex',justifyContent:' space-between', marginTop:"5%"}}>
                                
                                <div style={{display:'flex',width:'100%'}}>
                                        <Avatar><img src='https://images.pexels.com/photos/1042206/pexels-photo-1042206.jpeg?auto=compress&cs=tinysrgb&w=600'/></Avatar>
                                        <h6 style={{display:'flex',flexDirection:'column',marginLeft:'5%'}}>Athitan
                                        <small style={{color:'gray'}}>might know is on instragram</small>
                                        </h6> 
                                </div>
                                <div>
                        <button className='btn btn-primary'>Follow</button>
                        </div>
                        </div>
                        <div style={{display:'flex',justifyContent:' space-between', marginTop:"5%"}}>
                                
                                <div style={{display:'flex',width:'100%'}}>
                                        <Avatar><img src='https://images.pexels.com/photos/2072577/pexels-photo-2072577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/></Avatar>
                                        <h6 style={{display:'flex',flexDirection:'column',marginLeft:'5%'}}>Ram
                                        <small style={{color:'gray'}}>React &#128514; to your message</small>
                                        </h6> 
                                </div>
                                <div>
                        <button className='btn btn-primary'>Follow</button>
                        </div>
                        </div>
                        <div style={{display:'flex',justifyContent:' space-between', marginTop:"5%"}}>
                                
                                <div style={{display:'flex',width:'100%'}}>
                                        <Avatar><img src='https://images.pexels.com/photos/208425/pexels-photo-208425.jpeg?auto=compress&cs=tinysrgb&w=600'/></Avatar>
                                        <h6 style={{display:'flex',flexDirection:'column',marginLeft:'5%'}}>Aravinthan_sambath
                                        <small style={{color:'gray'}}>might know is on instragram</small>
                                        </h6> 
                                </div>
                                <div>
                        <button className='btn btn-secondary'>Following</button>
                        </div>
                        </div>
                        <div style={{display:'flex',justifyContent:' space-between', marginTop:"5%"}}>
                                
                                <div style={{display:'flex',width:'100%'}}>
                                        <Avatar><img src='https://images.pexels.com/photos/2917373/pexels-photo-2917373.jpeg?auto=compress&cs=tinysrgb&w=600'/></Avatar>
                                        <h6 style={{display:'flex',flexDirection:'column',marginLeft:'5%'}}>Love
                                        <small style={{color:'gray'}}>might know is on instragram</small>
                                        </h6> 
                                </div>
                                <div>
                        <button className='btn btn-secondary'>Following</button>
                        </div>
                        </div>
                        <div style={{display:'flex',justifyContent:' space-between', marginTop:"5%"}}>
                                
                                <div style={{display:'flex',width:'100%'}}>
                                        <Avatar><img src='https://images.pexels.com/photos/2409409/pexels-photo-2409409.jpeg?auto=compress&cs=tinysrgb&w=600'/></Avatar>
                                        <h6 style={{display:'flex',flexDirection:'column',marginLeft:'5%'}}>Saran
                                        <small style={{color:'gray'}}>might know is on instragram</small>
                                        </h6> 
                                </div> <div>
                        <button className='btn btn-secondary'>Following</button>
                        </div>
                        </div>
 
 
                </div>
        </div>

        <button className="sidenav_button" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo22">
                <FavoriteBorderIcon />
                <span>Notification</span>
        </button>

        <div className='pop'>

        <button className="sidenav_button" onClick={clickpopup}>
               <AddCircleOutlineIcon />
                <span>Create</span>
        </button>
        <div>
        {popup?
        <div className='po_main'>
                <div className='popup'>
                        <div className='po-head'>
                               <h6 style={{marginTop:'10px'}}>create New Post</h6>
                               <hr></hr>
                               <img src={img}/>
                               <button>select from computer</button>
                        </div>
                </div>
        </div>:''}

        </div>
        </div>

        </div>
        <div className="sidnav_more dropup">
            <button className='sidenav_button dropdown-toggle' data-bs-toggle="dropdown">
                <MenuIcon/>
                <span>Menu</span>
            </button>

            <ul className="dropdown-menu" style={{width:'250px',height:'500px'}}>
                <li><a className="dropdown-item" href="#"><SettingsIcon/> Setting</a></li>
                <li><a className="dropdown-item" href="#"><AnalyticsIcon/> your activity</a></li>
                <li><a className="dropdown-item" href="#"> <TurnedInNotIcon/> Save</a></li>
                <li><a className="dropdown-item" href="#"><WbSunnyIcon/> Switch appearance</a></li>
                <li><a className="dropdown-item" href="#"><ReportIcon/> Report an probleam</a></li>
                <li><a className="dropdown-item" href="#">Threads</a></li>
                <li><a className="dropdown-item" href="#">Switch accounts</a></li>
                <li><a className="dropdown-item" href="#">Log out</a></li>
         
                
            </ul>
        </div>
        

       
    </div>
      
    </div>
  )
}

export default Side
