import React from 'react'
import { Box, TextField, Button } from '@mui/material'

const FormRegister = () => {

  return (
    <Box sx={{
      display: { xs: "flex", sm: "column", md: "row" },
      flexDirection: "column",
    }}>
      <TextField
        id="name"
        placeholder="Your Name"
        type="text"
        variant="standard"
        sx={{
          marginTop: {xs: 2, md: 2, lg: 4 },
          input: { color: "white" },
          "& .MuiInput-underline:before": { borderBottomColor: "white" },
        }}
      />
      <TextField
        id="email"
        placeholder="Your Email"
        type="email"
        variant="standard"
        sx={{
          marginTop: {xs: 2, md: 2, lg: 4 },
          input: { color: "white" },
          "& .MuiInput-underline:before": { borderBottomColor: "white" },
        }}
      />
      <TextField
        id="password"
        placeholder="Create Your Password"
        type="password"
        variant="standard"
        sx={{
          marginTop: {xs: 2, md: 2, lg: 4 },
          input: { color: "white" },
          "& .MuiInput-underline:before": { borderBottomColor: "white" },
        }}
      />
      <TextField
        id="password"
        placeholder="Confirm Your Password"
        type="password"
        variant="standard"
        sx={{
          marginTop: {xs: 2, md: 4 },
          input: { color: "white" },
          "& .MuiInput-underline:before": { borderBottomColor: "white" },
        }}
      />
      <Button variant='contained' sx={{
        textTransform: "none",
        marginTop: {xs: 4, md: 4,},
        backgroundColor: "#00673B",
        color: "white",
      }}>Sign Up</Button>
    </Box>
  )
}

export default FormRegister