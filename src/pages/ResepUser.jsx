import React from 'react';
import {
  Box,
  Typography,
  Grid,
} from "@mui/material";

import RecipeReviewCard from '../components/RecipeCard';
import ButtonFilter from '../components/ButtonFilter';
import { Navbar } from '../components/navbar';

const ResepUser = () => {
  return (
    <>
    <Navbar />
      <Box
        sx={{
          marginTop: 4,
          marginX: { md: '15%' },
        }}
      >
        <Typography align="center"
          sx={{
            fontWeight: '900',
            fontSize: { xs: 40, md: 65 },
            color: "white",
            fontFamily: 'Poppins',
          }}>
          Choose Your Own Recipe
        </Typography>
        <Typography variant="inherit"
          sx={{
            fontWeight: 'light',
            color: "white",
            mb: 3,
            mx: { xs: '2%', md: '15%' },
            textAlign: "center",
          }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum ducimus cumque iste quibusdam quod.</Typography>
      </Box>
      <Box sx={{
        marginBottom: 4,
      }}>
        <ButtonFilter />
      </Box>
      <Grid container spacing={1} sx={{ justifyContent: 'space-evenly', mb: 1 }}>
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
    </>
  )
}

export default ResepUser