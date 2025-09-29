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
                <Box
                component="img"
                src={logocook}
                alt="logo"
                sx={{
                    
                    width: "10%",
                    
                    ml: { xs: 4, sm: 0 },
                }}
                />

                <Box
                    sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: 1, sm: 2 },
                    }}
                >
                    
                    <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        px: 0.5,
                        py: 0.5,
                        width: { xs: "200px", sm: "180px", md: "250px" },
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

                    <Button
                        onClick={() => navigate("/login")}
                         sx={{
                            color: "white",
                            backgroundColor: "#1E5128",
                            paddingX: { xs: 1, md: 3 },
                            fontWeight: "800",
                            alignItems: "center",
                            display: { xs: "none", sm: "flex" }, 
                        }}
                    >
                    Login
                    </Button>
                </Box>
                </Toolbar>


        </AppBar>
    )
}
