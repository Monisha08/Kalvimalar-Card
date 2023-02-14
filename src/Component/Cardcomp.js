import React from 'react'
import { Card as KMRCard, ImageListItem, ImageListItemBar, CardMedia, Avatar, Box, Typography, Grid, Button } from '@mui/material';


const Card = ({ avtImage, cardImage, clgname, clgdistrict, clgstate, course, clgrate, theme }) => {
    return (
        <KMRCard sx={{ height: "350px", width: "351px" }}>
            <ImageListItem sx={{ width: "351px" }} >
                <ImageListItemBar
                    sx={{
                        background: 'none'
                    }}
                    actionIcon={
                        <Avatar>
                            {avtImage}
                        </Avatar>
                    }

                    title={
                        <>
                            <Box className="gold-rating" sx={{ position: "absolute", height: 75, width: 80, ml: 33, mt: -3, justifyContent: "center", pt: 2, p: 1, pl: 2, borderRadius: " 0px 0px 0px 10px " }}>
                                <Typography>Rating</Typography>
                                <Typography>{clgrate}/10</Typography>
                            </Box>
                        </>
                    }
                    actionPosition='left'
                    position='top'
                />

                <CardMedia
                    component={'img'}
                    height='295'
                    image={cardImage}
                />

                <ImageListItemBar
                    className="imgbar"

                    //   sx={{ bgcolor: theme ? "rgba(2, 27, 27, 0.82)" : "white" }}

                    title={
                        <Typography >{clgname}</Typography>
                    }

                    subtitle={
                        <>
                            <Typography>{clgdistrict},{clgstate}</Typography>

                            <Box className="box-hover">

                                <Grid  >
                                    <Typography className='typo' variant="caption" color={theme ? "#0db999" : "common.black"} sx={{ '&:hover': { color: theme ? "black" : "white" } }}>{course}</Typography>
                                </Grid>

                                <Grid item display={'flex'} sx={{ pt: 1 }}>

                                    <Grid sx={{ pr: '10px', textAlign: 'left' }}  >

                                        <Button >
                                            Admission
                                        </Button>
                                    </Grid>

                                    <Grid sx={{ pr: '10px', ml: '47px' }}>
                                        <Button >
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </>
                    }

                />
            </ImageListItem>

        </KMRCard>
    )
}

export default Card