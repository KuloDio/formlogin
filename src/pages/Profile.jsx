import React, { useState, useEffect } from 'react'
import { Typography, Box, Grid, Avatar, Stack, Button, Dialog, DialogTitle, DialogContent, DialogActions, Slide, TextField, IconButton } from '@mui/material'
import { red } from '@mui/material/colors';
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import RestaurantIcon from '@mui/icons-material/Restaurant';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Profile() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  // state untuk foto
  const [photoPreview, setPhotoPreview] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);

  // buka dialog
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // ganti foto profile
  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setPhotoFile(file);

    // convert file ke base64 biar bisa disimpan di localStorage
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotoPreview(reader.result); // hasil base64
    };
    reader.readAsDataURL(file);
  };

  // ====== LOAD DATA DARI LOCALSTORAGE (saat pertama buka halaman) ======
  useEffect(() => {
    const savedProfile = localStorage.getItem("profileData");
    if (savedProfile) {
      const parsed = JSON.parse(savedProfile);
      setName(parsed.name || "");
      setBio(parsed.bio || "");
      setPhotoPreview(parsed.photo || null);
    }
  }, []);

  // ====== SAVE DATA KE LOCALSTORAGE ======
  const handleSave = () => {
    const profileData = {
      name,
      bio,
      photo: photoPreview,
    };
    localStorage.setItem("profileData", JSON.stringify(profileData));
    handleClose();
  };

  return (
    <Box sx={{ backgroundColor: '#12372A', mx: 30, height: '99%', textAlign: 'center', border: '3px solid #D8E9A8', borderRadius: 5, boxShadow: 3 }}>
      
      {/* Avatar & Nama */}
      <Grid container spacing={0} sx={{ py: 3, justifyContent: 'center', alignItems: 'center' }}>
        <Grid item>
          <Stack spacing={1} alignItems="center">
            <Avatar src={photoPreview || undefined} sx={{ bgcolor: red[500], width: 90, height: 90, fontSize: 30 }}>
              {!photoPreview && "R"}
            </Avatar>
            <Typography variant="h6" color="#fff" sx={{ fontWeight: 'bold' }}>
              {name || "Nama Kamu"}
            </Typography>
          </Stack>
        </Grid>
      </Grid>

      {/* Bio */}
      <Typography variant="body1" color="#fff" sx={{ textAlign: 'center', px: 10 }}>
        {bio || "Tambahkan bio kamu disini..."}
      </Typography>

      {/* Edit Profile Button */}
      <Button variant="outlined" sx={{ fontWeight: 'bold', my: 2, color: '#fff', borderColor: '#fff' }} onClick={handleClickOpen}>
        Edit Profile
      </Button>

      {/* Dialog */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          sx: {
            borderRadius: "16px",
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
                src={photoPreview || undefined}
                sx={{ width: 96, height: 96, bgcolor: red[500], fontSize: 32 }}
              >
                {!photoPreview && "R"}
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
              value={name}
              placeholder='Nama'
              onChange={(e) => setName(e.target.value)}
              fullWidth
              sx={{
                mb: 2,
                px: 5,
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
              value={bio}
              placeholder='Bio'
              onChange={(e) => setBio(e.target.value)}
              fullWidth
              multiline
              minRows={3}
              sx={{
                mb: 2,
                px: 5,
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
      <Box border="2px solid #fff" sx={{ my: 3, mx: 5, borderRadius: 2 }}>
        <Typography variant="body1" color="#fff" sx={{ py: 1, borderBottom: '2px solid #fff', fontWeight: 'bold' }}>STATS</Typography>
        <Grid container spacing={4} sx={{ justifyContent: 'space-between', py: 3, px: 12 }}>
          <Grid item>
            <RestaurantIcon />
            <Typography variant="body1" color="#fff">My Recipes</Typography>
            <Typography variant="body1" color="#fff">0</Typography>
          </Grid>
          <Grid item>
            <FavoriteIcon />
            <Typography variant="body1" color="#fff">Favorites</Typography>
            <Typography variant="body1" color="#fff">0</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Profile;
