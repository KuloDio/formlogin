import React, { useState } from 'react'
import { AppBar, Box, Typography, Button, Toolbar, Link, Input, } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom'
import logocook from '../assets/image/logocook.png'

export const Navbar = () => {
    const navigate = useNavigate();

    return (
        <AppBar sx={{
            backgroundColor: "#191A19",
        }}>
            <Toolbar
                sx={{
                    justifyContent: "space-between", // selalu space-between
                }}
                >
                {/* Logo */}
                <Box
                component="img"
                src={logocook}
                alt="logo"
                sx={{
                    height: { xs: 28, sm: 36, md: 40 },
                    width: "auto",
                    objectFit: "contain",
                    mx: 5,
                    ml: { xs: 1.5, sm: 0 }, // geser logo ke kanan hanya di mobile
                }}
                />

                {/* Search + Login */}
                <Box
                    sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: 1, sm: 2 },
                    }}
                >
                    {/* Search box */}
                    <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        px: 1,
                        py: 0.5,
                        width: { xs: "130px", sm: "180px", md: "250px" },
                        borderRadius: "8px",
                        backgroundColor: "transparent",
                        border: "2px solid",
                        borderColor: "#1E5128",
                        boxShadow: 3,
                        gap: 0.5,
                    }}
                    >
                    <SearchIcon sx={{ color: "#ADBC9F", fontSize: { xs: 18, md: 22 } }} />
                    <Input
                        placeholder="Search"
                        disableUnderline
                        sx={{
                        flex: 1,
                        fontSize: { xs: "0.75rem", sm: "0.9rem", md: "1rem" },
                        "& .MuiInput-input::placeholder": {
                            color: "#D8E9A8",
                            opacity: 1,
                        },
                        color: "#D8E9A8",
                        }}
                    />
                    </Box>

                    {/* Login Button */}
                    <Button
                    onClick={() => navigate("/login")}
                    sx={{
                        color: "white",
                        backgroundColor: "#1E5128",
                        px: { xs: 1.5, md: 3 },
                        fontWeight: "800",
                        borderRadius: "8px",
                        "&:hover": {
                        backgroundColor: "#276336",
                        },
                    }}
                    >
                    Login
                    </Button>
                </Box>
                </Toolbar>


        </AppBar>
    )
}
