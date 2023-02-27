// import { useState } from 'react';
// import React from 'react'
// import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
// import Input from '@mui/material/Input';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';


// const Contact1 = () => {

//   const [ formState, setFormState ] = useState({
//     name: "",
//     email: "",
//     message: "",
//     nameRequired: false,
//     messageRequired: false,
//     validEmailRequired: false
//   })

//   const handleInputChange = ({ target: { name, value } }) => {
//     setFormState({ ...formState, [name]: value })
//   }

//   const handleNameBlur = () => {
//     if(!formState.name){
//     setFormState({...formState, nameRequired: true, messageRequired: false, isValidEmail: false})
//     }
//   }

//   const handleMessageBlur = () => {
//     if(!formState.message){
//     setFormState({...formState, messageRequired: true, nameRequired: false, isValidEmail: false})
//     }
//   }

//   const isValidEmail = (inputText) => {
//     var testEmail =  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//     if(inputText.match(testEmail))
//     {
//       return true;
//       } else
//       return false;
//   }

//   const handleEmailBlur = () => {
//     if(isValidEmail(formState.email)) {
//       console.log('ok')
//     } else 
//       setFormState({...formState, validEmailRequired: true, messageRequired: false, nameRequired: false})
    
//   }

//   return (
//     <>
//     <Box bgcolor="#5E4955" height="100vh">
//     <Grid2 container justifyContent="center">
//         <Grid2 item>
//             <h2>
//                 Contact
//             </h2>
//         </Grid2>
//     </Grid2>

//     <Grid2 container justifyContent="center" variant='outlined' padding={3}>

//         <Grid2 item xs={12} md={8} lg={6} margin={2} border={1}>
//         <FormControl fullWidth>
//           <InputLabel htmlFor="my-input">Name</InputLabel>
//           <Input 
//           name="name"
//           onBlur={handleNameBlur}
//           onChange={handleInputChange}
//           aria-describedby="my-helper-text" variant='outlined' />
//         </FormControl>
//         </Grid2>

//         <Grid2 item xs={12} md={8} lg={6} margin={2} border={1}>
//         <FormControl fullWidth>
//           <InputLabel htmlFor="my-input">Email address</InputLabel>
//           <Input 
//            name="email"
//            onBlur={handleEmailBlur}
//            onChange={handleInputChange}
//           aria-describedby="my-helper-text" variant='outlined' />
//         </FormControl>
//         </Grid2>

//         <Grid2 item xs={12} md={8} lg={6} margin={2}>
//           <TextField
//             label="Message"
//             multiline
//             rows={4}
//             fullWidth
//             name="message"
//             onChange={handleInputChange}
//             onBlur={handleMessageBlur}
//           />
//         </Grid2>

//     </Grid2>

//     <Grid2 container justifyContent="center" padding={3} marginBottom={4}>
//       <Grid2 item xs={8} md={4} lg={2} border={1} color="blue">
//         <Button>Submit</Button>
//       </Grid2>
//     </Grid2>

//     <Grid2 container justifyContent="center">
//       {
//         formState.nameRequired? <p>Field is required!</p> : ""
//       }
//        {
//         formState.messageRequired? <p>Please enter your message.</p> : ""
//       }
//       {
//         formState.validEmailRequired? <p>Please enter a valid email address!</p> : ""
//       }

//     </Grid2>
    
//     </Box>
//     </>
//   )
// }

// export default Contact1