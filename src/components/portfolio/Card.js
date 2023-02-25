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
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={props.title}
        subheader=""
      />
      <CardMedia
        component='img'
        height="194"
        image={props.image}
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












// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function ImgMediaCard({title, repo, deployed, image}) {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardHeader
//         title={props.title}
//         subheader=""
//       />
//       <CardMedia
//         component='img'
//         height="194"
//         image={props.image}
//         alt="Screenshot"
//       />

//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
          
//         </Typography>
//       </CardContent>
//       <CardActions spacing={2}>
//         <IconButton>
//           <a href={props.repo} target="_blank" >
//             <GitHubIcon padding={2} /> 
//           </a>
//         </IconButton>

//         <IconButton>
//           <a href={props.deployed} target="_blank" >
//             <LinkIcon padding={2} /> 
//           </a>
//         </IconButton>
        

//       </CardActions>
     
//     </Card>
//   );
// }

//original card code

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function ImgMediaCard({title, github, deployed, image}) {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardHeader
//         title={props.title}
//         subheader=""
//       />
//       <CardMedia
//         component='img'
//         height="194"
//         image={props.image}
//         alt="Screenshot"
//       />

//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
          
//         </Typography>
//       </CardContent>
//       <CardActions spacing={2}>
//         <IconButton>
//           <a href={props.repo} target="_blank" >
//             <GitHubIcon padding={2} /> 
//           </a>
//         </IconButton>

//         <IconButton>
//           <a href={props.deployed} target="_blank" >
//             <LinkIcon padding={2} /> 
//           </a>
//         </IconButton>
        

//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
          
//           <Typography paragraph>
            
//           </Typography>
//           <Typography paragraph>
        
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }


// <Card sx={{ maxWidth: 345 }}>
// <CardHeader
//   title={title}
//   subheader=""
// />
// <CardMedia
//   component='img'
//   height="194"
//   image='{image}'
//   alt="Screenshot"
// />

// <CardContent>
//   <Typography variant="body2" color="text.secondary">
    
//   </Typography>
// </CardContent>
// <CardActions spacing={2}>
//   <IconButton>
//     <a href={github} target="_blank" >
//       <GitHubIcon padding={2} /> 
//     </a>
//   </IconButton>

//   <IconButton>
//     <a href={deployed} target="_blank" >
//       <LinkIcon padding={2} /> 
//     </a>
//   </IconButton>
  

// </CardActions>
// <Collapse in={expanded} timeout="auto" unmountOnExit>
//   <CardContent>
    
//     <Typography paragraph>
      
//     </Typography>
//     <Typography paragraph>
  
//     </Typography>
//   </CardContent>
// </Collapse>
// </Card>