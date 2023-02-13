import React from 'react'
import "react-multi-carousel/lib/styles.css";
import Box from '@mui/material/Box';
import { Card, Avatar, Typography, Stack, IconButton, Divider } from '@mui/material';
import { LocationOn, Star } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import '../App.css';



function Featuredclg(props) {
  return (
    <div className='div-card' sx={{px:{xl:'70px', xs:'15px'}}}>
   <Card className='carousel-cards' sx={{ height: '120px', width:'350px', bgcolor: '#E1F8F3', borderRadius: "10px", boxShadow:7}}>

    <Box sx={{justifyContent:'center'}}>

     <Stack direction={'row'} py={2}  sx={{ alignItems: 'flex-start' }}>
        
        <Avatar sx={{ mx: 2, width: '40px', heigth: '40px' }} >
            <img width={50}
                src={props.logo}
            />
        </Avatar>
        <Stack spacing={1} justifyContent="center" width={250} >
            <Typography variant="body1" fontWeight={'bold'}>
               {props.name}
            </Typography>
            <Typography variant='subtitle2' sx={{ mt: -2 }} gutterBottom >
                <LocationOn
                    fontSize='3px'
                    sx={{ color: grey[400] }} />
               {props.district},{props.state}
            </Typography>

        </Stack>

        <IconButton sx={{ mt: -2, ml: 5 }} >
            <Typography color="black" variant="caption"> Featured </Typography>
            <Star sx={{ color: "goldenrod" }} fontSize="small" />
        </IconButton>

    </Stack>

</Box>

{/* <Divider orientation='horizontal' /> */}

</Card>

    </div>
   
   

  )
}

export default Featuredclg