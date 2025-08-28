import React, { useState } from "react";
import { Navbar } from "../components/navbar";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  useMediaQuery,
  IconButton,
  Button,
  Alert,
  Stack,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RestaurantIcon from '@mui/icons-material/Restaurant';

const drawerWidth = 240;

const menuItems = [
  { text: "Home", icon: <HomeIcon />, path: "home" },
  { text: "All Recipes", icon: <BookIcon />, path: "resepuser" },
  { text: "Favorites", icon: <FavoriteIcon />, path: "favorite" },
  { text: "My Recipes", icon: <RestaurantIcon />, path: "myresep" },
];

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // state untuk alert
  const isMobile = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Yakin ingin log out?");
    if (confirmLogout) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        navigate("/");
      }, 1000);
    }
  };

  const drawerContent = (
    <Box sx={{ overflow: "auto" }}>
      <Toolbar />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
                if (isMobile) setMobileOpen(false);
              }}
              selected={location.pathname.includes(item.path)}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "#12372A",
                  color: "#fff",
                  "& .MuiSvgIcon-root": { color: "#fff" },
                },
                "&.Mui-selected:hover": { backgroundColor: "#436850" },
                "&:hover": { backgroundColor: "#252525" },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: "#D8E9A8" }}>
                {item.icon}
              </ListItemIcon>
              {!isMobile && <ListItemText primary={item.text} />}
            </ListItemButton>
          </ListItem>
        ))}
        <Box sx={{ 
          display: "flex", 
          justifyContent: "flex-end", 
          gap: 1,
          marginX: "2%", }}>
          <Button
            variant="outlined"
            color="error"
            fullWidth
            onClick={handleLogout}
            sx={{
              marginTop: "100%",
              border: "3px solid",
              fontWeight: "800"
            }}
          >
            Log Out
          </Button>
        </Box>
      </List>
    </Box>
  );

  return (
    <>
      <Navbar />

      {/* Tombol menu versi mobile */}
      {isMobile && (
        <IconButton
          color="inherit"
          onClick={handleDrawerToggle}
          sx={{
            position: "fixed",
            top: 10,
            left: 10,
            zIndex: 2000,
            color: "white",
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            marginTop: isMobile ? 0 : "64px",
            backgroundColor: "#191A19",
            color: "#D8E9A8",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Konten utama */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: isMobile ? 0 : `${drawerWidth}px`,
          marginTop: isMobile ? "56px" : "64px", // tinggi Navbar
          height: `calc(100vh - ${isMobile ? "56px" : "64px"})`, // sisakan area navbar
          overflowY: "auto", // biar dashboard bisa scroll
          backgroundColor: "#1a1a1a",
          color: "white",
        }}
      >
        {/* Alert muncul di atas konten */}
        {showAlert && (
          <Stack sx={{ width: "100%", mb: 2 }} spacing={2}>
            <Alert severity="success">Berhasil log out!</Alert>
          </Stack>
        )}

        <Outlet />
      </Box>
    </>
  );
};

export default Dashboard;
