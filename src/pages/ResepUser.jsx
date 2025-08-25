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
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Resep User
      </Typography>
      <TextField
        placeholder="Search Recipe..."
        variant="outlined"
        sx={{
          my: 3,
          width: "90%",
          "& .MuiOutlinedInput-root": {
            borderRadius: "50px", // bikin rounded
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Grid container spacing={6} sx={{ pt: 4, justifyContent: "center" }}>
        <Grid item xs={12} sm={6}>
          <RecipeReviewCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RecipeReviewCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RecipeReviewCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RecipeReviewCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RecipeReviewCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RecipeReviewCard />
        </Grid>
      </Grid>
    </>
  );
};



export default ResepUser;
