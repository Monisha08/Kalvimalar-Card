import { Avatar, Box, Button, Card, CardActions, CardMedia, Container, Grid, ImageListItem, ImageListItemBar, Typography } from '@mui/material'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import { Stack } from '@mui/system'
import React from 'react'
import '../App.css';

export const CardDesign = () => {

    var buttonStyle = {
        height: '33px',
        padding: '2',
        width: '150px',
        bgcolor: '#0db995',
        '&:hover': {
          bgcolor: '#0db995',
        }
      }

    return (
      
            // <Stack
            //     sx={{
            //         justifyContent:"center",
            //         width:"100%",
            //         height:"100%"
            //     }}  
            // >
            <Container 
            maxWidth={'xl'}
            sx={{ 
                justifyContent:"center"
            }}
            >
                <Grid 
                container 
                maxWidth={'xl'} 
                display="flex" 
                justifyContent={'center'}      
                alignItems="center"         
                spacing={{ xl:3, lg:2 }}
                // p={{ md:5,xs:2 }}
                  >
                    
                     {Colleges.map((e) => {
                        return(
                            <Grid  item xl={3} lg={4} md={6} sm={6} xs={12}  >
                                <Card sx={{ width: "351px" }} className="main-card" >
                                    <ImageListItem sx={{ width: "351px" }} >

                                        <ImageListItemBar
                                            sx={{
                                                background: 'none'
                                            }}
                                            actionIcon={
                                                <Avatar sx={{ position: "absolute", width: 60, height: 60, m: "0px 0px 0px 10px", }}>
                                                    <img src={e.logo} alt='' width={60} />
                                                </Avatar>
                                            }

                                            title={
                                                <>
                                                    <Box className="gold-rating" sx={{ position: "absolute", height: 75, width: 60, ml: 34.1, mt: -3, justifyContent: "center", pt: 2, p: 1, pl: 2, borderRadius: " 0px 0px 0px 10px " }}>
                                                        <Typography variant="body1" color="common.white" pt={2} >Rating</Typography>
                                                        <Typography variant="h6" color="common.goldrod" fontWeight={'bold'} >{e.rate}/10</Typography>
                                                    </Box>
                                                </>
                                            }
                                            actionPosition='left'
                                            position='top'
                                        />

                                        <CardMedia
                                            component={'img'}
                                            height='295'
                                            image={e.image}
                                        />

                                        <ImageListItemBar 
                                        className="imgbar"
                                        // sx={{ height:{xs:"155px" }, mt:{xs:5} }}
                                            title={
                                                <Typography variant='h6' >{e.name}</Typography>
                                            }

                                            subtitle={
                                                <>
                                                    <Typography fontSize={13} >{e.address.district},{e.address.state}</Typography>

                                                    <Box className="box-hover"
                                                        // sx={{ display:{xs:"block"} }}
                                                    // sx={{ display: { xs: "block", sm: "block", md: "none" } }}
                                                    >

                                                        <Grid  >
                                                            <Typography variant="caption">{e.course}</Typography>
                                                        </Grid>

                                                        <Grid item display={'flex'} sx={{ pt: 1 }}>

                                                            <Grid sx={{ pr: '10px', textAlign: 'left' }}  >

                                                                <Button variant='text' size='small' sx={{ fontSize: '13px', color: 'white' }} >
                                                                    <SchoolOutlinedIcon sx={{ color: '#0db995', fontSize: '20px', pr: 1 }} />
                                                                    Admission
                                                                </Button>
                                                            </Grid>

                                                            <Grid sx={{ pr: '10px', ml: '47px' }}>
                                                                <Button variant='text' size='small' sx={{ fontSize: '13px', color: 'white' }}>
                                                                    <MenuBookOutlinedIcon sx={{ color: '#0db995', fontSize: '20px', mr: '3px' }} />Course&fees
                                                                </Button>
                                                            </Grid>
                                                        </Grid>
                                                    </Box>


                                                </>

                                            }

                                        />


                                    </ImageListItem>

                                    <CardActions className='action-hover'>
                                            <Stack
                                                direction={'row'}
                                                spacing={2}
                                                justifyContent="center"
                                                px={1}
                                               
                                            >

                                                <Button variant="contained"
                                                    //  color= "#0db995 "
                                                    sx={buttonStyle}
                                                    size="medium"
                                                >
                                                    <ArrowForwardIcon sx={{ mr: 1 }} />
                                                     Apply
                                                </Button>

                                                <Button variant="contained"
                                                    // color=  "#0db995 "

                                                    sx={buttonStyle}
                                                    size="medium"
                                                >
                                                    <DownloadIcon sx={{ mr: 1 }} />
                                                    Brochure

                                                </Button>
                                            </Stack>
                                        </CardActions>

                                </Card>
                            </Grid> 
                            )
                    })}

                </Grid>
                </Container>
            // </Stack>
      
    )
}

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