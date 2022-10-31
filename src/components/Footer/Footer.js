import React from 'react'
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./style.css"



const Footer = () => {
  return (
    <>
    <Grid2 className="footer" container justifyContent="center" spacing="evenly" padding={4} color="#F2B591ff">
        <Grid2 item xs={12} md={4}>  
          <a href="https://github.com/Ginger421" target="_blank" >
            <GitHubIcon></GitHubIcon> 
          </a>       
        </Grid2>

        <Grid2 item xs={12} md={4}>
          <a href='https://www.linkedin.com/in/virginia-owen-715048237' target="blank">
            <LinkedInIcon></LinkedInIcon>
          </a>
        </Grid2>

        <Grid2 item xs={12} md={4}>
          <a href='https://www.instagram.com/' target="blank">
            <InstagramIcon></InstagramIcon>
          </a>
        </Grid2>

    </Grid2>
    </>
  )
}

export default Footer;