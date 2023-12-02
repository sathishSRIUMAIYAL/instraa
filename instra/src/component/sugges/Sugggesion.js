import './SuggesionStyle.css'
import React from 'react'
import { Avatar } from '@mui/material'

function Sugesstions() {
  return (
    <div className='suggesions'>
      <div className="suggestions_title">
        Suggestion for you
      </div>
      <div className="suggesition_usernames">
        <div className="suggesition_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>T</Avatar>
            </span>
            <div className="user_info">
              <span className="username">Thara</span>
              <span className="relation">Follows you</span>
            </div>

          </div>
          <button className='follow_button'>Follow</button>
        </div>

        <div className="suggesition_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>S</Avatar>
            </span>
            <div className="user_info">
              <span className="username">Saran</span>
              <span className="relation">Follows you</span>
            </div>

          </div>
          <button className='follow_button'>Follow</button>
        </div>

        <div className="suggesition_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>C</Avatar>
            </span>
            <div className="user_info">
              <span className="username">Chidam</span>
              <span className="relation">Follows you</span>
            </div>

          </div>
          <button className='follow_button'>Follow</button>
        </div>

        <div className="suggesition_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>A</Avatar>
            </span>
            <div className="user_info">
              <span className="username">Aravin</span>
              <span className="relation">Follows you</span>
            </div>

          </div>
          <button className='follow_button'>Follow</button>
        </div>

        <div className="suggesition_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>D</Avatar>
            </span>
            <div className="user_info">
              <span className="username">Deena</span>
              <span className="relation">Follows you</span>
            </div>

          </div>
          <button className='follow_button'>Follow</button>
        </div>

        <div className="suggesition_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>E</Avatar>
            </span>
            <div className="user_info">
              <span className="username">Esan</span>
              <span className="relation">Follows you</span>
            </div>

          </div>
          <button className='follow_button'>Follow</button>
        </div>

      </div>
    </div>
  )
}

export default Sugesstions