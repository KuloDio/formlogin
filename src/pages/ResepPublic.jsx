import React from 'react'
import { Navbar } from '../components/navbar'
import { Typography, Box, Grid } from '@mui/material'
import RecipeReviewCard from '../components/RecipeCard'

const ResepPublic = () => {
  return (
    <>
      <Navbar />
      <Box sx={{
        height: '100vh',
        overflow: 'auto',
        marginTop: '9%',
      }}>
        <Typography variant="h4" align="center"
          sx={{
            fontWeight: 'bold',
          }}>
          Temukan Resep Pilihan Anda
        </Typography>
        <Grid container spacing={1}
          sx={{
            justifyContent: 'space-evenly',
            mt: 5,
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
      </Box>
    </>
  )
}

export default ResepPublic