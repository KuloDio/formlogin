import React, { useState } from 'react'
import { Navbar } from '../components/navbar'
import {
  Drawer, Toolbar, List, ListItem, ListItemButton,
  ListItemIcon, ListItemText, Box, useMediaQuery, IconButton,
  Typography
} from '@mui/material'
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

const drawerWidth = 240
const icons = [<HomeIcon sx={{color: "#D8E9A8"}}/>, <BookIcon  sx={{color: "#D8E9A8"}}/>, <FavoriteIcon sx={{color: "#D8E9A8"}}/>, <PersonIcon sx={{color: "#D8E9A8"}}/>];

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const isMobile = useMediaQuery('(max-width:600px)')

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawerContent = (
    <Box sx={{ overflow: 'auto' }}>
      <Toolbar />
      <List>
        {['Home', 'All Recipes', 'Favorites', 'My Recipes'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {icons[index % icons.length]}
              </ListItemIcon>
              {!isMobile && <ListItemText primary={text} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <Navbar />
      {/* DEKSTOP */}
      {!isMobile && (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: 'border-box',
              marginTop: '64px',
              backgroundColor: "#191A19",
              color: "#D8E9A8",
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}

      {/* HP */}
      {isMobile && (
        <>
          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ position: 'fixed', top: 10, left: 10, zIndex: 2000 }}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              [`& .MuiDrawer-paper`]: { width: drawerWidth },
            }}
          >
            {drawerContent}
          </Drawer>
        </>
      )}

      <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: drawerWidth }}>
        <Toolbar />
        <Typography sx={{
          color: "red",
        }}>TES</Typography>
      </Box>
    </>
  )
}

export default Dashboard
