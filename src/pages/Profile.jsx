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
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import banner from "../assets/image/bannerProfile.png";
import LinkIcon from "@mui/icons-material/Link";

import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Profile() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // State utama
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [photoPreview, setPhotoPreview] = useState(null);

  // State dialog
  const [open, setOpen] = useState(false);
  const [tempName, setTempName] = useState("");
  const [tempBio, setTempBio] = useState("");
  const [tempPhoto, setTempPhoto] = useState(null);

  // Snackbar untuk copy link
  const [copySuccess, setCopySuccess] = useState(false);

  // Load dari localStorage
  useEffect(() => {
    const savedProfile = localStorage.getItem("profileData");
    if (savedProfile) {
      const parsed = JSON.parse(savedProfile);
      setName(parsed.name || "");
      setBio(parsed.bio || "");
      setPhotoPreview(parsed.photo || null);
    }
  }, []);

  // Buka dialog → isi state sementara
  const handleClickOpen = () => {
    setTempName(name);
    setTempBio(bio);
    setTempPhoto(photoPreview);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  // Ganti foto di dialog
  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setTempPhoto(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // Save ke localStorage
  const handleSave = () => {
    setName(tempName);
    setBio(tempBio);
    setPhotoPreview(tempPhoto);

    const profileData = {
      name: tempName,
      bio: tempBio,
      photo: tempPhoto,
    };
    localStorage.setItem("profileData", JSON.stringify(profileData));
    handleClose();
  };

  // Copy link ke clipboard
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopySuccess(true);
  };

  return (
    <>
      <Box sx={{ position: "relative", mb: 8 }}>
        {/* Cover */}
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
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Avatar */}
        <Avatar
          src={photoPreview || undefined}
          alt="Profile"
          sx={{
            width: { xs: 120, md: 150 },
            height: { xs: 120, md: 150 },
            position: "absolute",
            left: { xs: 25, md: 25 },
            bottom: { xs: -50, md: -75 },
          }}
        >
          {!photoPreview && "?"}
        </Avatar>

        {/* Link + Edit Profile */}
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{
            position: "absolute",
            bottom: -50,
            right: 20,
          }}
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

      {/* Info User */}
      <Typography
        variant="h4"
        color="#fff"
        sx={{ fontWeight: "bold", pl: 6, pt: 3 }}
      >
        {name || "Nama Kamu"}
      </Typography>
      <Typography
        variant="h6"
        color="#fff"
        sx={{ fontWeight: "medium", pl: 6, pt: 2 }}
      >
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
          <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            <Box sx={{ position: "relative" }}>
              <Avatar
                src={tempPhoto || undefined}
                sx={{ width: 96, height: 96 }}
              >
                {!tempPhoto && "?"}
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
            InputProps={{
              sx: {
                color: "#fff", // warna teks putih
              },
            }}
            InputLabelProps={{
              sx: {
                color: "#aaa", // label jadi abu biar kelihatan
              },
            }}
          />

          <TextField
            label="Bio"
            value={tempBio}
            onChange={(e) => setTempBio(e.target.value)}
            fullWidth
            multiline
            minRows={3}
            InputProps={{
              sx: {
                color: "#fff",
                my: 1,
              },
            }}
            InputLabelProps={{
              sx: {
                color: "#aaa",
              },
            }}
          />
        </DialogContent>

        <DialogActions sx={{ backgroundColor: "#12372A", p: 2 }}>
          <Button
            onClick={handleClose}
            sx={{
              backgroundColor: "#D8E9A8",
              color: "#12372A",
              fontWeight: "bold",
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            sx={{
              backgroundColor: "#D8E9A8",
              color: "#12372A",
              fontWeight: "bold",
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
  open={copySuccess}
  autoHideDuration={2000}
  onClose={() => setCopySuccess(false)}
  anchorOrigin={{ vertical: "top", horizontal: "center" }}
>
  <Alert
    onClose={() => setCopySuccess(false)}
    severity="success"   // ✅ sekarang berfungsi
    sx={{ width: "100%" }}
  >
    Link berhasil disalin!
  </Alert>
</Snackbar>

      {/* Stats */}
      <Box
        sx={{
          border: "3px solid",
          borderRadius: "20px 20px 0px 0px",
          borderColor: "#D8E9A8",
          minHeight: 350,
          marginTop: 5,
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            borderBottom: "3px solid",
            borderRadius: "20px 20px 0px 0px",
            borderColor: "#D8E9A8",
            fontWeight: "800",
            paddingY: "1%",
            backgroundColor: "#12372A",
          }}
        >
          STATS
        </Typography>
        <Box
          sx={{
            display: { xs: "row", md: "flex" },
            placeContent: "center",
            justifyContent: "between",
            gap: 50,
            paddingTop: { xs: 5, md: 10 },
            paddingBottom: 3,
          }}
        >
          <Box
            sx={{
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <RestaurantIcon
              sx={{
                color: "#D8E9A8",
                fontSize: 80,
              }}
            />
            <Typography>My Own Recipe</Typography>
            <Typography
              sx={{
                fontWeight: "800",
                fontSize: 30,
                fontFamily: "Poppins",
              }}
            >
              0
            </Typography>
          </Box>
          <Box
            sx={{
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <FavoriteIcon
              sx={{
                color: "#D8E9A8",
                fontSize: 80,
              }}
            />
            <Typography>My Favorites Recipe</Typography>
            <Typography
              sx={{
                fontWeight: "800",
                fontSize: 30,
                fontFamily: "Poppins",
              }}
            >
              5
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Profile;
