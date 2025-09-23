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
          marginTop: { xs: "15%", sm: "15%", md: "4%" },
          display: "flex",
          paddingX: "8%",
          gap: "2%",
          backgroundColor: "#191A19",
          maxHeight: "100vh",
          color: "white",
        }}
      >
        <Box sx={{
          color: "white",
          height: "100vh",
          width: { xs: "100%", sm: "100%", md: "40%" },
          py: 12
        }}>
          <Typography sx={{
            marginTop: "15%",
            fontWeight: 900,
            fontFamily: "montserrat",
            fontSize: { xs: 30, md: 50 },
          }}>Indonesian traditional recipes</Typography>
          <Typography sx={{
            marginTop: "2%",
            paddingRight: { md: "20%" },
          }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores expedita officia sequi. Id asperiores earum facere vitae, tenetur laudantium.</Typography>
          <Box sx={{
            marginTop: "5%",
            display: "flex",
            gap: "2%",
          }}>
            <Button variant='contained'
              onClick={() => navigate("/reseppublic")}
              sx={{
                backgroundColor: "#1E5128",
                color: "white",
                fontWeight: "700",
              }}>Get Started</Button>
            <Button variant='outlined'
              onClick={() => navigate("/login")}
              sx={{
                width: "50%",
                display: { md: "none" },
                border: "3px solid",
                borderColor: "#1E5128",
                color: "#D8E9A8",
                fontWeight: "600",
              }}
            >Login</Button>
          </Box>
        </Box>
        <Box sx={{
          color: "white",
          height: "100vh",
          width: "40%",
          py: 6,
          display: { xs: "none", sm: "none", md: "block" },
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