import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Snackbar,
  Alert,
} from "@mui/material";
import { Email } from "@mui/icons-material";
import Background from "../assets/image/background.jpeg";
import { Link } from "react-router-dom";
import axios from "axios";

function ForgotPassword() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [email, setEmail] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleReset = async () => {
    try {
      const res = await axios.post(`${API_URL}/auth/forgot-password`, { email });
      setSnackbar({
        open: true,
        message: res.data.message || "Link reset password telah dikirim ke email kamu!",
        severity: "success",
      });
    } catch (err) {
      console.error(err);
      setSnackbar({
        open: true,
        message: err.response?.data?.message || "Gagal mengirim link reset password!",
        severity: "error",
      });
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
        p: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "100%",
          maxWidth: 450,
          bgcolor: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(8px)",
          borderRadius: 3,
          p: { xs: 3, sm: 4, md: 5 },
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#00673B",
            mb: 1,
            fontSize: { xs: "1.6rem", sm: "1.8rem" },
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
            fontSize: { xs: "0.85rem", sm: "0.9rem" },
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
                <Email sx={{ color: "#00673B", mx: 1 }} />
              </InputAdornment>
            ),
            sx: {
              backgroundColor: "rgba(255,255,255,0.9)",
              borderRadius: 2,
              py: 1,
              px: 1,
              fontSize: { xs: "0.9rem", sm: "1rem" },
            },
          }}
        />

        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Button
            variant="contained"
            sx={{
              py: 1,
              px: 6,
              fontWeight: "bold",
              backgroundColor: "#00673B",
              "&:hover": {
                backgroundColor: "#388e3c",
                transform: "scale(1.05)",
                transition: "all 0.3s ease",
              },
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
            onClick={handleReset}
          >
            Send Reset Link
          </Button>
        </Box>

        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            mt: 3,
            color: "white",
            fontSize: { xs: "0.85rem", sm: "0.9rem" },
          }}
        >
          Remember your password?{" "}
          <Link
            to="/login"
            style={{
              color: "#00E676",
              fontWeight: "bold",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            Back to Login
          </Link>
        </Typography>
      </Paper>

      {/* Snackbar Feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity={snackbar.severity}
          sx={{
            width: "100%",
            fontFamily: "poppins",
            fontWeight: "600",
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ForgotPassword;
