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
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

const drawerWidth = 240;

const menuItems = [
  { text: "Home", icon: <HomeIcon />, path: "home" },
  { text: "All Recipes", icon: <BookIcon />, path: "resepuser" },
  { text: "Favorites", icon: <FavoriteIcon />, path: "favorite" },
  { text: "My Recipes", icon: <PersonIcon />, path: "myresep" },
];

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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
        <Box sx={{ p: 2 }}>
          <Button
            variant="outlined"
            color="error"
            fullWidth
            onClick={() => {
              const confirmLogout = window.confirm("Yakin ingin log out?");
              if (confirmLogout) {
                alert("Berhasil Log out");
                navigate("/");
              }
            }}
            sx={{ mt: 25 }}
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
        <Outlet />
      </Box>
    </>
  );
};

export default Dashboard;
