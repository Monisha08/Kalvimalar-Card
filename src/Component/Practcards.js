import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Avatar, CardHeader, Divider, Typography , CardMedia } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CardActions from '@mui/material/CardActions';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';


var boxline =(
<Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    <Divider orientation='vertical' flexItem/>
  </Box>

);


var boxStyle = (

    <Box display="table-cell"
    justifyContent="center"
    alignItems="center"
    >  
    </Box>

);

var cardStyle = {
    width: '60vw',
    height: '15vw',
    display : 'block'

}

var buttonStyle = {
    maxwidth: '60px',
    maxheight: '33px',
    padding: '3'
    

}

var divcolor ={
    dividerColor: {
    backgroundColor: 'grey',
  }
}

function Practcards() {
  return (
    
    <Grid container spacing = {2}>

    <Grid item xlg={4}> </Grid>

    <Grid item xlg= {8} >

    <Card sx={{ minWidth : 400 }}  style={cardStyle} >

        <Grid container spacing = {1}>

            <Grid item xlg={3}>
                   <Card>

                   <CardMedia
                    component = 'img'
                    height = '150'
                    image = 'https://content.jdmagicbox.com/comp/chennai/57/044pf011357/catalogue/mop-vaishnav-college-for-women-nungambakkam-chennai-arts-colleges-3b4ismh.jpg?clr=3d471f'

                    />

                   </Card>
                   

            </Grid>

            <Divider orientation='vertical' flexItem />
            <Grid item xlg={5} >

            <Grid container spacing = {1}>

            <Grid item xlg={3} >

            <CardHeader 
              title = {
                <>
                <Typography variant='body1' fontWeight="bold" >M.O.P. Vaishnav College For Women</Typography>
                <Typography variant='body2' fontWeight="Regular" >Chennai, TamilNadu</Typography>
                </>
              }
              avatar={
                <Avatar sx={{width:"40px"}} >
                    M
                </Avatar>
              }
            />
           
            <CardContent sx={{display:"table-row"}}>

                <Grid item  display={'flex'}>

                <Grid display="table-cell"  sx={{pr:'20px'}}  >
                    <Typography variant='subtitle2'>85,000</Typography>
                    <Typography sx={{ fontSize : 10}} >MBA -first year fees</Typography>
                    
                </Grid>
                
                <Grid display="table-cell"  sx={{pr:'20px'}}>
                    <Typography variant='subtitle2' >TANCET/CAT</Typography>
                    <Typography sx={{ fontSize : 10}} >Exam accepted</Typography>
                    
                </Grid>
            
                <Grid display="table-cell"   sx={{pr:'20px'}}>
                    <Typography variant='subtitle2'>8/10</Typography>
                    <Typography sx={{ fontSize : 10}}>Based on 400 user review</Typography>
                </Grid>

                </Grid>

               
</CardContent>

            <CardActions>

               <Stack spacing={2} direction="row">

            <Button variant="outlined" style={buttonStyle} size="small" >
            <SchoolOutlinedIcon sx={{fontSize : "20px", pr:'10px'}} />
                Admission</Button>
            <Button variant="outlined"  style={buttonStyle} size="small">
                <MenuBookOutlinedIcon sx={{fontSize : "20px", pr:'10px' }}/>
                 Course&fees </Button>
            <Button variant="outlined"  style={buttonStyle} size="small">
                <StarBorderPurple500OutlinedIcon sx={{fontSize : "20px", pr:'10px'}}/> Review</Button>

            </Stack>

            </CardActions>

            </Grid>

            <Divider orientation="vertical" flexItem />

            <Grid item xlg={2} >


               <CardActions>

               <Stack spacing={2}   >

            <Button variant="contained" color='primary' >
                
                Apply now</Button>
            <Button variant="contained"  color='primary'>Brochure</Button>
            <Button variant="contained"  color='primary'>Compare</Button>

               </Stack>


            </CardActions>

            </Grid>

            </Grid>

        </Grid>

        </Grid>

     </Card>

     <Card sx={{ minWidth : 400 }}  style={cardStyle} >

     <Grid container spacing = {1}>

       <Grid item xlg={3} >
      
       <Card>

        <CardMedia
        component = 'img'
        height = '150'
        image = 'https://static.zollege.in/public/college_data/images/campusimage/1563347367infraaaaa.jpg'
        />

     </Card>

</Grid>

<Divider orientation='vertical' flexItem />
<Grid item xlg={5} >

<Grid container spacing = {1}>

<Grid item xlg={3} >

<CardHeader 
  title = {
    <>
    <Typography variant='body1' fontWeight="bold" >Ethiraj College For Women</Typography>
    <Typography variant='body2' fontWeight="Regular" >Chennai, TamilNadu</Typography>
    </>
  }
  avatar={
    <Avatar sx={{width:"40px"}} >
        E
    </Avatar>
  }
/>
<CardContent sx={{display:"table-row"}}>

<Box display="table-cell" align="center" sx={{pr:'20px'}}  >
    <Typography variant='subtitle2'>80,000</Typography>
    <Typography sx={{ fontSize : 10}} >MBA -first year fees</Typography>
    <Divider orientation='vertical' backgroundColor="secondary.light" />
</Box>

<Box display="table-cell" align="center" sx={{pr:'20px'}}>
    <Typography variant='subtitle2' >TANCET/CAT</Typography>
    <Typography sx={{ fontSize : 10}} >Exam accepted</Typography>
    <Divider orientation='vertical' flexItem />
</Box>

<Box display="table-cell"  align="center" sx={{pr:'20px'}}>
    <Typography variant='subtitle2'>8/10</Typography>
    <Typography sx={{ fontSize : 10}}>Based on 400 user review</Typography>
</Box>
</CardContent>

<CardActions >

   <Stack spacing={2} direction="row">

<Button variant="outlined" style={buttonStyle} size="small" >
<SchoolOutlinedIcon sx={{fontSize : "20px", pr:'10px' }} />
    Admission</Button>
<Button variant="outlined"  style={buttonStyle} size="small">
    <MenuBookOutlinedIcon sx={{fontSize : "20px" , pr:'10px' }}/>
     Course&fees </Button>
<Button variant="outlined"  style={buttonStyle} size="small">
    <StarBorderPurple500OutlinedIcon sx={{fontSize : "20px", pr:'10px' }}/> Review</Button>

</Stack>

</CardActions>

</Grid>

<Divider orientation="vertical" flexItem />

<Grid item xlg={2} >


   <CardActions>

   <Stack spacing={2}   >

<Button variant="contained" color='primary'>
    
    Apply now</Button>
<Button variant="contained" color='primary'>Brochure</Button>
<Button variant="contained" color='primary'>Compare</Button>

   </Stack>


</CardActions>

</Grid>

</Grid>

</Grid>

</Grid>

     </Card>

     <Card sx={{ minWidth : 400 }}  style={cardStyle} >

        <Grid container spacing = {1}>

            <Grid item xlg={3}>

                <card>
                <CardMedia
                    component = 'img'
                    height = '150'
                    image =  'https://qph.cf2.quoracdn.net/main-qimg-3bc616320cea89177075f315e6b1c525-lq'

                    />
                </card>

                    

            </Grid>

            <Divider orientation='vertical' flexItem />
            <Grid item xlg={5} >

            <Grid container spacing = {1}>

            <Grid item xlg={3} >

            <CardHeader 
            title = {
                <>
                <Typography variant='body1' fontWeight="bold" >Women's Christian College</Typography>
                <Typography variant='body2' fontWeight="Regular" >Chennai, TamilNadu</Typography>
                </>
            }
            avatar={
                <Avatar sx={{width:"40px"}} >
                    W
                </Avatar>
            }
            />
            <CardContent sx={{display:"table-row"}}>
            
            <Box display="table-cell" align="center" sx={{pr:'20px'}}>
                <Typography variant='subtitle2'>90,000</Typography>
                <Typography sx={{ fontSize : 10}} >MBA -first year fees</Typography>
            </Box>
            <Divider orientation='Vertical' flexItem />
            <Box display="table-cell" align="center" sx={{pr:'20px'}}>
                <Typography variant='subtitle2' >TANCET/CAT</Typography>
                <Typography sx={{ fontSize : 10}} >Exam accepted</Typography>
            </Box>
            <Divider orientation='Vertical' flexItem />
            <Box display="table-cell" align="center" sx={{pr:'20px'}}>
                <Typography variant='subtitle2'>8/10</Typography>
                <Typography sx={{ fontSize : 10}}>Based on 400 user review</Typography>
            </Box>
            </CardContent>
            
            <CardActions>

            <Stack spacing={2} direction="row">

            <Button variant="outlined" style={buttonStyle} size="small" >
            <SchoolOutlinedIcon sx={{fontSize : "20px", pr:'10px' }}/>
                Admission</Button>
            <Button variant="outlined"  style={buttonStyle} size="small">
                <MenuBookOutlinedIcon sx={{fontSize : "20px" , pr:'10px' }}/>
                Course&fees </Button>
            <Button variant="outlined"  style={buttonStyle} size="small">
                <StarBorderPurple500OutlinedIcon sx={{fontSize : "20px", pr:'10px' }}/> Review</Button>

            </Stack>

            </CardActions>

            </Grid>

            <Divider orientation="vertical" flexItem />

            <Grid item xlg={2} >


            <CardActions>

            <Stack spacing={2}   >

            <Button variant="contained" color='primary' >
                
                Apply now</Button>
            <Button variant="contained" color='primary'>Brochure</Button>
            <Button variant="contained" color='primary'>Compare</Button>

            </Stack>


            </CardActions>

            </Grid>

            </Grid>

        </Grid>

        </Grid>

     </Card>

     <Card sx={{ minWidth : 400 }}  style={cardStyle} >

        <Grid container spacing = {1}>

            <Grid item xlg={3}>

                    <CardMedia
                    component = 'img'
                    height = '150'
                    image = 'https://images.collegedunia.com/public/image/1a09101fad610b0e76351db713cf8a4b.png?tr=w-800,h-533,c-force'

                    />

            </Grid>

            <Divider orientation='vertical' flexItem />
            <Grid item xlg={5} >

            <Grid container spacing = {1}>

            <Grid item xlg={3} >

            <CardHeader 
            title = {
                <>
                <Typography variant='body1' fontWeight="bold" >Loyola College</Typography>
                <Typography variant='body2' fontWeight="Regular" >Chennai, TamilNadu</Typography>
                </>
            }
            avatar={
                <Avatar sx={{width:"40px"}} >
                    L
                </Avatar>
            }
            />
            <CardContent sx={{display:"table-row"}}>
            
            <Box display="table-cell" align="center" sx={{pr:'20px'}} >
                <Typography variant='subtitle2'>1,00,000</Typography>
                <Typography sx={{ fontSize : 10}} >MBA -first year fees</Typography>
            </Box>
            <Divider orientation='Vertical' flexItem />
            <Box display="table-cell" align="center" sx={{pr:'20px'}} >
                <Typography variant='subtitle2' >TANCET/CAT</Typography>
                <Typography sx={{ fontSize : 10}} >Exam accepted</Typography>
            </Box>
            <Divider orientation='Vertical' flexItem />
            <Box display="table-cell" align="center" sx={{pr:'20px'}}>
                <Typography variant='subtitle2'>9.5/10</Typography>
                <Typography sx={{ fontSize : 10}}>Based on 500 user review</Typography>
            </Box>
            </CardContent>
            
            <CardActions>

            <Stack spacing={2} direction="row">

            <Button variant="outlined" style={buttonStyle} size="small" >
            <SchoolOutlinedIcon sx={{fontSize : "20px", pr:'10px' }}/>
                Admission</Button>
            <Button variant="outlined"  style={buttonStyle} size="small">
                <MenuBookOutlinedIcon sx={{fontSize : "20px" , pr:'10px' }}/>
                Course&fees </Button>
            <Button variant="outlined"  style={buttonStyle} size="small">
                <StarBorderPurple500OutlinedIcon sx={{fontSize : "20px", pr:'10px' }}/> Review</Button>

            </Stack>

            </CardActions>

            </Grid>

            <Divider orientation="vertical" flexItem />

            <Grid item xlg={2} >


            <CardActions>

            <Stack spacing={2}   >

            <Button variant="contained" color='primary' >
                
                Apply now</Button>
            <Button variant="contained" color='primary'>Brochure</Button>
            <Button variant="contained" color='primary'>Compare</Button>

            </Stack>


            </CardActions>

            </Grid>

            </Grid>

        </Grid>

        </Grid>

     </Card>

    </Grid>

</Grid>


  )
}

export default Practcards