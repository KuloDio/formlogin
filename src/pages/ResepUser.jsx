import React from 'react';
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Typography,
  Grid,
} from "@mui/material";

import RecipeReviewCard from '../components/RecipeCard';
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
        <Typography variant="h3" color="initial" sx={{
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',

        }}>ALL RECIPES</Typography>
        <Typography sx={{ textAlign: 'center', py: 3 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia nostrum ea ipsum culpa, officia placeat
        </Typography>
      </Box>

      <Grid container spacing={1} sx={{ justifyContent: 'space-evenly', mb: 8 }}>
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


      {/* <Grid container spacing={7} sx={{ justifyContent: 'space-evenly', mx: 5 }}>
            <RecipeReviewCard />
            <RecipeReviewCard />
            <RecipeReviewCard />
            <RecipeReviewCard />
        </Grid> */}
    </>
  )
}

export default ResepUser