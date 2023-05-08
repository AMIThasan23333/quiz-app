import React from 'react'
import './Home.css'
// import {TextField }  from "@material-ui/core";
import { MenuItem, TextField } from '@mui/material';
import Categories from '../../Components/Data/Categories';
const Home = () => {
  return (
    <div className='content'>

      <div className="settings">

        <span style={{fontSize : 30}}>Quiz Settings </span>

          <div className="settings__select">
          <TextField 
          style={{marginBottom : 25}}          
          label="Enter Your name " variant="outlined" />

             
        <TextField
        
        select
        label="Select Category"
        variant='outlined'
        style={{marginBottom : 30}}  
        > 

          
           {

            Categories.map((cat) => (

                        
                  <MenuItem  key={cat.category} value={cat.value}>
                    {cat.category}
                  </MenuItem>

            ))
           }


        

        </TextField>


          </div>
      </div>
      <img src="/quiz.svg" className='banner' alt="" srcset="" />


      
      </div>
  )
}

export default Home