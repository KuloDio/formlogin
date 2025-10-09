import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  InputAdornment,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import { Lock } from "@mui/icons-material";
import Background from "../assets/image/background.jpeg";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

function ResetPassword() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleResetPassword = async () => {
    if (!token) {
      setSnackbar({ open: true, message: "Token tidak ditemukan.", severity: "error" });
      return;
    }
    if (!password || !confirmPassword) {
      setSnackbar({ open: true, message: "Isi semua field.", severity: "warning" });
      return;
    }
    if (password !== confirmPassword) {
      setSnackbar({
        open: true,
        message: "Password dan konfirmasi tidak sama!",
        severity: "warning",
      });
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`${API_URL}/auth/reset-password`, {
        new_password: password,
        token: token,
      });

      setSnackbar({
        open: true,
        message: res.data.message || "Password berhasil diubah!",
        severity: "success",
      });

      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      console.error(err);
      setSnackbar({
        open: true,
        message: err.response?.data?.message || "Gagal mengubah password!",
        severity: "error",
      });
    } finally {
      setLoading(false);
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
          px: { xs: 4, md: 15 },
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
          Reset Password
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
          Enter your new password below
        </Typography>

        <TextField
          placeholder="New Password"
          variant="standard"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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

        <TextField
          placeholder="Confirm Password"
          variant="standard"
          type="password"
          fullWidth
          margin="normal"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
            disabled={loading}
            sx={{
              py: 1,
              px: 6,
              backgroundColor: "#00673B",
              "&:hover": {
                backgroundColor: "#388e3c",
                transform: "scale(1.05)",
              },
              transition: "all 0.2s ease",
            }}
            onClick={handleResetPassword}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Reset Password"}
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
              display: "inline-block",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Back to Login
          </Link>
        </Typography>
      </Paper>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }} // 👈 posisi di atas tengah
        >
        <Alert severity={snackbar.severity} sx={{ width: "100%" }}>
            {snackbar.message}
        </Alert>
      </Snackbar>

    </Box>
  );
}

export default ResetPassword;
