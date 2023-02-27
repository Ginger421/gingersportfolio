import React, { Component } from 'react'
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Box from '@mui/system/Box';
import PortfolioCard from './Card';
import PWGen from './images/pwgen.png'
import shutterUpStorage from './images/shutterUpStorage.png'
import JATE from './images/JATE_w_code_sm.png'
import weatherAPI from './images/weatherAPI.png'




const Portfolio = () => {
    const apps = [
        // {
        //     title:"ShutterUp",
        //     repo:"https://github.com/Ginger421/ShutterUp",
        //     deployed:"https://desolate-cove-27983.herokuapp.com/",
        //     image: shutterUpStorage,
        //     description:
        //     id: 1,
        // },
        {
            title:"Weather API",
            repo:"https://github.com/Ginger421/weather-api",
            deployed:"https://ginger421.github.io/weather-api/",
            image: weatherAPI,
            description: "This application generates a five day weather forecast for users. Technologies: HTML, CSS, JavaScript and Bootstrap",
            id: 2,
        },
        {
            title:"Password Generator",
            repo:"https://github.com/Ginger421/Password-Generator",
            deployed:"https://ginger421.github.io/Password-Generator/",
            image: PWGen,
            description: "This application generates a random password for users. Technologies: HTML, CSS and Javascript",
            id: 3,
        },
        {
            title:"textEditor-19",
            repo:"https://github.com/Ginger421/textEditor-19",
            deployed:"https://texteditor1919.herokuapp.com/",
            image: JATE,
            description: "This application is a text editor and can be downloaded by users. Technologies: PWA, HTML, CSS and JavaScript",
            id: 4,
        },
        // {
        //     title:"Challenge18",
        //     repo:"https://github.com/Ginger421/Friends-SocialMedia",
        //     deployed:"",
        //     image:"",
        //     id: 5,
        // }
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
                description={app.description}
                repo={app.repo} 
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