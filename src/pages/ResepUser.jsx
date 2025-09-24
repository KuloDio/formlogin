import React from 'react';
import {
  Box,
  Typography,
  Grid,
} from "@mui/material";

import ButtonFilter from '../components/ButtonFilter';
import { Navbar } from '../components/navbar';
import SlideBanner from '../components/slidebanner';
import RecipeCard from '../components/RecipeCard';

const ResepUser = () => {
  return (
    <>
      <Navbar />
      <SlideBanner />
      <Box
        sx={{
          height: { xs: '50vh', md: '65vh' },
          width: "100%",
          marginBottom: 4,
          zIndex: 5,
          position: "relative",
        }}
      >
        <Typography align="center"
          sx={{
            fontSize: { xs: 35, md: 80, },
            color: "white",
            fontFamily: 'Bellmont',
            paddingTop: { xs: '10%', md: '4%' },
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
        <Box sx={{
          marginBottom: 4,
        }}>
          <ButtonFilter />
        </Box>
      </Box>
      <Grid container spacing={3} alignItems="flex-start"
        sx={{
          justifyContent: 'space-evenly',
          mb: 1,
          position: "relative",
        }}
      >
        <RecipeCard />
      </Grid>
    </>
  )
}

export default ResepUser