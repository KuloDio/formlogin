// src/pages/DashboardLayoutNavigationLinks.jsx
import * as React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";

// Icons
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from "@mui/icons-material/Book";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";

// Toolpad
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { DemoProvider, useDemoRouter } from "@toolpad/core/internal";

// 🎨 Custom Theme
const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

// ✅ Konten berdasarkan route
function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* Home */}
      {pathname === "/home" && (
        <>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Welcome To Dashboard 👋
          </Typography>
          <Typography variant="body1" sx={{ py: 5, px: 8 }}>
            Temukan resep populer, kategori favorit, dan tips memasak setiap
            hari.
          </Typography>
        </>
      )}

      {/* All Recipes */}
      {pathname === "/all-recipes" && (
        <>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3 }}>
            All Recipes
          </Typography>
          <TextField
      placeholder="Search Recipe..."
      variant="outlined"
      theme={demoTheme}
      sx={{
        my: 3,
        width: '90%',
        "& .MuiOutlinedInput-root": {
          borderRadius: "50px", // bikin rounded
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />

          <Grid container spacing={2}>
            {[1, 2, 3, 4].map((id) => (
              <Grid item xs={12} sm={6} md={3} key={id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`https://source.unsplash.com/400x300/?food,recipe,${id}`}
                    alt={`Recipe ${id}`}
                  />
                  <CardContent>
                    <Typography variant="h6">Recipe {id}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Deskripsi singkat resep {id}.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}

      {/* Favorites */}
      {pathname === "/favorites" && (
        <>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Favorites
          </Typography>
          <Typography variant="body1" sx={{ py: 5, px: 8 }}>
            Resep favoritmu akan muncul di sini.
          </Typography>
        </>
      )}

      {/* My Recipes */}
      {pathname === "/my-recipes" && (
        <>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            My Recipes
          </Typography>
          <Typography variant="body1" sx={{ py: 5, px: 8 }}>
            Tambahkan resep buatanmu sendiri dan bagikan dengan pengguna lain.
          </Typography>
        </>
      )}
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

// ✅ Layout Dashboard
function DashboardLayoutNavigationLinks(props) {
  const { window } = props;
  const router = useDemoRouter("/home");

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <DemoProvider window={demoWindow}>
      <AppProvider
        navigation={[
          { segment: "home", title: "Home", icon: <HomeIcon /> },
          { segment: "all-recipes", title: "All Recipes", icon: <BookIcon /> },
          { segment: "favorites", title: "Favorites", icon: <FavoriteIcon /> },
          { segment: "my-recipes", title: "My Recipes", icon: <PersonIcon /> },
        ]}
        router={router}
        theme={demoTheme}
        window={demoWindow}
        branding={{
          logo: <></>, // 👉 kosongkan logo
          title: "", // 👉 kosongkan tulisan Toolpad
        }}
      >
        <DashboardLayout>
          <DemoPageContent pathname={router.pathname} />
        </DashboardLayout>
      </AppProvider>
    </DemoProvider>
  );
}

DashboardLayoutNavigationLinks.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayoutNavigationLinks;
