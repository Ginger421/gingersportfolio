import React from "react";
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import pic from './pic.jpg'
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import './assets/About.css'
import { WrapText } from "@mui/icons-material";


function About() {
    return (
        
        <Box className="box">

        <Grid2 xs={12} md={8} lg={6} >
            <h1 className="name">About Me</h1>
        </Grid2>
        
        <Grid2  container padding={1} spacing={1} >
            
            <Grid2 xs={12} md={8} className="aboutMain" >
                <Grid2 xs={12} md={4} >
                    <Avatar className="myPic" alt="Virginia Owen" src={pic} sx={{ width: 1, height: 1 }}  />
                    <p className="about-p" xs={12} md={4} lg={3} >
                        Hi and thank you for taking the time to check out my page! I am a developer based in Denver, Colorado. I love the magic of writing code and seeing it rendered on a web page! I recently earned a certificate for completing the University of Denver's Full Stack Coding Boot Camp. I have experience working with HTML5, CSS3, JavaScript ES6, Node.js, Express.js, SQL, MongoDB, React.js, Tailwind CSS and Bootstrap. 
                    </p> 
                </Grid2>

            </Grid2>

         </Grid2>

        </Box>
            
    );
}

export default About;
