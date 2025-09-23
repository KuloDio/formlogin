import React from 'react'
import { Navbar } from '../components/navbar'
import { Typography, Box, Grid, Button } from '@mui/material'
import RecipeReviewCard from '../components/RecipeCard'
import ButtonFilter from '../components/ButtonFilter'
import { Link } from "react-router-dom";

const ResepPublic = () => {
  const handleLengkap = () => {
    alert('Fitur ini belum tersedia')
  }
  return (
    <>
      <Navbar sx={{
      }} />
      <Box sx={{
        height: '100vh',
        overflow: 'auto',
        paddingTop: { xs: '20%', md: '7%' },
      }}>
        <Typography align="center"
          sx={{
            fontWeight: '900',
            fontSize: { xs: 40, md: 65 },
            color: "white",
            fontFamily: 'Poppins',
          }}>
          Choose Your Own Recipesss
        </Typography>
        <Typography variant="inherit"
          sx={{
            fontWeight: 'light',
            color: "white",
            mb: 3,
            mx: { xs: '2%', md: '25%' },
            textAlign: "center",
          }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum ducimus cumque iste quibusdam quod, voluptate a perspiciatis, excepturi error repudiandae fuga tempore porro similique fugiat.
        </Typography>
        <ButtonFilter />
        <Grid container spacing={3}
          sx={{
            justifyContent: 'space-evenly',
            mt: 5,
            paddingBottom: 5,
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
        <Button
          component={Link}
          to="/dashboard/resepuser"
          sx={{
            justifyContent: "center",
            display: "flex",
            margin: "auto",
            mb: 5,
            color: "#D8E9A8",
            fontWeight: "bold",
            mx: 70
          }}
        >
          lihat selengkapnya
        </Button>
      </Box>
    </>
  )
}

export default ResepPublic