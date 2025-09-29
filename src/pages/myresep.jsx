import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import cookbanner from '../assets/image/cookbanner.png'
import CreateCard from '../components/CreateCard'

const MyResep = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{
        backgroundImage: `url(${cookbanner})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: { xs: '50vh', md: '45vh' },
        alignItems: "center",
        textAlign: "center",
      }}>
        <Typography
          sx={{
            color: "white",
            fontFamily: 'Poppins',
            fontSize: { xs: 30, md: 50 },
            fontWeight: "800",
            textAlign: "center",
            marginX: { md: "15%" },
            paddingTop: { xs: '20%', md: '8%' },
          }}
        >CREATE YOUR OWN RECIPE HERE</Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam vero facilis ea a nesciunt quo modi provident nihil doloremque quas?
        </Typography>
      </Box>
      <Box sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}>
        <Button variant='contained'
          onClick={() => navigate("/dashboard/tambahresep")}
          sx={{
            backgroundColor: "#1E5128",
            fontWeight: "800",
            borderRadius: "15px",
            border: "3px solid",
            borderColor: "#D8E9A8",
            width: { xs: "40%", sm: "30%", md: "15%" },
            marginY: 2,
            marginTop: { xs: 2, md: 4 },
          }}>Tambah Resep</Button>
      </Box>
      <Typography sx={{
        textAlign: "center",
        border: "4px solid",
        borderRadius: "25px",
        borderColor: "#D8E9A8",
        fontWeight: "800",
        paddingY: "1%",
        marginBottom: 5,
      }}>RESEP YANG TELAH ANDA BUAT</Typography>

      <CreateCard />

    </>
  )
}

export default MyResep