import React from 'react'
import { Grid, Card, ImageListItem, ImageListItemBar, Divider } from '@mui/material';
import Button from '@mui/material/Button';
import { CardHeader, Typography, CardMedia, CardContent, CardActions, Stack, FormControl, FormGroup, Tooltip } from '@mui/material';
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
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import DownloadIcon from '@mui/icons-material/Download';




var buttonStyle = {
  maxwidth: '60px',
  maxheight: '33px',
  padding: '2',
  width: '150px'


}

function Cardshover() {

  const Colleges = [
    {
      name: "Anna University",
      address: {
        area: "Guindy",
        district: "Chennai",
        state: "Tamilnadu"
      },
      image: "https://www.thenewsminute.com/sites/default/files/Anna_university_Wikicommons_Sivahari_1200-compressed.jpg",
      logo: "https://s.yimg.com/fz/api/res/1.2/N9_QAPbrKtsQg3ITtc03uw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MjYw/https://s.yimg.com/zb/imgv1/c5c0b3ed-f0eb-368d-a37a-a12484dc07d5/t_500x300",
      rate: 9.5,
      stream: "Engineering",
      exam: "JEEE",
      fees: "75,000",
      desc: "The first version of Anna University was formed in 1978 and various governments changed the varsity's structure and affiliation scope repeatedly. In 2001, under the Anna University Amendment Act of 2001, the erstwhile Anna University became an affiliating university, taking under its wings all the engineering colleges in Tamil Nadu. "
    },
    {
      name: "Madras University",
      address: {
        district: "Chennai",
        state: "Tamilnadu"
      },
      image: "http://4.bp.blogspot.com/-HSCW53xsZ80/UTY9a3KsurI/AAAAAAAAAos/Kt-6lR54VnI/s1600/university-of-madras-distance-education.jpg",
      logo: "https://rozgarpatrika.com/wp-content/uploads/2019/06/madras-university-logo.png",
      rate: 8.5,
      stream: "Arts & Science",
      exam: "TANCET",
      fees: "60,000"
    },
    {
      name: "IIT Madras University",
      address: {
        district: "Chennai",
        state: "Tamilnadu"
      },
      image: "https://generic.wordpress.soton.ac.uk/webscience/wp-content/uploads/sites/117/2019/04/madras.jpg",
      logo: "https://tse1.mm.bing.net/th?id=OIP.yNbXUiFgimmLY0qmwoOoUwHaHa&pid=Api&P=0",
      rate: 10,
      stream: "Science and Technology",
      exam: "none",
      fees: "74,000"
    },
    {
      name: "Jeppiaar Engineering College",
      address: {
        district: "Chennai",
        state: "Tamilnadu"
      },
      image: "https://jeppiaararts.in/img/0A8A1819-min.JPG",
      logo: "https://www.eduvidya.com/admin/Upload/Institutes/635284265482725564_Jeppiaar%20Engineering%20College.jpeg",
      rate: 5.5,
      stream: "Engineering",
      exam: "JEEE",
      fees: "90,000"

    },
    {
      name: "MOP Vaishnav College",
      address: {
        district: "Chennai",
        state: "Tamilnadu"
      },
      image: "https://images.edexlive.com/uploads/user/imagelibrary/2019/11/22/w600X390/mopvc_banner.jpg",
      logo: "http://www.infinitecourses.com/admin/RelatedImages/Institutes/634983459129201120_M.O.P.%20Vaishnav%20College%20for%20Women%20Logo.jpg",
      rate: 7.5,
      stream: "Arts & Science",
      exam: "TANCET",
      fees: "85,000"
    },
    {
      name: "Vivekananda Global University",
      address: {
        district: "Jaipur",
        state: "Rajastan"
      },
      image: "https://tse4.mm.bing.net/th?id=OIP.f2TqjIzYVvCOHNA8p_SXSAHaE7&pid=Api&P=0",
      logo: "https://cf-media.api-setu.in/logo/issuers/003255.png",
      rate: 9.5,
      stream: "Arts & Science",
      exam: "TANCET",
      fees: "55,000"
    },
    {
      name: "Board of Secondary Education",
      address: {
        state: "West Bengal"
      },
      image: "https://tse2.mm.bing.net/th?id=OIP.RCXB_-hjv8Hge2Bq3UCO1AHaE7&pid=Api&P=0",
      logo: "https://cf-media.api-setu.in/logo/issuers/003255.png",
      rate: 7.5,
      stream: "Upper Degree",
      exam: "none",
      fees: "50,000"
    },
    {
      name: "SRM University",
      address: {
        district: "Chennai",
        state: "Tamilnadu"
      },
      image: "https://tse1.mm.bing.net/th?id=OIP.aloUOv7JowIfSoF5GBdEbQHaE6&pid=Api&P=0",
      logo: "https://static.kabaddiadda.com/images/playerImages/aiiu/7310_SRM_University.png",
      rate: 9.5,
      stream: "Engineering and Science",
      exam: "JEEE",
      fees: "1,00,000"
    },
  ]

  return (


    <div style={{ backgroundColor: "black", height: "100%", justifyContent: "center", alignItems: "center" }}>

      {/*  
    <Grid container justifyContent={"center"} style={{backgroundColor:"white"}}> 
 
     <Stack direction="row" spacing={2}>
 
         <Box>
           
         <Button variant="plain" style={buttonStyle} size="large" >Sort</Button>
       
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
 
     </Grid> */}


      <Grid maxWidth={'xl'} container display={'flex'} spacing={4} my={5} justifyContent="center">

        {Colleges.map((e) => {
          return (
            <>
              <Grid item xl={4} >
                <Card  sx={{ width: "350px", bgcolor: "white" }}>
                  <ImageListItem>
                    <img
                      src={e.image}
                    />

                    <ImageListItemBar sx={{ height: 170 }}


                      actionIcon={

                        <Avatar sx={{ mt: -15, ml:1, width: 60, height: 60, justifyContent: "left" }}>
                          <img src={e.logo} alt='' width={60} />
                        </Avatar>

                      }

                      actionPosition={'left'}

                      title={
                        <Typography variant='h6' >{e.name}</Typography>
                      }

                      subtitle={
                        <>
                          <Typography fontSize={13} >{e.address.district},{e.address.state}</Typography>
                          <Box >

                            <Grid item display={'flex'} sx={{ pt: 1 }}>
                              <Grid sx={{ pr: '10px', textAlign: 'right' }}  >
                                <Typography sx={{ fontSize: 17 }}  color="warning.main">{e.fees}</Typography>
                                <Typography sx={{ fontSize: 12 }} >MBA -first year fees</Typography>
                              </Grid>

                              <Grid sx={{ pr: '10px' }}>
                                <Typography sx={{ fontSize: 17 }}  color="warning.main">{e.rate}</Typography>
                                <Typography sx={{ fontSize: 12 }}>Based on 400 user review</Typography>
                              </Grid>
                            </Grid>



                          </Box>


                        </>

                      }

                    />


                  </ImageListItem>

                  <CardActions >

                    <Box >
                      <Stack
                        direction="row"
                        spacing={2}
                        display="flex"
                        sx={{ pt: 1 }} >


                        <Button variant='text' size='small' sx={{ fontSize: '10px', color: 'grey' }} >
                          <SchoolOutlinedIcon sx={{ color: 'warning.main',fontSize:'15px',mr:'3px' }} />Admission
                        </Button>
                        <Button variant='text' size='small' sx={{ fontSize: '10px', color: 'grey' }}>
                          <MenuBookOutlinedIcon sx={{ color: 'warning.main',fontSize:'15px',mr:'3px'}} />Course&fees
                        </Button>
                        <Button variant='text' size='small' sx={{ fontSize: '10px', color: 'grey' }}>
                          <StarBorderPurple500OutlinedIcon sx={{ color: 'warning.main',fontSize:'15px',mr:'3px' }} />Review
                        </Button>

                      </Stack>

                      <Stack
                        direction={'row'}
                        spacing={2}
                        justifyContent="center"
                        mx={1}
                      >

                        <Button variant="contained"
                          color='primary'

                          style={buttonStyle}
                          size="medium"
                        ><ArrowForwardIcon sx={{mr:1}}/>
                          Apply
                          
                        </Button>

                        <Button variant="contained"
                          color='primary'
                          style={buttonStyle}
                          size="medium"
                        ><DownloadIcon sx={{mr:1}}/>
                          Brochure
                        
                        </Button>

                      </Stack>


                    </Box>




                  </CardActions>


                </Card>


              </Grid>

            </>
          )
        })}



      </Grid>


    </div>

  )
}

export default Cardshover