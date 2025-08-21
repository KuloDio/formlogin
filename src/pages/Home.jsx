import React from 'react'
import { Box, Typography, Grid, Button } from '@mui/material'
import { Navbar } from '../components/navbar'
import { useNavigate } from 'react-router-dom'
import bghome from '../assets/image/imghome.png'


const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Grid
        container
        direction={{ xs: "column", sm: "row" }}
        sx={{
          marginTop: { xs: "13%", sm: "13%", md: "8%" },
          display: "flex",
          paddingX: "8%",
          gap: "2%",
        }}>
        <Box sx={{
          color: "white",
          height: "100vh",
          width: { xs: "100%", sm: "100%", md: "40%" },
        }}>
          <Typography variant='h3' sx={{
            marginTop: "15%",
            fontWeight: 900,
          }}>Indonesian traditional recipes</Typography>
          <Typography sx={{
            paddingRight: { md: "40%" },
          }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nam aut itaque, labore explicabo obcaecati modi repudiandae ratione. Odio, molestias!</Typography>
          <Box sx={{
            marginTop: "5%",
            display: "flex",
            gap: "2%",
          }}>
            <Button variant='solid'
              onClick={() => navigate("/resep")}
              sx={{
                backgroundColor: "#1E5128"
              }}>Get Started</Button>
            <Button variant='outlined'
              onClick={() => navigate("/login")}
              sx={{
                width: "50%",
                display: { md: "none" },
                border: "3px solid",
                borderColor: "#1E5128",
                color: "#D8E9A8"
              }}
            >Login</Button>
          </Box>
        </Box>
        <Box sx={{
          color: "white",
          height: "100vh",
          width: "40%",
        }}>
          <img
            src={bghome}
            alt="bghome"
            style={{
              width: "160%",
              height: "auto"
            }}
          />
        </Box>

      </Grid>
    </>
  )
}

export default Home