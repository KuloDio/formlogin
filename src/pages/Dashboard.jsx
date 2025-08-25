import React, { useState } from "react";
import { Navbar } from "../components/navbar";
import MyResep from "./myresep";
import ResepUser from "./ResepUser";
import Favorite from "./favorite";
import Home from "./Home";

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
  Button,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

import { useNavigate } from "react-router-dom";


const drawerWidth = 240;


const menuItems = [
  { text: "Home", icon: <HomeIcon /> },
  { text: "All Recipes", icon: <BookIcon /> },
  { text: "Favorites", icon: <FavoriteIcon /> },
  { text: "My Recipes", icon: <PersonIcon /> },
  <Button variant="outlined" color="error">
        Error
      </Button>
];

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");
  const isMobile = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Konten berdasarkan menu aktif
  const renderContent = () => {
    switch (activePage) {
      case "Home":
        return <Home/>;
      case "All Recipes":
        return(
          <ResepUser />
        );
      case "Favorites":
        return <Favorite/>;
      case "My Recipes":
        return <MyResep/>;
      default:

        return <Typography variant="h4">DASHBOARD</Typography>;

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
              selected={activePage === item.text}
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
                <Box sx={{ p: 2 }}>
          <Button
            variant="outlined"
            color="error"
            fullWidth
            onClick={() => {
              const confirmLogout = window.confirm('Yakin ingin log out?');
              if (confirmLogout) {
                alert('Berhasil Log out')
                navigate('/')
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
      {isMobile && (
        <IconButton
          color="inherit"
          onClick={handleDrawerToggle}
          sx={{ position: "fixed", top: 10, left: 10, zIndex: 2000, color: "white" }}
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

      {/* KONTEN */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: isMobile ? 0 : `${drawerWidth}px`,
          alignItems: "center",
          marginTop: {xs: "10%",md: "5%"},
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
