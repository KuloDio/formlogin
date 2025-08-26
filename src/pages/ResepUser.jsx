import React from 'react';
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Typography, Grid,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search"; // ✅ tambahkan ini
import RecipeReviewCard from '../components/RecipeCard';

const ResepUser = () => {
  return (
    <>
    <Grid container spacing={1} sx={{ justifyContent: 'space-evenly' }}>
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