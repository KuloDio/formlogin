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
import LinkIcon from "@mui/icons-material/Link";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import ImageIcon from "@mui/icons-material/Image";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Profile() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [photoPreview, setPhotoPreview] = useState(null);
  const [bannerPreview, setBannerPreview] = useState(null);

  // Edit dialog states
  const [open, setOpen] = useState(false);
  const [tempName, setTempName] = useState("");
  const [tempBio, setTempBio] = useState("");
  const [tempEmail, setTempEmail] = useState("");
  const [tempPhotoPreview, setTempPhotoPreview] = useState(null);
  const [tempPhotoFile, setTempPhotoFile] = useState(null);
  const [tempBannerPreview, setTempBannerPreview] = useState(null);
  const [tempBannerFile, setTempBannerFile] = useState(null);

  // Snackbar & loading
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  const [loading, setLoading] = useState(true);

  // open avatar photo view
  const [openPhoto, setOpenPhoto] = useState(false);
  const [photoToView, setPhotoToView] = useState(null);

  // === Ambil data profil dari backend ===
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    axios
      .put(
        `${API_URL}/auth/profile`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        const data = res.data.data;
        setName(data.name || "");
        setBio(data.bio || "");
        setEmail(data.email || "");
        setPhotoPreview(data.avatar || null);
        setBannerPreview(data.banner || null);
      })
      .catch((err) => {
        console.error("Gagal mengambil profile:", err);
        setSnackbar({ open: true, message: "Gagal memuat profile", severity: "error" });
      })
      .finally(() => setLoading(false));
  }, []);

  const handleClickOpen = () => {
    setTempName(name);
    setTempBio(bio);
    setTempEmail(email);
    setTempPhotoPreview(photoPreview);
    setTempPhotoFile(null);
    setTempBannerPreview(bannerPreview);
    setTempBannerFile(null);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setTempPhotoFile(file);

    const reader = new FileReader();
    reader.onloadend = () => setTempPhotoPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleBannerChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setTempBannerFile(file);

    const reader = new FileReader();
    reader.onloadend = () => setTempBannerPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSave = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setSnackbar({ open: true, message: "Sesi habis, silakan login kembali", severity: "error" });
      return;
    }

    const formData = new FormData();
    formData.append("name", tempName);
    formData.append("email", tempEmail);
    formData.append("bio", tempBio);
    if (tempPhotoFile) formData.append("avatar", tempPhotoFile);
    if (tempBannerFile) formData.append("banner", tempBannerFile);

    try {
      const response = await axios.put(
        `${API_URL}/auth/profile`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const updatedData = response.data.data;
      setName(updatedData.name);
      setBio(updatedData.bio);
      setEmail(updatedData.email);
      setPhotoPreview(updatedData.avatar);
      setBannerPreview(updatedData.banner);

      handleClose();
      setSnackbar({ open: true, message: "Profile berhasil diperbarui!", severity: "success" });
    } catch (error) {
      console.error("Gagal update profil:", error.response?.data || error.message);
      setSnackbar({ open: true, message: "Gagal memperbarui profile.", severity: "error" });
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setSnackbar({ open: true, message: "Link berhasil disalin!", severity: "success" });
  };

  const handleOpenPhoto = () => {
    if (photoPreview) {
      setPhotoToView(photoPreview);
      setOpenPhoto(true);
    }
  };

  const handleClosePhoto = () => setOpenPhoto(false);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <CircularProgress color="success" />
      </Box>
    );
  }

  return (
    <>
      {/* Banner */}
      <Box sx={{ position: "relative", mb: 8 }}>
        <Box
          sx={{
            width: "100%",
            height: { xs: 150, md: 300 },
            borderRadius: 2,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={bannerPreview || "/default-banner.jpg"}
            alt="cover"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        {/* Avatar */}
        <Avatar
          src={photoPreview || undefined}
          alt="Profile"
          onClick={handleOpenPhoto}
          sx={{
            width: { xs: 120, md: 150 },
            height: { xs: 120, md: 150 },
            position: "absolute",
            left: 25,
            bottom: { xs: -50, md: -75 },
            border: "3px solid #D8E9A8",
            cursor: photoPreview ? "pointer" : "default",
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
          {/* Ganti Banner */}
          <Box sx={{ mb: 3, position: "relative" }}>
            <Box
              component="img"
              src={tempBannerPreview || "/default-banner.jpg"}
              alt="Banner"
              sx={{
                width: "100%",
                height: 150,
                objectFit: "cover",
                borderRadius: 2,
              }}
            />
            <input
              id="banner-input"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleBannerChange}
            />
            <label htmlFor="banner-input">
              <IconButton
                component="span"
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  bgcolor: "#D8E9A8",
                  "&:hover": { bgcolor: "#c7d994" },
                }}
              >
                <ImageIcon />
              </IconButton>
            </label>
          </Box>
          <Typography sx={{ textAlign: 'center' }} variant="body1" color="#fff">*file max 2 mb</Typography>

          {/* Foto Profil */}
          <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
            <Box sx={{ position: "relative" }}>
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

      {/* Dialog Foto */}
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
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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
        <Alert severity={snackbar.severity} sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Profile;
