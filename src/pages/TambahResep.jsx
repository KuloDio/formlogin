import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import BahanLangkah from '../components/BahanLangkah'
import FormResep from '../components/FormResep'

const TambahResep = () => {

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

                <Box sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                }}>
                    <Button variant='contained' sx={{
                        backgroundColor: "#D8E9A8",
                        color: "#1E5128",
                        fontWeight: "800",
                        borderRadius: "15px",
                        width: { xs: "40%", sm: "30%", md: "15%" },
                    }}>SIMPAN RESEP</Button>
                </Box>
            </Box>
        </>
    )
}

export default TambahResep