import React, { useState } from 'react'
import './LoginStyle.css'
import {Link, useNavigate} from 'react-router-dom'
import {auth} from '../login/firebase'

function Login() {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigat=useNavigate();

    const handlog=async(e)=>{
        e.preventDefault();

        try{
            await auth.signInWithEmailAndPassword(email,password)
            navigat("/home")

        }
        catch(error){
            console.error(error)
            alert("Invalide Email and password")

        }



    }



  return (
    <div className='Main_container'>
        <div className='container'>
            <div className='inst_img'>
                <img src="https://miro.medium.com/max/1062/0*6V0TKYKHWq-D10M5." alt="instragram" loading="lazy" />
            </div>
            <div className='one'>
                <div className='log_page'>
                <img src="https://th.bing.com/th/id/OIP.AI0M8M-FndA36k8cNsDauQHaCp?w=2880&h=1029&rs=1&pid=ImgDetMain" alt="" style={{width:'70%',margin:'50px'}} />
                <div className='inside'>
                    <form onSubmit={handlog}>
                        <div className='inputs'>
                            <input type="email"   value={email}   onChange={(e)=>setEmail(e.target.value)}id='email' placeholder='Phone number , username, or email' />
                            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} id='password'  placeholder='Password' />
                        </div>
                        <button type='submit'>Log in </button>
                    </form>
                    <div className="or">OR</div>
                    <strong> <i className="fa-brands fa-square-facebook"></i>Log in with Facebook</strong>
                    <a href="/">Forgot Password ?</a>  
                </div>
                </div>
                <div className="dont">
                    <span> Don't have an account?<Link to='sign'>Sign Up</Link></span>
                </div>
                <div className="playstore">
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

export default Login
