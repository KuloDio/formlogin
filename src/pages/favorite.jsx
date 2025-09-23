import React from 'react'
import { Typography,  Grid, Box } from '@mui/material'
import bannerfav from '../assets/image/bannerfav.jpg'
import FavoriteCard from '../components/FavoriteCard'

const Favorite = () => {
  return (
    <>
      <Box sx={{
        height: '100vh',
      }}>
        <Box sx={{
          backgroundImage: `url(${bannerfav})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: { xs: '50vh', md: '65vh' },
          width: "100%",
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
        </Box>

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