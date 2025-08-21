import React from 'react'
import { AppBar, Box, Typography, Button, Toolbar, Link, Input, } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate();

    return (
        <AppBar sx={{
            backgroundColor: "transparent",
        }}>
            <Toolbar sx={{
                justifyContent: "space-between"
            }}>
                <Typography variant='h5' sx={{
                    fontWeight: "900",
                    color: "white",
                }}>Logo</Typography>
                {/* <Box sx={{
                    display: {xs: "none", sm: "none", md: "flex"},
                    flexDirection: "row",
                    gap: "16px",
                }}>
                    <Link underline='none' href="/" sx={{
                        color: "#ADBC9F",
                    }}>Home</Link>
                    <Link underline='none' href="/resep" sx={{
                        color: "#ADBC9F",
                    }}>Explore Recipe</Link>
                </Box> */}
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                }}>
                    <Box sx={{
                        display: "flex",
                        background: "blue",
                        paddingY: "4px",
                        paddingX: "6px",
                        width: "250px",
                        alignItems: "center",
                        borderRadius: "8px",
                        backgroundColor: "transparent",
                        border: "3px solid",
                        borderColor: "#1E5128",
                        boxShadow: "5",
                        gap: "4px",
                    }}>
                        <SearchIcon sx={{
                            color: "#ADBC9F"
                        }}/>
                        <Input placeholder='Search' sx={{
                            "& .MuiInput-input::placeholder": {
                                color: "#D8E9A8",
                                opacity: 1,
                            },
                            color: "#D8E9A8",
                        }} ></Input >
                    </Box>
                    <Button onClick={() => navigate("/login")} sx={{
                        display: {xs: "none", sm: "none", md: "flex"},
                        color: "white",
                        backgroundColor: "#1E5128",
                        paddingX: 3,
                        fontWeight: "800",
                        alignItems: "center"
                    }}>Login</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
