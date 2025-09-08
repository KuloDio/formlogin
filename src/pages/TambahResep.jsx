import React, { useContext } from 'react'
import { Box, Typography, Button } from '@mui/material'
import BahanLangkah from '../components/BahanLangkah'
import FormResep from '../components/FormResep'
import { FormContext } from '../context/FormContext'

const TambahResep = () => {
  const API_URL = import.meta.env.VITE_API_URL;

  const { formResep, steps, bahanList } = useContext(FormContext);

  const handleSubmit = async () => {
    const payload = { ...formResep, steps, bahanList };
    try {
      const res = await fetch(`${API_URL}/api/recipes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('API error');
      alert('Resep berhasil ditambah!');
    } catch (e) {
      console.error(e);
      alert('Gagal menambahkan resep');
    }
  };

  return (
    <>
      <Typography sx={{
        textAlign: "center",
        border: "5px solid",
        borderRadius: "25px",
        borderColor: "#D8E9A8",
        fontWeight: "800",
        paddingY: "1%",
      }}>BUAT RESEP ANDA DI SINI
      </Typography>
      <Box
        sx={{
          border: "5px solid",
          borderRadius: "25px",
          borderColor: "#D8E9A8",
          backgroundColor: "#12372A",
          paddingX: { xs: "3%", sm: "3%", md: "2%" },
          marginTop: { xs: "8%", sm: "8%", md: "4%" },
          paddingBottom: "5%",
          height: "fit-content",
        }}
      >
        {/* Form Resep */}
        <FormResep />

        {/* Bahan dan Langkah */}
        <BahanLangkah />

        <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: "2%" }}>
          <Button
            variant='contained'
            onClick={handleSubmit}
            sx={{
              backgroundColor: "#D8E9A8",
              color: "#1E5128",
              fontWeight: "900",
              borderRadius: "15px",
              paddingX: "2%",
            }}
          >
            TAMBAH RESEP
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default TambahResep
