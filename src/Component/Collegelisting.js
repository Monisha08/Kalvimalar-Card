import React, {useState} from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { CardHeader, Typography, CardMedia, CardContent, CardActions, Stack ,FormControl,FormGroup} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';  
import { SignalCellularNullRounded } from '@mui/icons-material';


var buttonStyle = {
  maxwidth: '60px',
  maxheight: '33px',
  pt: '3',
  boxShadow:3,
  "&:hover":{
    boxShadow:8
  }

}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Collegelisting() {

    const [ ButtonHover , setButtonHover ] = useState(null);

    const Colleges = [ 
        {
          name : "Anna University",
          address :{ 
            area:"Guindy",
            district:"Chennai",
            state:"Tamilnadu"
          },
          image : "https://www.thenewsminute.com/sites/default/files/Anna_university_Wikicommons_Sivahari_1200-compressed.jpg",
          logo: "https://s.yimg.com/fz/api/res/1.2/N9_QAPbrKtsQg3ITtc03uw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MjYw/https://s.yimg.com/zb/imgv1/c5c0b3ed-f0eb-368d-a37a-a12484dc07d5/t_500x300",
          rate: 9.5,
          stream: "Engineering"
        },
        {
          name : "Madras University",
          address :{ 
            district:"Chennai",
            state:"Tamilnadu"
          },
          image : "http://4.bp.blogspot.com/-HSCW53xsZ80/UTY9a3KsurI/AAAAAAAAAos/Kt-6lR54VnI/s1600/university-of-madras-distance-education.jpg",
          logo : "https://rozgarpatrika.com/wp-content/uploads/2019/06/madras-university-logo.png",
          rate: 8.5,
          stream: "Arts & Science"
        },
        {
          name : "IIT Madras University",
          address :{ 
            district:"Chennai",
            state:"Tamilnadu"
          },
          image : "https://generic.wordpress.soton.ac.uk/webscience/wp-content/uploads/sites/117/2019/04/madras.jpg",
          logo : "https://tse1.mm.bing.net/th?id=OIP.yNbXUiFgimmLY0qmwoOoUwHaHa&pid=Api&P=0",
          rate: 10,
          stream: "Science and Technology"
        },
        {
          name : "Jeppiaar Engineering College",
          address :{ 
            district:"Chennai",
            state:"Tamilnadu"
          },
          image : "https://jeppiaararts.in/img/0A8A1819-min.JPG",
          logo: "https://www.eduvidya.com/admin/Upload/Institutes/635284265482725564_Jeppiaar%20Engineering%20College.jpeg",
          rate: 5.5,
          stream: "Engineering"
        },
        {
          name : "MOP Vaishnav College",
          address :{ 
            district:"Chennai",
            state:"Tamilnadu"
          },
          image : "https://images.edexlive.com/uploads/user/imagelibrary/2019/11/22/w600X390/mopvc_banner.jpg",
          logo: "http://www.infinitecourses.com/admin/RelatedImages/Institutes/634983459129201120_M.O.P.%20Vaishnav%20College%20for%20Women%20Logo.jpg",
          rate: 7.5,
          stream: "Engineering"
        },
        {
          name : "Vivekananda Global University",
          address :{ 
            district:"Jaipur",
            state:"Rajastan"
          },
          image : "https://tse4.mm.bing.net/th?id=OIP.f2TqjIzYVvCOHNA8p_SXSAHaE7&pid=Api&P=0",
          logo: "https://cf-media.api-setu.in/logo/issuers/003255.png",
          rate: 9.5,
          stream: "Arts & Science"
        },
        {
          name : "Board of Secondary Education",
          address :{ 
            state:"West Bengal"
          },
          image : "https://tse2.mm.bing.net/th?id=OIP.RCXB_-hjv8Hge2Bq3UCO1AHaE7&pid=Api&P=0",
          logo: "https://cf-media.api-setu.in/logo/issuers/003255.png",
          rate: 7.5,
          stream: "Upper Degree"
        },
        {
          name : "SRM University",
          address :{ 
            district:"Chennai",
            state:"Tamilnadu"
          },
          image : "https://tse1.mm.bing.net/th?id=OIP.aloUOv7JowIfSoF5GBdEbQHaE6&pid=Api&P=0",
          logo: "https://static.kabaddiadda.com/images/playerImages/aiiu/7310_SRM_University.png",
          rate: 9.5,
          stream: "Engineering and Science"
        },
      ]


    function handleMouseEnter(e){
        setButtonHover(e.currentTarget);
    }
    

    function handleMouseclose(e){
        setButtonHover(null);
    }
    
  return (

    <div style={{backgroundColor:"black" , height:"100%", justifyContent:"center", alignItems:"center"}}>

   {/* <Stack direction="column" spacing={2}> */}

   <Grid container justifyContent={"center"} style={{backgroundColor:"white"}}> 

    <Stack direction="row" spacing={2}>

        <Box>
          
        <Button variant="plain" style={buttonStyle} size="large" >Sort</Button>
        {/* <Select >
          <MenuItem value={1}>fees</MenuItem>
        </Select> */}

        </Box>

        <Box>

        <Button variant="plain" style={buttonStyle} size="large" >Stream</Button>

        </Box>

        <Box>

        <Button variant="plain" style={buttonStyle} size="large" >Place</Button>

        </Box>

        <Box>

        <Button 

        aria-owns={ButtonHover ? "Program-type" : undefined}
        aria-haspopup="true"
        onClick={handleMouseEnter}
        variant="plain" 
        style={buttonStyle} 
        size="large"  
        onMouseEnter={handleMouseEnter}>

    Program type
    
    </Button>

        <Menu
        id="Program-type"
        anchorEl={ButtonHover}
        open={Boolean(ButtonHover)}
        onClose={handleMouseclose}
        onMouseLeave={handleMouseclose}
        onMouseOut={handleMouseclose}
    >

        <FormControl>
        <FormGroup>
        <FormControlLabel
            control={
                <Checkbox
                    name="fulltime"
                    value="fulltime"
                />
            }
            label="Full time"/>

            <FormControlLabel
            control={
                <Checkbox
                    name="parttime"
                    value="parttime"
                />
            }
            label="Part time"/>


        </FormGroup>
        </FormControl>

    </Menu>

        </Box>

        <Box>

        <Button 

        aria-owns={ButtonHover ? "affiliation" : undefined}
        aria-haspopup="true"
        onClick={handleMouseEnter}
        variant="solid" 
        style={buttonStyle} 
        size="large" 

        >

Affiliation

</Button>

<Menu
    id="affiliation"
    anchorEl={ButtonHover}
    open={Boolean(ButtonHover)}
    onClose={handleMouseclose}
    onMouseLeave={handleMouseclose}
    onMouseOut={handleMouseclose}
 >

    <FormControl>
        <FormGroup>
        <FormControlLabel
            control={
                <Checkbox
                    name="check-one"
                    value="check-one"
                />
            }
            label="Anna University"/>

            <FormControlLabel
            control={
                <Checkbox
                    name="check-two"
                    value="check-two"
                />
            }
            label="University of Madras"/>


        </FormGroup>
        </FormControl>

</Menu>

        </Box>
     

        <Button variant="solid" style={buttonStyle} size="large" >
     
Type of college</Button>
        
        
 <Button variant="solid" style={buttonStyle} size="large" sx={{ml:'60px'}}>Filter</Button>
    
    </Stack>

    </Grid>

    

    {/* <Stack direction="row" spacing={2}> */}

        <Grid maxWidth={'xl'} container display={'flex'} spacing={4}  my={5} justifyContent="center">
        
        {Colleges.map((e)=> {
            return(
                <>
                <Grid item xl={4} >
                    <Card sx={{ width:"350px" , bgcolor:"wheat"}}>
                        <CardHeader
                        title={
                            <Typography> {e.name} </Typography>
                        }
                        subheader={
                            <Typography> {e.address.district},{e.address.state} </Typography>
                        }
                        avatar={
                            <Avatar>
                                <img src={e.logo} alt='' width="50px" />

                            </Avatar>
                        }
                        />
                       <CardMedia
                       component={'img'}
                       height={160}
                       image={e.image}
                       />
                       <CardContent sx={{display:"block"}}>
                        <Typography p={1}>
                            Stream: {e.stream}
                        </Typography>
                        <Typography p={1}>
                            Rating: {e.rate}
                        </Typography>
                       </CardContent>

                            
                        
                    </Card>
                    </Grid>

                </>
            )
        })}
        

       
        </Grid>


   
{/* 
</Stack> */}



   {/* </Stack> */}

    
  
</div>

  )
}

export default Collegelisting