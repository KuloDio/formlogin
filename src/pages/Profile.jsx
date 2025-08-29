import React, { useState } from 'react'
import { Typography, Box, Grid, Avatar, Stack, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Slide } from '@mui/material'
import { red } from '@mui/material/colors';
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Profile() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ backgroundColor: '#12372A', mx: 30, height: '99%', textAlign: 'center', border: '3px solid #D8E9A8', borderRadius: 5, boxShadow: 3 }}>
      
      {/* Avatar & Username */}
      <Grid container spacing={0} sx={{ py: 3, justifyContent: 'center', alignItems: 'center' }}>
        <Grid item>
          <Stack spacing={1} alignItems="center">
            <Avatar sx={{ bgcolor: red[500], width: 70, height: 70, fontSize: 30 }}>R</Avatar>
            <Typography variant="body1" color="#fff">@username</Typography>
          </Stack>
        </Grid>
      </Grid>

      {/* Bio */}
      <Typography variant="body1" color="#fff" sx={{ textAlign: 'center', px: 10 }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi animi et libero consequatur dolore. Quis.
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
      borderRadius: "16px", // atur sudut membulat
      overflow: "hidden",   // biar header/footer ikut rounded
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
         }}>Edit Profile</DialogTitle>
        <DialogContent sx={{ 
          backgroundColor: '#12372A',
         }}>
          <DialogContentText id="alert-dialog-slide-description">
            
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ 
          backgroundColor: '#12372A',
         }}>
          <Button onClick={handleClose} sx={{ backgroundColor: '#D8E9A8', color: '#fff' }}>Cancel</Button>
          <Button onClick={handleClose} sx={{ backgroundColor: '#D8E9A8', color: '#fff' }}>Save</Button>
        </DialogActions>
      </Dialog>

      {/* Stats */}
      <Box border="2px solid #fff" sx={{ my: 3, mx: 5, borderRadius: 2 }}>
        <Typography variant="body1" color="#fff" sx={{ py: 1, borderBottom: '2px solid #fff' }}>STATS</Typography>
        <Grid container spacing={4} sx={{ justifyContent: 'space-between', py: 3, px: 12 }}>
          <Grid item>
            <PersonIcon />
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

export default Profile
