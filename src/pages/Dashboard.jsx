import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

const drawerWidth = 240;

const icons = [
  <HomeIcon sx={{ color: "#D8E9A8" }} />,
  <BookIcon sx={{ color: "#D8E9A8" }} />,
  <FavoriteIcon sx={{ color: "#D8E9A8" }} />,
  <PersonIcon sx={{ color: "#D8E9A8" }} />,
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "All Recipes", path: "/resep" },
    { text: "Favorites", path: "/favorite" },
    { text: "My Recipes", path: "/MyResep" },
  ];

  const drawerContent = (
    <Box sx={{ overflow: "auto" }}>
      <Toolbar />
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={() => navigate(item.path)}>
              <ListItemIcon>{icons[index % icons.length]}</ListItemIcon>
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
            marginTop: isMobile ? 0 : "64px", // biar tidak menutupi AppBar
            backgroundColor: "#191A19",
            color: "#D8E9A8",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: isMobile ? 0 : `${drawerWidth}px`,
        }}
      >
        <Toolbar />
        <Typography sx={{ color: "red" }}>TES</Typography>
      </Box>
    </>
  );
};

export default Dashboard;
