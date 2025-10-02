import React, { useState } from "react";
import {
  Box, Paper, Typography, TextField, Button, InputAdornment
} from "@mui/material";
import { Email, Lock } from "@mui/icons-material";
import Background from "../assets/image/background.jpeg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${API_URL}/auth/login`, {
        email: form.email,
        password: form.password,
      });
      console.log("Response dari backend:", res.data.token);
      // Simpan token di localStorage
      localStorage.setItem("token", res.data.token);


      alert("Login success!");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Sign In gagal!");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
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
      <Paper
        elevation={6}
        sx={{
          padding: 3,
          width: "100%",
          maxWidth: 700,
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(6px)",
          borderRadius: 3,
          px: 15
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{ textAlign: "center", fontWeight: "bold", color: "#43a047", pb: 1 }}
        >
          WELCOME
        </Typography>
        <Typography variant="body2" sx={{ textAlign: "center", color: "white", mb: 3, opacity: 0.9 }}>
          Please Sign In To Continue !
        </Typography>

        <TextField
          name="email"
          placeholder="Email"
          variant="standard"
          fullWidth
          margin="normal"
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email color="action" sx={{ mx: 1 }} />
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

        <TextField
          name="password"
          placeholder="Password"
          type="password"
          variant="standard"
          fullWidth
          margin="normal"
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock color="action" sx={{ mx: 1 }} />
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

        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button
            variant="contained"
            sx={{
              py: 1, px: 6,
              backgroundColor: "#00673B",
              "&:hover": { backgroundColor: "#388e3c", transform: "scale(1.05)" },
            }}
            onClick={handleLogin}
          >
            Sign In
          </Button>
        </Box>

        <Typography variant="body2" sx={{ textAlign: "center", mt: 2, color: "white" }}>
          Don't have account?{" "}
          <Link to="/register" style={{ color: "#43a047", cursor: "pointer", textDecoration: "none" }}>
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
}

export default Login;