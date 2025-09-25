import React from 'react'
import { Typography, Grid, Box } from '@mui/material'
import FavoriteCard from '../components/FavoriteCard'
import favbanner from '../assets/image/favbanner.png'

const Favorite = () => {
  return (
    <>
      <Box sx={{
        height: '100vh',
      }}>
        <Box sx={{
          backgroundImage: `url(${favbanner})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: { xs: '50vh', md: '45vh' },
          width: "100%",
        }}>
          <Typography align="center"
            sx={{
              fontWeight: '900',
              fontSize: { xs: 40, md: 55 },
              color: "white",
              fontFamily: 'Poppins',
              paddingTop: { xs: '20%', md: '8%' },
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
        </Box>

        <Grid container spacing={4}
          sx={{
            justifyContent: 'space-evenly',
            mb: 1,
            position: "relative",
            marginTop: { xs: '5%', md: '2%' },
          }}
        >
          <FavoriteCard />
        </Grid>
      </Box>
    </>
  )
}

export default Favorite