import React from 'react'
import { Box, Grid, Typography, Button, TextField, Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material'

const BahanLangkah = () => {
    const [openLangkah, setOpenLangkah] = React.useState(false);
    const handleClickOpenLangkah = () => {
        setOpenLangkah(true);
    };
    const handleCloseLangkah = () => {
        setOpenLangkah(false);
    };

    const [openBahan, setOpenBahan] = React.useState(false);
    const handleClickOpenBahan = () => {
        setOpenBahan(true);
    };
    const handleCloseBahan = () => {
        setOpenBahan(false);
    };

    return (
        <>
            <Grid container direction={{ xs: "row", sm: "colum", md: "row", lg: "row" }}
                sx={{
                    justifyContent: "space-around",
                    marginTop: { md: "3%" }
                }}>

                {/* Langakh */}
                <Box xs={12} md={4} sx={{
                    width: { xs: "100%", md: "49%" },
                    height: "fit-content",
                    marginTop: { xs: "2%", md: "2" },
                    padding: "1%",
                }}>
                    <Typography sx={{
                        textAlign: "center",
                        border: "5px solid",
                        borderRadius: "25px",
                        borderColor: "#D8E9A8",
                        fontWeight: "800",
                        padding: "1%",
                    }}>LANGKAH LANGKAH MEMASAK
                    </Typography>
                    <Box sx={{
                        width: { xs: "100%", md: "100%" },
                        minHeight: "50vh",
                        borderRadius: "25px",
                        backgroundColor: "#D8E9A8",
                        boxShadow: "0 10px 10px 0 #00000050",
                        fontWeight: "800",
                        padding: "1%",
                        marginTop: "4%",
                        position: "relative",
                    }}>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            marginTop: 2,
                            placeItems: "bottom"
                        }}>
                            <Button variant='contained'
                                onClick={handleClickOpenLangkah}
                                sx={{
                                    position: "absolute",
                                    bottom: "4%",
                                    right: "3%",
                                    backgroundColor: "#12372A",
                                    color: "#D8E9A8",
                                    borderRadius: "15px",
                                    fontWeight: "600",
                                }}>Tambah Langkah</Button>

                            {/* Form Langkah */}
                            <Dialog open={openLangkah} onClose={handleCloseLangkah}>
                                <DialogTitle sx={{
                                    backgroundColor: "#12372A",
                                    fontWeight: "800",
                                    color: "#D8E9A8",
                                    textAlign: "center",
                                }}>Langkah-Langkah Memasak</DialogTitle>
                                <DialogContent sx={{
                                    backgroundColor: "#12372A",
                                    width: { xs: "70vw", sm: "50vw", md: "30vw" },
                                }}>
                                    <Box>
                                        <DialogContentText sx={{
                                            fontWeight: "800",
                                            marginTop: "2%",
                                            backgroundColor: "#D8E9A8",
                                            width: "100%",
                                            borderRadius: "25px",
                                            padding: "1%",
                                            textAlign: "center",

                                        }}>
                                            Nomer Urut Langkah Memasak
                                        </DialogContentText>
                                        <TextField
                                            id='nomerlangkah'
                                            placeholder='Masukan Nomer Urut Langkah Pembuatan'
                                            type='number'
                                            sx={{
                                                width: "100%",
                                                marginTop: "5%",
                                                textAlign: "center",
                                                "& .MuiOutlinedInput-root": {
                                                    border: "3px solid",
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

                                    <Box sx={{
                                        marginTop: "5%",
                                    }}>
                                        <DialogContentText sx={{
                                            fontWeight: "800",
                                            marginTop: "2%",
                                            backgroundColor: "#D8E9A8",
                                            width: "100%",
                                            borderRadius: "25px",
                                            padding: "1%",
                                            textAlign: "center",

                                        }}>
                                            Deskripsi Langkah Memasak
                                        </DialogContentText>
                                        <TextField
                                            id='deskripsilangkah'
                                            placeholder='Masukan Deskripsi Langkah Pembuatan'
                                            sx={{
                                                width: "100%",
                                                marginTop: "5%",
                                                textAlign: "center",
                                                "& .MuiOutlinedInput-root": {
                                                    border: "3px solid",
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
                                    <Box sx={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        marginTop: "5%",
                                        gap: "2%",
                                    }}>
                                        <Button variant='contained'
                                            onClick={handleCloseLangkah}
                                            sx={{
                                                backgroundColor: "#D8E9A8",
                                                color: "#1E5128",
                                                fontWeight: "800",
                                                borderRadius: "15px",
                                            }}>
                                            Cancel
                                        </Button>
                                        <Button variant='contained'
                                            sx={{
                                                backgroundColor: "#D8E9A8",
                                                color: "#1E5128",
                                                fontWeight: "800",
                                                borderRadius: "15px",
                                            }}>
                                            TAMBAH LANGKAH
                                        </Button>
                                    </Box>
                                </DialogContent>
                            </Dialog>
                        </Box>
                    </Box>
                </Box>



                {/* Bahan */}
                <Box xs={12} md={4} sx={{
                    width: { xs: "100%", md: "49%" },
                    height: "80vh",
                    marginTop: { xs: "15%", md: "2%" },
                    padding: "1%",
                }}>
                    <Typography sx={{
                        textAlign: "center",
                        border: "5px solid",
                        borderRadius: "25px",
                        borderColor: "#D8E9A8",
                        fontWeight: "800",
                        padding: "1%",
                    }}>BAHAN BAHAN MASAKAN
                    </Typography>
                    <Box sx={{
                        width: { xs: "100%", md: "100%" },
                        minHeight: "50vh",
                        borderRadius: "25px",
                        backgroundColor: "#D8E9A8",
                        boxShadow: "0 10px 10px 0 #00000050",
                        fontWeight: "800",
                        padding: "1%",
                        marginTop: "4%",
                        position: "relative",
                    }}>

                        <Box sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            marginTop: 2,
                            placeItems: "bottom"
                        }}>
                            <Button variant='contained'
                                onClick={handleClickOpenBahan}
                                sx={{
                                    position: "absolute",
                                    bottom: "4%",
                                    right: "3%",
                                    backgroundColor: "#12372A",
                                    color: "#D8E9A8",
                                    borderRadius: "15px",
                                    fontWeight: "600",
                                }}>Tambah Bahan</Button>
                        </Box>
                        {/* Form Langkah */}
                        <Dialog open={openBahan} onClose={handleCloseBahan}>
                            <DialogTitle sx={{
                                backgroundColor: "#12372A",
                                fontWeight: "800",
                                color: "#D8E9A8",
                                textAlign: "center",
                            }}>Bahan Masakan</DialogTitle>
                            <DialogContent sx={{
                                backgroundColor: "#12372A",
                                width: { xs: "70vw", sm: "50vw", md: "30vw" },
                            }}>
                                <Box>
                                    <DialogContentText sx={{
                                        fontWeight: "800",
                                        marginTop: "2%",
                                        backgroundColor: "#D8E9A8",
                                        width: "100%",
                                        borderRadius: "25px",
                                        padding: "1%",
                                        textAlign: "center",
                                    }}>
                                        Nama Bahan Masakan
                                    </DialogContentText>
                                    <TextField
                                        id='namabahan'
                                        placeholder='Masukan Nama Bahan Masakan'
                                        type='number'
                                        sx={{
                                            width: "100%",
                                            marginTop: "5%",
                                            textAlign: "center",
                                            "& .MuiOutlinedInput-root": {
                                                border: "3px solid",
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

                                <Box sx={{
                                    marginTop: "5%",
                                }}>
                                    <DialogContentText sx={{
                                        fontWeight: "800",
                                        marginTop: "2%",
                                        backgroundColor: "#D8E9A8",
                                        width: "100%",
                                        borderRadius: "25px",
                                        padding: "1%",
                                        textAlign: "center",

                                    }}>
                                        Jumlah Bahan
                                    </DialogContentText>
                                    <TextField
                                        id='jumlahbahan'
                                        placeholder='Masukan Jumlah Bahan Masakan'
                                        sx={{
                                            width: "100%",
                                            marginTop: "5%",
                                            textAlign: "center",
                                            "& .MuiOutlinedInput-root": {
                                                border: "3px solid",
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
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    marginTop: "5%",
                                    gap: "2%",
                                }}>
                                    <Button variant='contained'
                                        onClick={handleCloseBahan}
                                        sx={{
                                            backgroundColor: "#D8E9A8",
                                            color: "#1E5128",
                                            fontWeight: "800",
                                            borderRadius: "15px",
                                        }}>
                                        Cancel
                                    </Button>
                                    <Button variant='contained'
                                        sx={{
                                            backgroundColor: "#D8E9A8",
                                            color: "#1E5128",
                                            fontWeight: "800",
                                            borderRadius: "15px",
                                        }}>
                                        Tambah Bahan
                                    </Button>
                                </Box>
                            </DialogContent>
                        </Dialog>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default BahanLangkah