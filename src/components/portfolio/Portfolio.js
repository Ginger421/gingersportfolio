import React, { Component } from 'react'
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Box from '@mui/system/Box';
import shutterUp from './images/shutterUp.png'
import PortfolioCard from './Card';




const Portfolio = () => {
    const apps = [
        {
            title:"ShutterUp",
            repo:"https://github.com/Ginger421/ShutterUp",
            deployed:"https://desolate-cove-27983.herokuapp.com/",
            image: shutterUp,
            id: 1,
        },
        {
            title:"Weather API",
            repo:"https://github.com/Ginger421/weather-api",
            deployed:"https://ginger421.github.io/weather-api/",
            image: "https://unsplash.com/photos/XSUvsYl_LrE?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
            id: 2,
        },
        {
            title:"Password Generator",
            repo:"https://github.com/Ginger421/Password-Generator",
            deployed:"https://ginger421.github.io/Password-Generator/",
            image:"../assets/images/GenPw_sm.png",
            id: 3,
        },
        {
            title:"textEditor-19",
            repo:"https://github.com/Ginger421/textEditor-19",
            deployed:"https://texteditor1919.herokuapp.com/",
            image:"",
            id: 4,
        },
        {
            title:"Portfolio",
            repo:"https://github.com/Ginger421/gingersportfolio",
            deployed:"",
            image:"",
            id: 5,
        },
        {
            title:"Challenge18",
            repo:"https://github.com/Ginger421/Friends-SocialMedia",
            deployed:"",
            image:"",
            id: 6,
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
                <PortfolioCard 
                title={app.title} 
                image={app.image} 
                github={app.repo} 
                deployed={app.deployed} 
                id={app.id}
                key={app.id}>

                </PortfolioCard>
            </Grid2>
                )}
    </Grid2>
    </Box>
    </>
  )
};

export default Portfolio;