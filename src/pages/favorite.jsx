import React from 'react'
import { Typography, CardMedia, Grid, Box } from '@mui/material'
import FavoriteCard from '../components/FavoriteCard'

const Favorite = () => {
  return (
    <>
      <Box sx={{
        height: '100vh',
        paddingTop: { xs: '20%', md: '7%' },
      }}>
        <Typography align="center"
          sx={{
            fontWeight: '900',
            fontSize: { xs: 40, md: 55 },
            color: "white",
            fontFamily: 'Poppins',
          }}>
          Your Favorite Cooking Recipe
        </Typography>
        <Typography variant="inherit"
          sx={{
            fontWeight: 'light',
            color: "white",
            mb: 6,
            mx: { xs: '2%', md: '25%' },
            textAlign: "center",
          }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum ducimus cumque iste quibusdam quod.
        </Typography>

        <Grid container spacing={1}
          sx={{
            justifyContent: 'space-evenly',
            paddingBottom: 5,
          }}>
          <Box>
            <FavoriteCard />
          </Box>
          <Box>
            <FavoriteCard />
          </Box>
          <Box>
            <FavoriteCard />
          </Box>
          <Box>
            <FavoriteCard />
          </Box>
          <Box>
            <FavoriteCard />
          </Box>
          <Box>
            <FavoriteCard />
          </Box>
        </Grid>
      </Box>
    </>
  )
}

export default Favorite