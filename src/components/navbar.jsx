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
            <Toolbar sx={{
                justifyContent: "space-between"
            }}>
                <img
  src={logocook}
  alt="logo"
  style={{
    width: "40px",   // logo biar kecil di mobile
    display: "flex", // selalu tampil
  }}
/>

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
                        }} />
                        <Input placeholder='Search' sx={{
                            "& .MuiInput-input::placeholder": {
                                color: "#D8E9A8",
                                opacity: 1,
                            },
                            color: "#D8E9A8",
                        }} ></Input >
                    </Box>
                    <Button
  onClick={() => navigate("/login")}
  sx={{
    color: "white",
    backgroundColor: "#1E5128",
    paddingX: { xs: 1, md: 3 }, // responsive padding
    fontWeight: "800",
    alignItems: "center"
  }}
>
  Loginnn
</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
