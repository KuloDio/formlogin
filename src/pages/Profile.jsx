import React from "react";
import {
  Box,
  Avatar,
  Typography,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import banner from "../assets/image/bannerProfile.png";
import LinkIcon from "@mui/icons-material/Link";

function Profile() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box sx={{ position: "relative", mb: 8 }}>
        {/* Cover */}
        <Box
          sx={{
            width: "100%",
            height: 300,
            borderRadius: 2,
            overflow: "hidden",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={banner}
            alt="cover"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Avatar */}
        <Avatar
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Profile"
          sx={{
            width: 150,
            height: 150,
            position: "absolute",
            left: 50,
            bottom: -75,
          }}
        />

        {/* Ikon Link + Tombol Edit Profile */}
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{
            position: "absolute",
            bottom: -50,
            right: 20,
          }}
        >
          <IconButton
            sx={{
              color: "#D8E9A8",
              border: "1px solid #D8E9A8",
              "&:hover": {
                backgroundColor: "rgba(216,233,168,0.1)",
              },
            }}
          >
            <LinkIcon />
          </IconButton>

          <Button
            variant="outlined"
            sx={{
              color: "#D8E9A8",
              borderColor: "#D8E9A8",
              fontWeight: "bold",
              "&:hover": {
                borderColor: "#b5cc88",
                backgroundColor: "rgba(216,233,168,0.1)",
              },
            }}
          >
            Edit Profile
          </Button>
        </Stack>
      </Box>

      {/* Info User */}
      <Typography variant="h4" color="#fff" sx={{ fontWeight: "bold", pl: 4, pt: 3 }}>
        Gabriel Alex
      </Typography>
      <Typography variant="h6" color="#fff" sx={{ pl: 4, pt: 2 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, in.
      </Typography>

      <Box sx={{
        border: "3px solid",
        borderRadius: "20px 20px 0px 0px",
        borderColor: "#D8E9A8",
        height: 350,
        marginTop: 5,
      }}>
        <Typography sx={{
          textAlign: "center",
          borderBottom: "3px solid",
          borderRadius: "20px 20px 0px 0px",
          borderColor: "#D8E9A8",
          fontWeight: "800",
          paddingY: "1%",
          backgroundColor: "#12372A",
        }}>STATS
        </Typography>

      </Box>
    </>
  );
}

export default Profile;
