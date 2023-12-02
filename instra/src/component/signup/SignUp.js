import React from 'react'
import './SignUpStyle.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {auth} from '../login/firebase'


function SignUp() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigat=useNavigate();

    const handReg=async(e)=>{
        e.preventDefault();
        try{
            await auth.createUserWithEmailAndPassword(email,password)
            alert('Email id Registered Successfully Update ,Ready to Login')
            navigat('/')
        }
        catch(error){
            console.error(error)
            alert(error)
        }

    }

  return (
    <div className='main_container'>
        <div className='containerr'>
            <div className='one'>
                <div className='log_pagee'>
                    <img src="https://th.bing.com/th/id/OIP.AI0M8M-FndA36k8cNsDauQHaCp?w=2880&h=1029&rs=1&pid=ImgDetMain" alt="" style={{width:'70%',margin:'50px'}} />
                    <div className='inside'>
                        <div className="conn">
                            <strong style={{color:"rgb(169, 167, 165)"}}>Sign up to see photos and videos from your friends.</strong>
                        </div>
                        <button><i class="fa-brands fa-square-facebook"></i> Log in with Facebook</button>
                        <div className="or">OR</div>
                        <form onSubmit={handReg}>
                            <div className="inputs">
                                <input type="email" value={email}   onChange={(e)=>setEmail(e.target.value)}  placeholder='Phone number , username, or email' />
                                <input type="text" name="" id="" placeholder='Full name' />
                                <input type="text" name="" id="" placeholder='Username' />
                                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
                            </div>
                        
                        <div className='para'>People who use our service may have uploaded your contact information to Instagrama <a href="/" >Learn more</a></div>
                        <div className='para'>By signing up, you agree to our <span>Terms</span> , <span>Privacy</span> <span>Policy </span>and <span>Cookies Policy</span> .</div>
                        <button style={{marginTop:'10px'}} type='submit'>Sign up</button>
                        </form>
                    </div>
                </div>
                <div className='dont'>
                    <span>Have an account?<Link to="/">Log in</Link></span>
                </div>
                <div className='playstore'>
                    Get the app
                    <img src="https://manuals.plus/wp-content/uploads/2022/04/Oladance-B1-Wearable-Stereo-Earbuds-icon.png" alt="" style={{width:'100%'}} />
                </div>
            </div>
        </div>
        <div className="log_bottom">
                <div className="link_bottom">
                    <a href="/">Meta</a><a href="/">About</a><a href="/">Blog</a><a href="/">Jobs</a><a href="/">APl</a><a href="/">Privacy</a><a href="/">Location</a><a href="/">Instragram Lit</a><a href="/">Threads</a><a href="/">Contact Uploading & Non-Users</a><a href="/">Meta Verified</a>
                </div>
                <div className="copy_bottom">
                    <a href="/">English</a>
                    <p>2023 Instagram from Meta</p>
                </div>
            </div>

    </div>
  )
}

export default SignUp
