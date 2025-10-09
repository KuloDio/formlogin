import React, { useState, useEffect } from "react";
import {
  Box,
  Avatar,
  Typography,
  Button,
  IconButton,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Slide,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import banner from "../assets/image/bannerProfile.png";
import LinkIcon from "@mui/icons-material/Link";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Profile() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // === State utama ===
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [photoPreview, setPhotoPreview] = useState(null);

  // === State edit dialog ===
  const [open, setOpen] = useState(false);
  const [tempName, setTempName] = useState("");
  const [tempBio, setTempBio] = useState("");
  const [tempEmail, setTempEmail] = useState("");

  // --- DIUBAH --- : Kita butuh dua state untuk foto
  const [tempPhotoPreview, setTempPhotoPreview] = useState(null); // Untuk menampilkan preview di dialog
  const [tempPhotoFile, setTempPhotoFile] = useState(null);       // Untuk menyimpan file asli yang akan di-upload

  // === Snackbar dan loading ===
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  const [loading, setLoading] = useState(true);

  // open avatar
  const [openPhoto, setOpenPhoto] = useState(false);
  const [photoToView, setPhotoToView] = useState(null);


  // === Load data dari backend ===
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token tidak ditemukan. Pastikan sudah login.");
      setLoading(false);
      return;
    }

    axios
      .put(
        `${API_URL}/auth/profile`, // URL yang sudah benar
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        const data = res.data.data;
        setName(data.name || "");
        setBio(data.bio || "");
        setEmail(data.email || "");
        setPhotoPreview(data.avatar || null);
      })
      .catch((err) => {
        console.error("Gagal mengambil profile:", err);
        setSnackbar({ open: true, message: "Gagal memuat profile", severity: "error" });
      })
      .finally(() => setLoading(false));
  }, []);

  // === Fungsi buka/tutup dialog ===
  const handleClickOpen = () => {
    setTempName(name);
    setTempBio(bio);
    setTempEmail(email);
    // --- DIUBAH --- : Atur state preview dan file saat dialog dibuka
    setTempPhotoPreview(photoPreview);
    setTempPhotoFile(null); // Reset file setiap kali dialog dibuka
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  // --- DIUBAH --- : Fungsi ini sekarang menyimpan file DAN preview-nya
  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Simpan file asli ke state
    setTempPhotoFile(file);

    // Buat URL preview untuk ditampilkan di avatar
    const reader = new FileReader();
    reader.onloadend = () => {
      setTempPhotoPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // --- DIUBAH --- : Ini adalah fungsi handleSave yang sudah benar dan lengkap
  const handleSave = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setSnackbar({ open: true, message: "Sesi habis, silakan login kembali", severity: "error" });
      return;
    }

    // 1. Buat objek FormData
    const formData = new FormData();
    formData.append("name", tempName);
    formData.append("email", tempEmail);
    formData.append("bio", tempBio);
    if (tempPhotoFile) {
      // Jika ada file baru yang dipilih, tambahkan ke form data
      formData.append("avatar", tempPhotoFile);
    }

    try {
      // 2. Kirim request dengan formData
      const response = await axios.put(
        `${API_URL}/auth/profile`, // <-- Pastikan URL SAMA dengan yang di useEffect
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            // "Content-Type" akan diatur otomatis oleh Axios menjadi "multipart/form-data"
          },
        }
      );

      // 3. Update state utama dengan data baru dari server
      const updatedData = response.data.data; // Sesuaikan jika data ada di dalam properti 'data'
      setName(updatedData.name);
      setBio(updatedData.bio);
      setEmail(updatedData.email);
      setPhotoPreview(updatedData.avatar);

      handleClose();
      setSnackbar({ open: true, message: "Profile berhasil diperbarui!", severity: "success" });

    } catch (error) {
      console.error("Gagal update profil:", error.response?.data || error.message);
      setSnackbar({ open: true, message: "Gagal memperbarui profile.", severity: "error" });
    }
  };

  // === Copy link profil ===
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setSnackbar({ open: true, message: "Link berhasil disalin!", severity: "success" });
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <CircularProgress color="success" />
      </Box>
    );
  }

  // buka/tutup avatar
  const handleOpenPhoto = () => {
  if (photoPreview) {
    setPhotoToView(photoPreview);
    setOpenPhoto(true);
  }
};

