import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const MyResep = () => {
  const navigate = useNavigate();

  return (
    <>
      <Typography variant='h4'
        sx={{
          color: "white",
          fontWeight: "800",
          textAlign: "center",
          marginTop: 4,
          marginX: { md: "15%" },
        }}
      >SELAMAT DATANG DI HALAMAN RESEP ANDA SILAHKAN KREASIKAN DAN KEMBANGKAN RESEPMU SENDIRI</Typography>
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
      }}>RESEP YANG TELAH ANDA BUAT</Typography>

      
    </>
  )
}

export default MyResep