import React from 'react';
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Typography, Grid,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search"; // ✅ tambahkan ini
import RecipeReviewCard from '../components/RecipeCard';

const ResepUser = () => {
  return (
    <>
        <RecipeReviewCard />
    </>
  )
}

export default ResepUser