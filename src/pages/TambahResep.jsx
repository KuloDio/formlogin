import React from 'react'
import { Box, Grid, Typography } from '@mui/material'

const TambahResep = () => {
  return (
    <>
        <Typography sx={{
                textAlign: "center",
                border: "3px solid",
                borderRadius: "25px",
                borderColor: "#D8E9A8",
                fontWeight: "800",
                paddingY: "1%",
              }}>BUAT RESEP ANDA DI SINI</Typography>
        <Box>
            <Grid container direction={{ xs: "row", sm: "colum", md: "row", lg: "row" }}
                
            sx={{
                
                justifyContent: "space-around",
            }}>
                <Box xs={12} md={4} sx={{
                    width: {xs: "100%", md: "20%"},
                    height: "20vh",
                    backgroundColor: "grey",
                }}>
                    Item 1
                </Box>
                <Box xs={12} md={4} sx={{
                    width: "20%",
                    height: "20vh",
                    backgroundColor: "grey",
                }}>
                    Item 1
                </Box>
                <Box  sx={{
                    width: "20%",
                    height: "20vh",
                    backgroundColor: "grey",
                }}>
                    Item 1
                </Box>
            </Grid>
        </Box>
    </>
  )
}

export default TambahResep