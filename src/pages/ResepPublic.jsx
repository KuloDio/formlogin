import React from 'react'
import { Navbar } from '../components/navbar'
import { Typography, Box, Grid, Button } from '@mui/material'
import ButtonFilter from '../components/ButtonFilter'

import SlideBanner from '../components/slidebanner'

const ResepPublic = () => {
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
          height: '100vh',
          paddingTop: { xs: '15%', md: '3%' },
          position: "relative",
        }}>
          <SlideBanner />

          <Typography align="center"
            sx={{
              fontSize: { xs: 35, md: 90, },
              color: "white",
              fontFamily: 'Bellmont',
              paddingTop: { xs: '10%', md: '4%' },
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
              mb: { xs: 5, md: 5 },
              mx: { xs: '2%', md: '20%' },
              textAlign: "center",
              position: 'relative',
            }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum ducimus cumque iste quibusdam quod, voluptate a perspiciatis, excepturi error repudiandae fuga tempore porro similique fugiat.
          </Typography>

          <ButtonFilter />
          <Grid container spacing={3}
            sx={{
              justifyContent: 'space-evenly',
              mb: 1,
              position: "relative",
              paddingTop: 18,
            }}
          >
            <RecipeCard />
          </Grid>
          <Button onClick={handleLengkap} sx={{
            justifyContent: 'center',
            display: 'flex',
            margin: 'auto',
            mb: 5,
            color: '#D8E9A8',
            fontWeight: 'bold',
          }}>lihat selengkapnya</Button>
        </Box>

      </Box>
    </>
  )
}

export default ResepPublic