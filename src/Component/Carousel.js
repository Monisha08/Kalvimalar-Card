import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Box from '@mui/material/Box';
import { Card, Avatar,Grid,Typography,Stack,IconButton } from '@mui/material';
import { LocationOn, Edit } from '@mui/icons-material';
import { grey } from '@mui/material/colors';




function Cardcarousel() {
  
  return (
     
    <Carousel
    additionalTransfrom={0}
    arrows
    autoPlay
    autoPlaySpeed={5000}
    centerMode={false}
    className=""
    containerClass="container-with-dots"
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite={false}
    itemClass=""
    keyBoardControl
    minimumTouchDrag={80}
    pauseOnHover
    renderArrowsWhenDisabled={false}
    renderButtonGroupOutside={false}
    renderDotsOutside={false}
    responsive={{
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024
        },
        items: 5,
        partialVisibilityGutter: 40
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0
        },
        items: 1,
        partialVisibilityGutter: 30
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464
        },
        items: 4,
        partialVisibilityGutter: 30
      }
    }}
    rewind
    rewindWithAnimation={false}
    rtl={false}
    shouldResetAutoplay
    showDots={false}
    sliderClass=""
    slidesToSlide={1}
    swipeable
  >
    
     {Colleges.map((i) => {
        return(

            <>


             <Grid container maxWidth={{ xl:"xl" , lg:"lg"}} justifyContent={'center'} bgcolor='wheat'>
       
         
            <Grid >
            <Card sx={{height:'100px', width:'300px'}}>
            
            <Box>
                <Stack direction={'row'} >

                <Avatar variant="rounded" src={i.logo} />
                <Stack spacing={1} >
                    <Typography>
                        {i.name}
                    </Typography>
                    <Typography>
                        <LocationOn sx={{color:grey[400]}}/>
                        {i.address.district},{i.address.state}
                    </Typography>

                </Stack>

                
                

                </Stack>
                </Box>
            </Card>
            </Grid>
                  
         </Grid> 
         

            </>
       
        )

     })}  





    
  
  </Carousel> 


  )



  
}

export default Cardcarousel


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
      course: "B.E | M.E| B.TECH | M.TECH...",
      desc: "The first version of Anna University was formed in 1978 and various governments changed the varsity's structure and affiliation scope repeatedly... "
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
      course: "BSc | B.Com | M.Com | BBA...",
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
      course: "B.E | M.E| B.TECH | M.TECH...",
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
      course: "B.E | M.E | B.TECH | MBA...",
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
      course: "BSc | B.Com | M.Com | BBA...",
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
      course: "B.E | M.E | B.TECH | M.TECH...",
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
      course: "B.E | M.E| B.TECH | M.TECH...",
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
      course: "B.E | M.E| B.TECH | M.TECH...",
      fees: "1,00,000"
    },
  ]
