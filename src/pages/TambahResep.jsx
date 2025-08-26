import React from 'react'
import { Box, Grid, Typography } from '@mui/material'

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
                padding: {xs: "3%", sm: "3%", md: "2%"},
                marginTop: {xs: "8%", sm: "8%", md: "4%"},
                height: "100vh",
            }}
            >
                <Grid container direction={{ xs: "row", sm: "colum", md: "row", lg: "row" }}
                    sx={{
                        justifyContent: "space-around",
                    }}>
                    <Box xs={12} md={4} sx={{
                        width: { xs: "100%", md: "32%" },
                        height: "40vh",
                        backgroundColor: "grey",
                        marginTop: { xs: "2%", md: "2" },
                    }}>
                        Item 1
                    </Box>
                    <Box xs={12} md={4} sx={{
                        width: { xs: "100%", md: "32%" },
                        height: "40vh",
                        backgroundColor: "grey",
                        marginTop: { xs: "2%", md: "2" },
                    }}>
                        Item 2
                    </Box>
                    <Box sx={{
                        width: { xs: "100%", md: "32%" },
                        height: "40vh",
                        backgroundColor: "grey",
                        marginTop: { xs: "2%", md: "2" },
                    }}>
                        Item 3
                    </Box>
                </Grid>
                <Grid container direction={{ xs: "row", sm: "colum", md: "row", lg: "row" }}
                    sx={{
                        justifyContent: "space-around",
                        
                    }}>
                    <Box xs={12} md={4} sx={{
                        width: { xs: "100%", md: "49%" },
                        height: "40vh",
                        backgroundColor: "grey",
                        marginTop: { xs: "2%", md: "2" },
                    }}>
                        Item 1
                    </Box>
                    <Box xs={12} md={4} sx={{
                        width: { xs: "100%", md: "49%" },
                        height: "40vh",
                        backgroundColor: "grey",
                        marginTop: { xs: "2%", md: "2" },
                    }}>
                        Item 2
                    </Box>
                </Grid>
            </Box>
        </>
    )
}

export default TambahResep