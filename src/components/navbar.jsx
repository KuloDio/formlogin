import React from 'react'
import { AppBar, Box, Typography, Button, Toolbar, Link, Search } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate();
  return (
    <AppBar sx={{
        backgroundColor: "transparent"
    }}>
        <Toolbar sx={{
            justifyContent: "space-between"
        }}>
        <Typography variant='h5' sx={{
            fontWeight: "900",
            color: "black",
        }}>Logo</Typography>
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",
            
        }}>
            <Link underline='none' href="/" sx={{
                color: "#ADBC9F",
            }}>Home</Link>
            <Link underline='none' href="/about" sx={{
                color: "#ADBC9F",
            }}>Recipe</Link>
        </Box>
        
        <Button onClick={() => navigate("/login")} sx={{
            color: "white",
            backgroundColor: "#12372A",
            paddingX: 3,
            fontWeight: "800",
            alignItems: "center"
        }}>Login</Button>
        </Toolbar>
    </AppBar>
  )
}
