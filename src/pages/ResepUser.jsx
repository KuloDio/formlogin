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

    <Typography variant="h3" color="initial" sx={{ 
      color: 'white',
      fontWeight: 'bold',
      pb: 5
     }}>All Recipes</Typography>

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