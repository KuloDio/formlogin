import React from 'react'
import { Navbar } from '../components/navbar'
import { Typography, Box, Grid, Button } from '@mui/material'
import RecipeReviewCard from '../components/RecipeCard'
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
        <SlideBanner />
        <Box sx={{
          height: '100vh',
          paddingTop: { xs: '15%', md: '3%' },
          position: "relative",
        }}>

          <Typography align="center"
            sx={{
              fontSize: { xs: 35, md: 90, },
              color: "white",
              fontFamily: 'Bellmont',
              paddingTop: { xs: '10%', md: '4%' },
            }}>
            Choose Your Own Recipe
          </Typography>
          <Typography variant="inherit"
            sx={{
              fontWeight: 'light',
              fontFamily: 'montserrat',
              fontSize: { xs: 10, md: 15 },
              color: "white",
              mb: 3,
              mx: { xs: '2%', md: '20%' },
              textAlign: "center",
            }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum ducimus cumque iste quibusdam quod, voluptate a perspiciatis, excepturi error repudiandae fuga tempore porro similique fugiat.
          </Typography>

          <ButtonFilter />
          <Grid container spacing={3}
            sx={{
              justifyContent: 'space-evenly',
              paddingBottom: 5,
              paddingTop: 15,
            }}>
            <Box>
              <RecipeReviewCard />
            </Box>
            <Box>
              <RecipeReviewCard />
            </Box>
            <Box>
              <RecipeReviewCard />
            </Box>
            <Box>
              <RecipeReviewCard />
            </Box>
            <Box>
              <RecipeReviewCard />
            </Box>
            <Box>
              <RecipeReviewCard />
            </Box>
            <Box>
              <RecipeReviewCard />
            </Box>
            <Box>
              <RecipeReviewCard />
            </Box>
            <Box>
              <RecipeReviewCard />
            </Box>
            <Box>
              <RecipeReviewCard />
            </Box>
            <Box>
              <RecipeReviewCard />
            </Box>
            <Box>
              <RecipeReviewCard />
            </Box>
            <Box>
              <RecipeReviewCard />
            </Box>
            <Box>
              <RecipeReviewCard />
            </Box>
            <Box>
              <RecipeReviewCard />
            </Box>
            <Box>
              <RecipeReviewCard />
            </Box>
            <Box>
              <RecipeReviewCard />
            </Box>
            <Box>
              <RecipeReviewCard />
            </Box>
            <Box>
              <RecipeReviewCard />
            </Box>
            <Box>
              <RecipeReviewCard />
            </Box>
            <Box>
              <RecipeReviewCard />
            </Box>
            <Box>
              <RecipeReviewCard />
            </Box>
            <Box>
              <RecipeReviewCard />
            </Box>
            <Box>
              <RecipeReviewCard />
            </Box>
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