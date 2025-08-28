import React from 'react'
import { Box, Grid, Typography, TextField } from '@mui/material'

const FormResep = () => {
    return (
        <>
            <Grid container direction={{ xs: "row", sm: "colum", md: "row", lg: "row" }}
                sx={{
                    justifyContent: "space-around",
                    marginTop: "1.5%"
                }}>
                <Box xs={12} md={4} sx={{
                    width: { xs: "100%", md: "32%" },
                    height: "40vh",
                    marginTop: { xs: "2%", md: "2" },
                    padding: "1%",
                }}>
                    <Typography sx={{
                        textAlign: "center",
                        backgroundColor: "#D8E9A8",
                        alignItems: "center",
                        borderRadius: "25px",
                        fontWeight: "800",
                        paddingY: "2%",
                        color: "#1E5128",
                        boxShadow: "0 4px 2px #00000035",
                    }}>NAMA RESEP
                    </Typography>
                    <TextField
                        id='nama'
                        placeholder='Masukkan Nama Resep'
                        sx={{
                            width: "100%",
                            marginTop: "5%",
                            textAlign: "center",
                            "& .MuiOutlinedInput-root": {
                                border: "4px solid",
                                borderColor: "#D8E9A8",
                                borderRadius: "20px",
                                "& fieldset": {
                                    borderColor: "transparent",
                                },
                                "&:hover fieldset": {
                                    borderColor: "transparent",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "transparent",
                                },
                                "& .MuiInputLabel-root": {
                                    color: "white",
                                },
                                "& .MuiInputBase-input": {
                                    color: "white",
                                },
                            },
                        }} />

                    <Typography sx={{
                        textAlign: "center",
                        backgroundColor: "#D8E9A8",
                        alignItems: "center",
                        borderRadius: "25px",
                        fontWeight: "800",
                        paddingY: "2%",
                        color: "#1E5128",
                        marginTop: { xs: "5%", md: "5%" },
                        boxShadow: "0 4px 2px #00000035",
                    }}>DESKRIPSI RESEP
                    </Typography>
                    <TextField
                        id='deskripsi'
                        placeholder='Masukkan Deskripsi Resep'
                        sx={{
                            width: "100%",
                            marginTop: "5%",
                            textAlign: "center",
                            "& .MuiOutlinedInput-root": {
                                border: "4px solid",
                                borderColor: "#D8E9A8",
                                borderRadius: "20px",
                                "& fieldset": {
                                    borderColor: "transparent",
                                },
                                "&:hover fieldset": {
                                    borderColor: "transparent",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "transparent",
                                },
                                "& .MuiInputLabel-root": {
                                    color: "white",
                                },
                                "& .MuiInputBase-input": {
                                    color: "white",
                                },
                            },
                        }} />
                    <Typography sx={{
                        textAlign: "center",
                        backgroundColor: "#D8E9A8",
                        alignItems: "center",
                        borderRadius: "25px",
                        fontWeight: "800",
                        paddingY: "2%",
                        color: "#1E5128",
                        marginTop: { xs: "5%", md: "5%" },
                        boxShadow: "0 4px 2px #00000035",
                    }}>FOTO MAKANAN
                    </Typography>
                    <TextField
                        id='image'
                        placeholder='Masukkan Foto Makanan'
                        type='url'
                        sx={{
                            width: "100%",
                            marginTop: "5%",
                            textAlign: "center",
                            "& .MuiOutlinedInput-root": {
                                border: "4px solid",
                                borderColor: "#D8E9A8",
                                borderRadius: "20px",
                                "& fieldset": {
                                    borderColor: "transparent",
                                },
                                "&:hover fieldset": {
                                    borderColor: "transparent",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "transparent",
                                },
                                "& .MuiInputLabel-root": {
                                    color: "white",
                                },
                                "& .MuiInputBase-input": {
                                    color: "white",
                                },
                            },
                        }} />
                </Box>
                <Box xs={12} md={4} sx={{
                    width: { xs: "100%", md: "32%" },
                    height: "40vh",
                    marginTop: { xs: "37%", md: "2%" },
                    padding: "1%",
                }}>
                    <Typography sx={{
                        textAlign: "center",
                        backgroundColor: "#D8E9A8",
                        alignItems: "center",
                        borderRadius: "25px",
                        fontWeight: "800",
                        paddingY: "2%",
                        color: "#1E5128",
                        boxShadow: "0 4px 2px #00000035",
                    }}>KATEGORI RESEP
                    </Typography>
                    <TextField
                        id='kategori'
                        placeholder='Masukkan Kategori Resep'
                        sx={{
                            width: "100%",
                            marginTop: "5%",
                            textAlign: "center",
                            "& .MuiOutlinedInput-root": {
                                border: "4px solid",
                                borderColor: "#D8E9A8",
                                borderRadius: "20px",
                                "& fieldset": {
                                    borderColor: "transparent",
                                },
                                "&:hover fieldset": {
                                    borderColor: "transparent",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "transparent",
                                },
                                "& .MuiInputLabel-root": {
                                    color: "white",
                                },
                                "& .MuiInputBase-input": {
                                    color: "white",
                                },
                            },
                        }} />

                    <Typography sx={{
                        textAlign: "center",
                        backgroundColor: "#D8E9A8",
                        alignItems: "center",
                        borderRadius: "25px",
                        fontWeight: "800",
                        paddingY: "2%",
                        color: "#1E5128",
                        marginTop: { xs: "5%", md: "5%" },
                        boxShadow: "0 4px 2px #00000035",
                    }}>JUMLAH PORSI
                    </Typography>
                    <TextField
                        id='porsi'
                        placeholder='Masukkan Jumlah Porsi'
                        type='number'
                        sx={{
                            width: "100%",
                            marginTop: "5%",
                            textAlign: "center",
                            "& .MuiOutlinedInput-root": {
                                border: "4px solid",
                                borderColor: "#D8E9A8",
                                borderRadius: "20px",
                                "& fieldset": {
                                    borderColor: "transparent",
                                },
                                "&:hover fieldset": {
                                    borderColor: "transparent",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "transparent",
                                },
                                "& .MuiInputLabel-root": {
                                    color: "white",
                                },
                                "& .MuiInputBase-input": {
                                    color: "white",
                                },
                            },
                        }} />
                </Box>
                <Box xs={12} md={4} sx={{
                    width: { xs: "100%", md: "32%" },
                    height: "40vh",
                    marginTop: { xs: "2%", md: "2" },
                    padding: "1%",
                }}>
                    <Typography sx={{
                        textAlign: "center",
                        backgroundColor: "#D8E9A8",
                        alignItems: "center",
                        borderRadius: "25px",
                        fontWeight: "800",
                        paddingY: "2%",
                        color: "#1E5128",
                        boxShadow: "0 4px 2px #00000035",
                    }}>WAKTU MEMASAK
                    </Typography>
                    <TextField
                        id='persiapan'
                        placeholder='Masukkan Waktu Persiapan Memasak'
                        sx={{
                            width: "100%",
                            marginTop: "5%",
                            textAlign: "center",
                            "& .MuiOutlinedInput-root": {
                                border: "4px solid",
                                borderColor: "#D8E9A8",
                                borderRadius: "20px",
                                "& fieldset": {
                                    borderColor: "transparent",
                                },
                                "&:hover fieldset": {
                                    borderColor: "transparent",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "transparent",
                                },
                                "& .MuiInputLabel-root": {
                                    color: "white",
                                },
                                "& .MuiInputBase-input": {
                                    color: "white",
                                },
                            },
                        }} />
                    <TextField
                        id='waktumasak'
                        placeholder='Masukkan Waktu Memasak'
                        sx={{
                            width: "100%",
                            marginTop: "5%",
                            textAlign: "center",
                            "& .MuiOutlinedInput-root": {
                                border: "4px solid",
                                borderColor: "#D8E9A8",
                                borderRadius: "20px",
                                "& fieldset": {
                                    borderColor: "transparent",
                                },
                                "&:hover fieldset": {
                                    borderColor: "transparent",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "transparent",
                                },
                                "& .MuiInputLabel-root": {
                                    color: "white",
                                },
                                "& .MuiInputBase-input": {
                                    color: "white",
                                },
                            },
                        }} />
                </Box>
            </Grid>

        </>
    )
}

export default FormResep