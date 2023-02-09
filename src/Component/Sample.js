import React from 'react'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { CardHeader, Typography, CardMedia, CardContent, CardActions, Stack ,Button} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

var buttonStyle = {
    maxwidth: '60px',
    maxheight: '33px',
    pt: '3',
    mt:'20px'

}


function Sample() {
  return (

  
    <Grid container spacing = {2}>

        <Card sx={{maxWidth : 360}}>

            <CardHeader 
                avatar={
                    <Avatar sx={{bgcolor : red[500]}} aria-label="college">
                        A
                    </Avatar>
                }
                title = {
                    <>
                    <Typography variant='h6' fontWeight="bold"  >Anna University</Typography>
                    <Typography variant='body2' fontWeight="Regular" sx={{ fontSize: 12}} >Chennai, TamilNadu</Typography>
                    </>
                }

                />

                <CardMedia 
                component="img"
                height="194"
                image="https://www.annauniv.edu/images/ceg_campus.jpeg"
                />

                <CardContent>
                    <Grid container spacing = {3}>
                        <Grid sx={{p:2}}>
                        <Typography sx={{ fontSize : 15}} >B.E/B.Tech</Typography>
                        <Typography variant='subtitle2'>85,000</Typography>
                        </Grid>
                      

                        <Grid sx={{p:2
                        }}>
                        <Typography sx={{ fontSize : 15}} >JEE ADVANCED</Typography>
                        <Typography variant='subtitle2' sx={{ fontSize : 13}} >exams accepted</Typography>
                        </Grid>

                    </Grid>


                   
                </CardContent>
                <CardActions>

                   <Stack spacing={2} direction="row">

                   <Button variant="outlined" style={buttonStyle} size="small" >
            <ArrowForwardIcon sx={{fontSize : "20px", pr:'10px' }} />
                Apply now</Button>
            <Button variant="outlined"  style={buttonStyle} size="small">
                <FileDownloadOutlinedIcon sx={{fontSize : "20px", pr:'10px' }}/>
                 brochure </Button>
 
                   </Stack>


                </CardActions>

               

                
                
                
            
           
        </Card>

       

    </Grid>
    
  )
}

export default Sample
