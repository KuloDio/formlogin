import React from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import { Email, Lock } from "@mui/icons-material";
import Background from "../assets/image/background.jpeg";

function Login() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      {/* Kotak blur */}
      <Paper
        elevation={6}
        sx={{
          padding: 3,
          width: "100%",
          maxWidth: 400,
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(6px)",
          borderRadius: 3,
          px: 15
        }}
      >
        {/* Logo */}
        {/* <Box display="flex" justifyContent="center" mb={2}>
          <img
            src="/logo192.png"
            alt="Logo"
            style={{ width: 60, height: 60 }}
          />
        </Box> */}

        {/* Judul */}
        <Typography
          variant="h4"
          component="h1"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#43a047",
            pb: 1,
          }}
        >
          WELCOME
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: "white",
            mb: 3,
            opacity: 0.9,
          }}
        >
          Please Login To Continue !
        </Typography>

        {/* Input Email */}
        <TextField
          placeholder="Email"
          variant="standard"
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email color="action" />
              </InputAdornment>
            ),
            sx: {
              backgroundColor: "rgba(255,255,255,0.8)",
              borderRadius: 2,
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              border: "1px solid rgba(255,255,255,0.2)",
              py: 1
            },
          }}
        />

        {/* Input Password */}
        <TextField
          placeholder="Password"
          type="password"
          variant="standard"
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock color="action" />
              </InputAdornment>
            ),
            sx: {
              backgroundColor: "rgba(255,255,255,0.8)",
              borderRadius: 2,
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              border: "1px solid rgba(255,255,255,0.2)",
              py: 1
            },
          }}
        />

        {/* Tombol Login */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button
            variant="contained"
            sx={{
              py: 1,
              px: 6,
              backgroundColor: "#43a047",
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor: "#388e3c",
                transform: "scale(1.05)",
              },
            }}
            
          >
            Login
          </Button>
        </Box>

        {/* Link tambahan */}
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            mt: 1,
            color: "white",
            cursor: "pointer",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Forgot Password?
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            mt: 2,
            color: "white",
          }}
        >
          Don't have account?{" "}
          <span style={{ color: "#43a047", cursor: "pointer" }}>Register</span>
        </Typography>
      </Paper>
    </Box>
  );
}

export default Login;
