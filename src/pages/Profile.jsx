import React, { useState, useEffect } from 'react'
import {
  Typography, Box, Grid, Avatar, Stack, Button, Dialog, DialogTitle,
  DialogContent, DialogActions, Slide, TextField, IconButton, useMediaQuery
} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import RestaurantIcon from '@mui/icons-material/Restaurant';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Profile() {
  const [open, setOpen] = useState(false);

  // state utama
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [photoPreview, setPhotoPreview] = useState(null);

  // state sementara (supaya cancel tidak ubah data utama)
  const [tempName, setTempName] = useState("");
  const [tempBio, setTempBio] = useState("");
  const [tempPhoto, setTempPhoto] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // buka dialog → isi state sementara
  const handleClickOpen = () => {
    setTempName(name);
    setTempBio(bio);
    setTempPhoto(photoPreview);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  // ganti foto profile (di state sementara)
  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setTempPhoto(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // load data dari localStorage
  useEffect(() => {
    const savedProfile = localStorage.getItem("profileData");
    if (savedProfile) {
      const parsed = JSON.parse(savedProfile);
      setName(parsed.name || "");
      setBio(parsed.bio || "");
      setPhotoPreview(parsed.photo || null);
    }
  }, []);

  // save ke localStorage
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

  return (
    <Box
      sx={{
        backgroundColor: '#12372A',
        mx: { xs: 2, sm: 5, md: 10, lg: 30 }, // responsive margin
        my: 3,
        p: { xs: 2, sm: 3 },
        minHeight: "90vh",
        textAlign: 'center',
        border: '3px solid #D8E9A8',
        borderRadius: 5,
        boxShadow: 3
      }}
    >

      {/* Avatar & Nama */}
      <Grid container spacing={0} sx={{ py: 3, justifyContent: 'center', alignItems: 'center' }}>
        <Grid item>
          <Stack spacing={1} alignItems="center">
            <Avatar
              src={photoPreview || undefined}
              sx={{ bgcolor: red[500], width: isMobile ? 70 : 90, height: isMobile ? 70 : 90, fontSize: 30 }}
            >
              {!photoPreview && "R"}
            </Avatar>
            <Typography variant={isMobile ? "body1" : "h6"} color="#fff" sx={{ fontWeight: 'bold' }}>
              {name || "Nama Kamu"}
            </Typography>
          </Stack>
        </Grid>
      </Grid>

      {/* Bio */}
      <Typography variant="body2" color="#fff" sx={{ textAlign: 'center', px: { xs: 2, sm: 5, md: 10 } }}>
        {bio || "Tambahkan bio kamu disini..."}
      </Typography>

      {/* Edit Profile Button */}
      <Button
        variant="outlined"
        sx={{ fontWeight: 'bold', my: 2, color: '#fff', borderColor: '#fff' }}
        onClick={handleClickOpen}
      >
        Edit Profile
      </Button>

      {/* Dialog */}
      <Dialog
        fullScreen={isMobile} // kalau mobile → fullscreen
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          sx: {
            borderRadius: isMobile ? 0 : "16px",
            overflow: "hidden",
            border: '3px solid #D8E9A8'
          },
        }}
      >
        <DialogTitle sx={{
          backgroundColor: '#12372A',
          color: '#fff',
          textAlign: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: 25,
        }}>
          Edit Profile
        </DialogTitle>

        <DialogContent sx={{ backgroundColor: '#12372A' }}>

          {/* ====== Edit Foto Profile ====== */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <Box sx={{ position: 'relative' }}>
              <Avatar
                src={tempPhoto || undefined}
                sx={{ width: 96, height: 96, bgcolor: red[500], fontSize: 32 }}
              >
                {!tempPhoto && "R"}
              </Avatar>

              {/* input file tersembunyi */}
              <input
                id="profile-photo-input"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handlePhotoChange}
              />
              <label htmlFor="profile-photo-input">
                <IconButton
                  component="span"
                  sx={{
                    position: 'absolute',
                    bottom: -6,
                    right: -6,
                    bgcolor: '#D8E9A8',
                    '&:hover': { bgcolor: '#c7d994' },
                    border: '2px solid #12372A'
                  }}
                >
                  <AddAPhotoIcon />
                </IconButton>
              </label>
            </Box>
          </Box>

          {/* ====== Form Nama & Bio ====== */}
          <Box>
            <TextField
              value={tempName}
              placeholder='Nama'
              onChange={(e) => setTempName(e.target.value)}
              fullWidth
              sx={{
                mb: 2,
                input: { color: "white" },
                "& .MuiOutlinedInput-root": {
                  border: "3px solid",
                  borderColor: "#D8E9A8",
                  borderRadius: "20px",
                  "& fieldset": { borderColor: "transparent" },
                  "&:hover fieldset": { borderColor: "transparent" },
                  "&.Mui-focused fieldset": { borderColor: "transparent" },
                },
              }}
            />

            <TextField
              value={tempBio}
              placeholder='Bio'
              onChange={(e) => setTempBio(e.target.value)}
              fullWidth
              multiline
              minRows={3}
              sx={{
                mb: 2,
                input: { color: "white" },
                "& .MuiOutlinedInput-root": {
                  border: "3px solid",
                  borderColor: "#D8E9A8",
                  borderRadius: "20px",
                  "& fieldset": { borderColor: "transparent" },
                  "&:hover fieldset": { borderColor: "transparent" },
                  "&.Mui-focused fieldset": { borderColor: "transparent" },
                },
                "& .MuiInputBase-input": { color: "white" },
              }}
            />
          </Box>
        </DialogContent>

        <DialogActions sx={{ backgroundColor: '#12372A' }}>
          <Button onClick={handleClose} sx={{ backgroundColor: '#D8E9A8', color: '#12372A', fontWeight: "bold" }}>Cancel</Button>
          <Button
            onClick={handleSave}
            sx={{ backgroundColor: '#D8E9A8', color: '#12372A', fontWeight: "bold" }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Stats */}
      <Box border="2px solid #fff" sx={{ my: 3, mx: { xs: 1, sm: 3, md: 5 }, borderRadius: 2 }}>
        <Typography variant="body1" color="#fff" sx={{ py: 1, borderBottom: '2px solid #fff', fontWeight: 'bold' }}>STATS</Typography>
        <Grid container spacing={2} sx={{ justifyContent: 'space-around', py: 3 }}>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <RestaurantIcon />
            <Typography variant="body2" color="#fff">My Recipes</Typography>
            <Typography variant="body2" color="#fff">0</Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <FavoriteIcon />
            <Typography variant="body2" color="#fff">Favorites</Typography>
            <Typography variant="body2" color="#fff">0</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Profile;
