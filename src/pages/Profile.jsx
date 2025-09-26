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
  return (
    <Typography variant="body1" color="#fff">coming soon</Typography>
  )
}

export default Profile;
