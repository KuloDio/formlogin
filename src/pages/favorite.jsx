import React from 'react'
import { Typography, CardMedia, Grid, Box } from '@mui/material'
import FavoriteCard from '../components/FavoriteCard'

const Favorite = () => {
  return (
    <>
        <Typography variant="h3" color="initial" sx={{ 
          color: 'white',
          fontWeight: 'bold',
          pb: 5
         }}>Favorite Recipes</Typography>
         
         <Grid container spacing={1} sx={{ mb: 8 }}>
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
    </>
  )
}

export default Favorite