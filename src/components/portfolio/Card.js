import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

const PortfolioCard = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }} className="cards">
      <CardHeader
        title={props.title}
        subheader=""
      />
      <CardMedia className='screenshot'
        component='img'
        height="220"
        image={props.image}
        object-fit="contain"
        alt="Screenshot"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions spacing={2}>
        <IconButton>
          <a href={props.repo} target="_blank" >
            <GitHubIcon padding={2} /> 
          </a>
        </IconButton>

        <IconButton>
          <a href={props.deployed} target="_blank" >
            <LinkIcon padding={2} /> 
          </a>
        </IconButton>
        

      </CardActions>
     
    </Card>
  );
}; //end PortfolioCard

export default PortfolioCard;




