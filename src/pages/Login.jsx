import React, { useState } from "react";
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
        p: { xs: 2, md: 4 },
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: { xs: 3, sm: 4 },
          width: "100%",
          maxWidth: { xs: 380, sm: 450, md: 600 },
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(6px)",
          borderRadius: 3,
          px: { xs: 3, sm: 6, md: 10 },
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#43a047",
            pb: 1,
            fontSize: { xs: "1.8rem", sm: "2rem" },
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
            fontSize: { xs: "0.9rem", sm: "1rem" },
          }}
        >
          Please Sign In To Continue!
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
              py: 1,
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
              py: 1,
            },
          }}
        />

        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              py: 1.3,
              backgroundColor: "#00673B",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#388e3c",
                transform: "scale(1.03)",
              },
              transition: "all 0.2s ease",
            }}
            onClick={handleLogin}
          >
            Sign In
          </Button>
        </Box>

        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            mt: 3,
            color: "white",
            fontSize: { xs: "0.85rem", sm: "0.95rem" },
          }}
        >
          Don't have an account?{" "}
          <Link
            to="/register"
            style={{
              color: "#A5BB86",
              cursor: "pointer",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Sign Up
          </Link>
        </Typography>

        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Typography
            component={Link}
            to="/forgot-password"
            sx={{
              color: "#A5BB86",
              textDecoration: "none",
              fontWeight: "bold",
              display: "inline-block",
              transition: "all 0.3s ease",
              fontSize: { xs: "0.85rem", sm: "0.95rem" },
              "&:hover": {
                transform: "scale(1.05)",
                color: "rgba(255, 255, 255, 1)",
              },
            }}
          >
            Forgot Password?
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default Login;
