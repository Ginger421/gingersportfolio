import React from 'react'
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import ImgMediaCard from "./Card";
import Box from '@mui/system/Box';

const Portfolio = () => {
    let apps = [
        {
            title:"ShutterUp",
            github:"https://github.com/Ginger421/ShutterUp",
            deployed:"https://desolate-cove-27983.herokuapp.com/",
            image:"/shutetrUp.png",
        },
        {
            title:"Weather API",
            github:"https://github.com/Ginger421/weather-api",
            deployed:"https://ginger421.github.io/weather-api/",
            image:"https://unsplash.com/photos/XSUvsYl_LrE?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
        },
        {
            title:"Password Generator",
            github:"https://github.com/Ginger421/Password-Generator",
            deployed:"https://ginger421.github.io/Password-Generator/",
            image:"../assets/images/GenPw_sm.png",
        },
        {
            title:"textEditor-19",
            github:"https://github.com/Ginger421/textEditor-19",
            deployed:"https://texteditor1919.herokuapp.com/",
            image:"",
        },
        {
            title:"Portfolio",
            github:"https://github.com/Ginger421/gingersportfolio",
            deployed:"",
            image:"",
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
    <Box bgcolor="#C6DDF0">
    <Grid2 container justifyContent="center">
        <h2>Portfolio</h2>
    </Grid2>

    <Grid2 container spacing={2} padding={2}>
        {apps.map(app =>
            <Grid2 item>
                <ImgMediaCard title={app.title} github={app.github} deployed={app.deployed} image={app.image}>

                </ImgMediaCard>
            </Grid2>
                )}
    </Grid2>
    </Box>
    </>
  )
};

export default Portfolio;