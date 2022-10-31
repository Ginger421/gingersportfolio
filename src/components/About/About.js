import React from "react";
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import pic from './pic.jpg'
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';



function About() {
    return (
        <Box bgcolor='#0C1D3Fff'>
        <Grid2 justifyContent="center" container padding={2} spacing={2}>
            <Grid2 xs={12} md={6}>
                <Grid2 xs={12} md={4}>
                    <Avatar alt="Virginia Owen" src={pic} sx={{ width: 1, height: 1 }}  />
                </Grid2>
                <Grid2 xs={12} md={4} lg={3} >
                    <h1>Virginia Owen</h1>
                    <p>Hi, I am an inquisitive and tenacious aspiring web developer. I recently earned a coding certificate for  completing the University of Denver's Full Stack Coding Boot Camo</p>
                </Grid2>

            </Grid2>

         </Grid2>

        </Box>
            
    );
}

export default About;