const handleClosePhoto = () => setOpenPhoto(false);


  return (
    <>
      <Box sx={{ position: "relative", mb: 8 }}>
        {/* Banner */}
        <Box
          sx={{
            width: "100%",
            height: { xs: 150, md: 300 },
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={banner}
            alt="cover"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        {/* Avatar */}
        <Avatar
          src={photoPreview || undefined}
          alt="Profile"
          onClick={handleOpenPhoto} // 👈 tambahkan ini
          sx={{
            width: { xs: 120, md: 150 },
            height: { xs: 120, md: 150 },
            position: "absolute",
            left: { xs: 25, md: 25 },
            bottom: { xs: -50, md: -75 },
            border: "3px solid #D8E9A8",
            cursor: photoPreview ? "pointer" : "default", // hanya pointer jika ada foto
            transition: "transform 0.2s",
            "&:hover": { transform: photoPreview ? "scale(1.05)" : "none" },
          }}
        >
          {!photoPreview && "?"}
        </Avatar>


        {/* Tombol Edit */}
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ position: "absolute", bottom: -50, right: 20 }}
        >
          <IconButton
            sx={{
              color: "#D8E9A8",
              border: "1px solid #D8E9A8",
              "&:hover": { backgroundColor: "rgba(216,233,168,0.1)" },
            }}
            onClick={handleCopyLink}
          >
            <LinkIcon />
          </IconButton>
          <Button
            variant="outlined"
            sx={{
              color: "#D8E9A8",
              borderColor: "#D8E9A8",
              fontWeight: "bold",
              "&:hover": {
                borderColor: "#b5cc88",
                backgroundColor: "rgba(216,233,168,0.1)",
              },
            }}
            onClick={handleClickOpen}
          >
            Edit Profile
          </Button>
        </Stack>
      </Box>

      {/* Info */}
      <Typography variant="h4" color="#fff" sx={{ fontWeight: "bold", pl: 6, pt: 3 }}>
        {name || "Nama Kamu"}
      </Typography>
      <Typography variant="h6" color="#fff" sx={{ pl: 6, pt: 1 }}>
        {email || "Email belum diatur"}
      </Typography>
      <Typography variant="body1" color="#fff" sx={{ pl: 6, pt: 1 }}>
        {bio || "Tambahkan bio kamu disini..."}
      </Typography>

      {/* Dialog Edit */}
      <Dialog
        fullScreen={isMobile}
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: isMobile ? 0 : "16px",
            border: "3px solid #D8E9A8",
            overflow: "hidden",
          },
        }}
      >
        <DialogTitle
          sx={{
            backgroundColor: "#12372A",
            color: "#fff",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Edit Profile
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "#12372A" }}>
          {/* Foto */}
          <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
            <Box sx={{ position: "relative" }}>
              {/* --- DIUBAH --- : Gunakan tempPhotoPreview untuk sumber gambar */}
              <Avatar src={tempPhotoPreview || undefined} sx={{ width: 96, height: 96 }}>
                {!tempPhotoPreview && "?"}
              </Avatar>
              <input
                id="profile-photo-input"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handlePhotoChange}
              />
              <label htmlFor="profile-photo-input">
                <IconButton
                  component="span"
                  sx={{
                    position: "absolute",
                    bottom: -6,
                    right: -6,
                    bgcolor: "#D8E9A8",
                    "&:hover": { bgcolor: "#c7d994" },
                    border: "2px solid #12372A",
                  }}
                >
                  <AddAPhotoIcon />
                </IconButton>
              </label>
            </Box>
          </Box>
          {/* Form */}
          <TextField
            label="Name"
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
            InputProps={{ sx: { color: "#fff" } }}
            InputLabelProps={{ sx: { color: "#aaa" } }}
          />
          <TextField
            label="Email"
            value={tempEmail}
            onChange={(e) => setTempEmail(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
            InputProps={{ sx: { color: "#fff" } }}
            InputLabelProps={{ sx: { color: "#aaa" } }}
          />
          <TextField
            label="Bio"
            value={tempBio}
            onChange={(e) => setTempBio(e.target.value)}
            fullWidth
            multiline
            minRows={3}
            InputProps={{ sx: { color: "#fff" } }}
            InputLabelProps={{ sx: { color: "#aaa" } }}
          />
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#12372A", p: 2 }}>
          <Button onClick={handleClose} sx={{ backgroundColor: "#D8E9A8", color: "#12372A", fontWeight: "bold" }}>
            Cancel
          </Button>
          <Button onClick={handleSave} sx={{ backgroundColor: "#D8E9A8", color: "#12372A", fontWeight: "bold" }}>
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Dialog Foto Penuh */}
<Dialog
  open={openPhoto}
  onClose={handleClosePhoto}
  maxWidth="md"
  fullWidth
  PaperProps={{
    sx: {
      backgroundColor: "transparent",
      boxShadow: "none",
    },
  }}
>
  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
    <Box
      component="img"
      src={photoToView}
      alt="Profile Full"
      sx={{
        width: "80%",
        height: "auto",
        maxHeight: "90vh",
        borderRadius: 2,
        objectFit: "contain",
      }}
    />
  </Box>
</Dialog>


      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={2500}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity={snackbar.severity}
          sx={{ width: "100%" }}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Profile;