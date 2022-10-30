import React from 'react'
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2


const Applications = () => {
    let apps = [
        {
            title:"ShutterUp",
            repo:"https://github.com/Ginger421/ShutterUp",
            deployed:"https://desolate-cove-27983.herokuapp.com/",
            image:""
        },
        {
            title:"Weather API",
            repo:"https://github.com/Ginger421/weather-api",
            deployed:"https://ginger421.github.io/weather-api/",
            image:""
        },
        {
            title:"Password Generator",
            repo:"https://github.com/Ginger421/Password-Generator",
            deployed:"https://ginger421.github.io/Password-Generator/",
            image:""
        },
        {
            title:"textEditor-19",
            repo:"https://github.com/Ginger421/textEditor-19",
            deployed:"https://texteditor1919.herokuapp.com/",
            image:""
        },
        {
            title:"Portfolio",
            repo:"https://github.com/Ginger421/gingersportfolio",
            deployed:"",
            image:""
        },
        {
            title:"Challenge18",
            repo:"https://github.com/Ginger421/Friends-SocialMedia",
            deployed:"",
            image:""
        }
]

  return (
    <>
    <Grid2 container justifyContent="center">
        <h2>Applications</h2>

    </Grid2>

    </>
  )
};

export default Applications;