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
import MyResep from "./myresep";
import Favorite from "./favorite";
import DaftarResep from "./ResepPublic";
import ResepUser from "./ResepUser";

// 🎨 Custom Theme
const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: {
    light: true,
    dark: true,
  },
  defaultColorScheme: "dark", // 👈 default jadi dark mode
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
          <ResepUser/>
        </>
      )}

      {/* Favorites */}
      {pathname === "/favorites" && (
        <>
          <Favorite/>
        </>
      )}

      {/* My Recipes */}
      {pathname === "/my-recipes" && (
        <>
          <MyResep/>
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
