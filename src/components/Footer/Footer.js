import React from 'react'
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./style.css"



const Footer = () => {
  return (
    <>
    <Grid2 className="footer" container justifyContent="center" spacing="evenly" padding={1} >
        <Grid2 item xs={12} md={4} borderColor='white'>  
          <a href="https://github.com/Ginger421" target="_blank" >
            <GitHubIcon color="action"></GitHubIcon> 
          </a>       
        </Grid2>

        <Grid2 item xs={12} md={4}>
          <a href='https://www.linkedin.com/in/virginia-owen-715048237' target="blank">
            <LinkedInIcon color='action'></LinkedInIcon>
          </a>
        </Grid2>


    </Grid2>
    </>
  )
}

export default Footer;