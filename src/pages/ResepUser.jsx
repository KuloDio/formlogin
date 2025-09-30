import React from 'react'
import { Navbar } from '../components/navbar'
import { Typography, Box, Grid, Button } from '@mui/material'
import ButtonFilter from '../components/ButtonFilter'
import SlideBanner from '../components/slidebanner'
import RecipeCard from '../components/RecipeCard'

const ResepUser = () => {
  
  const handleLengkap = () => {
    alert('Fitur ini belum tersedia')
  }
  return (
    <>
      <Navbar />
      <Box sx={{
        overflow: 'auto',
      }}>
        <Box sx={{
          position: "relative",
        }}>
          <SlideBanner />

          <Typography align="center"
            sx={{
              fontSize: { xs: 35, md: 80, },
              color: "white",
              fontFamily: 'poppins',
              fontWeight: {xs: '800',md: '900'},
              paddingTop: { xs: '5%', md: '0%' },
              position: 'relative',
            }}>
            Choose Your Own Recipe
          </Typography>
          <Typography variant="inherit"
            sx={{
              fontWeight: 'light',
              fontFamily: 'montserrat',
              fontSize: { xs: 10, md: 15 },
              color: "white",
              mb: { xs: 2, md: 5 },
              mx: { xs: '2%', md: '20%' },
              textAlign: "center",
              position: 'relative',
              pt: { xs: 2, md: 0 },
            }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum ducimus cumque iste quibusdam quod, voluptate a perspiciatis, excepturi error repudiandae fuga tempore porro similique fugiat.
          </Typography>
          <ButtonFilter />
          <Grid container spacing={2} alignItems="flex-start"
            sx={{
              justifyContent: 'space-evenly',
              mb: 1,
              position: "relative",
              paddingTop: { xs: '5%', md: '8%' },
            }}
          >
            <RecipeCard />
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default ResepUser