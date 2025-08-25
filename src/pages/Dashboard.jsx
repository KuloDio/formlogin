import React, { useState } from "react";
import { Navbar } from "../components/navbar";
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
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import ResepUser from "./ResepUser";

const drawerWidth = 240;

const menuItems = [
  { text: "Home", icon: <HomeIcon /> },
  { text: "All Recipes", icon: <BookIcon /> },
  { text: "Favorites", icon: <FavoriteIcon /> },
  { text: "My Recipes", icon: <PersonIcon /> },
];

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home"); // halaman aktif
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Konten berdasarkan menu aktif
  const renderContent = () => {
    switch (activePage) {
      case "Home":
        return <Typography variant="h4">Ini Halaman Home</Typography>;
      case "All Recipes":
        return(
          <ResepUser />
        );
      case "Favorites":
        return <Typography variant="h4">Resep Favorit Kamu</Typography>;
      case "My Recipes":
        return <Typography variant="h4">Resep Buatan Saya</Typography>;
      default:
        return <Typography variant="h4">Ini Halaman Home</Typography>;
    }
  };

  const drawerContent = (
    <Box sx={{ overflow: "auto" }}>
      <Toolbar />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => setActivePage(item.text)}
              selected={activePage === item.text} // highlight aktif
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "#2e2e2e",
                  color: "#fff",
                  "& .MuiSvgIcon-root": {
                    color: "#fff",
                  },
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "#3a3a3a",
                },
                "&:hover": {
                  backgroundColor: "#252525",
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: "#D8E9A8" }}>
                {item.icon}
              </ListItemIcon>
              {!isMobile && <ListItemText primary={item.text} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Navbar />
      {isMobile && (
        <IconButton
          color="inherit"
          onClick={handleDrawerToggle}
          sx={{ position: "fixed", top: 10, left: 10, zIndex: 2000 }}
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
            marginTop: isMobile ? 0 : "64px", // supaya tidak nutup AppBar
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 64px)",
          backgroundColor: "#1a1a1a",
          color: "white",
        }}
      >
        {renderContent()}
      </Box>
    </>
  );
};

export default Dashboard;
