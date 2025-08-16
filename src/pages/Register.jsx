import React from 'react'
import bgregister from '../assets/bgregister.jpeg'
import { Typography,  Box, Grid, Button } from '@mui/material'
import FormRegister from '../components/formregister'

const Register = () => {
    return (
        <>
            <Box sx={{
                minHeight: "100%",
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: `url(${bgregister})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
                <Grid
                    container
                    direction={{ xs: "row", sm: "colum", md: "row", lg: "row" }}
                    sx={{
                        bgcolor: "rgba(24, 24, 24, 0.13)",
                        backdropFilter: "blur(12px)",
                        minHeight: "90vh",
                        width: "95vw",
                        justifyContent: "space-between",
                    }}
                    display={'flex'}
                >
                    <Box sx={{
                        color: 'white',
                        padding: 4,
                        width: {lg: "50%"},
                        display: "flex",
                        flexDirection: "column",
                        marginTop: {sm: "0", md: "12%"},
                    }}>
                        <Typography variant='h2' sx={{
                            fontWeight: "800",
                        }}>Let's Get Started</Typography>
                        <Typography>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id sequi cum quaerat, quibusdam maxime unde asperiores iure dolores pariatur non soluta officiis maiores voluptates fugiat officia quas beatae, accusantium eius.
                        </Typography>
                    </Box>
                    <Box sx={{
                        color: 'white',
                        padding: {xs: 4 ,sm: 4, md: 10},
                        width: {xs: "90%", sm: "100%", md: "100%", lg: "34%"},
                        bgcolor: "rgba(0, 0, 0, 0.63)",
                    }}>
                        <Typography variant='h4' sx={{
                            fontWeight: "900",
                        }}>Sign Up</Typography>
                        <FormRegister/>
                        <Box sx={{
                            marginTop: 4,
                            marginX: 6,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}>
                            <Typography>Have a account?</Typography>
                            <Button href='/login' sx={{
                                textTransform: "none",
                                color: "#00673B",
                                fontWeight: 600,
                            }}>Sign In</Button>
                        </Box>
                    </Box>
                </Grid>
            </Box>
        </>
    )
}

export default Register 