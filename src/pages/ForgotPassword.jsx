import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import { Email } from "@mui/icons-material";
import Background from "../assets/image/background.jpeg";
import { Link } from "react-router-dom";
import axios from "axios";

function ForgotPassword() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [email, setEmail] = useState("");

  const handleReset = async () => {
    try {
      const res = await axios.post(`${API_URL}/auth/forgot-password`, { email });
      alert(res.data.message || "Link reset password telah dikirim ke email kamu!");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Gagal mengirim link reset password!");
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
          px: 15,
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
          }}
        >
          Forgot Password
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
          Enter your email to receive reset instructions
        </Typography>

        <TextField
          placeholder="Email"
          variant="standard"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button
            variant="contained"
            sx={{
              py: 1,
              px: 6,
              backgroundColor: "#00673B",
              "&:hover": {
                backgroundColor: "#388e3c",
                transform: "scale(1.05)",
              },
            }}
            onClick={handleReset}
          >
            Send Reset Link
          </Button>
        </Box>

        <Typography
          variant="body2"
          sx={{ textAlign: "center", mt: 3, color: "white" }}
        >
          Remember your password?{" "}
          <Link
            to="/login"
            style={{
              color: "#00c3ffff",
              cursor: "pointer",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            Back to Login
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
}

export default ForgotPassword;
