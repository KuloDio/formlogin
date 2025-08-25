// src/pages/DashboardLayoutNavigationLinks.jsx
import * as React from "react";
import PropTypes from "prop-types";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";

// Toolpad
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { DemoProvider, useDemoRouter } from "@toolpad/core/internal";

// Pages
import MyResep from "./myresep";
import Favorite from "./favorite";
import ResepUser from "./ResepUser";
import HomeDashboard from "../components/HomeDashboard";

// 🎨 Custom Theme
// 🎨 Custom Theme
const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: {
    light: {
      palette: {
        mode: "light",
        background: {
          default: "#ffffff", // putih
          paper: "#f9f9f9",
        },
        text: {
          primary: "#000000", // teks hitam
          secondary: "#333333",
        },
      },
    },
    dark: {
      palette: {
        mode: "dark",
        background: {
          default: "#191A19", // hitam
          paper: "#1e1e1e",
        },
        text: {
          primary: "#ffffff", // teks putih
          secondary: "#bbbbbb",
        },
      },
    },
  },
  defaultColorScheme: "dark", // 👈 default tetap dark
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
      {pathname === "/home" && <HomeDashboard />}

      {/* All Recipes */}
      {pathname === "/all-recipes" && (
        <>
          <ResepUser />

          <TextField
            placeholder="Search Recipe..."
            variant="outlined"
            theme={demoTheme}
            sx={{
              my: 3,
              width: "90%",
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
        </>
      )}

      {/* Favorites */}
      {pathname === "/favorites" && <Favorite />}

      {/* My Recipes */}
      {pathname === "/my-recipes" && <MyResep />}
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

  // 🔹 Fungsi logout sederhana
const handleLogout = () => {
  const confirmLogout = globalThis.confirm("Yakin ingin logout?");
  if (confirmLogout) {
    localStorage.removeItem("token");
    window.location.href = "/";
  } else {
    console.log("Logout dibatalkan");
  }
};



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
        <DashboardLayout
          slots={{
            sidebarFooter: () => (
              <Box sx={{ p: 2 }}>
                <Button
                  variant="outlined"
                  color="error"
                  fullWidth
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </Box>
            ),
          }}
        >
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
