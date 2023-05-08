import React from 'react'
import './Home.css'
// import {TextField }  from "@material-ui/core";
import { TextField } from '@mui/material';
const Home = () => {
  return (
    <div className='content'>

      <div className="settings">

        <span style={{fontSize : 30}}>Quiz Settings </span>

          <div className="settings_select">
          <TextField 
          style={{marginBottom : 25}}          
          label="Enter Your name " variant="outlined" />

          </div>




      </div>
      <img src="/quiz.svg" className='banner' alt="" srcset="" />


      
      </div>
  )
}

export default Home