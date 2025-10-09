import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import axios from "axios";
import { useSearch } from '../context/SearchContext';

const API_URL = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("token");

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  transform: expand ? "rotate(180deg)" : "rotate(0deg)",
}));

export default function FavoriteCard() {
  const [favorites, setFavorites] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const { search } = useSearch();

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/recipes/favorites`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const recipes = res.data.map((item) => item.recipe);
        setFavorites(recipes);
      } catch (err) {
        console.error("Gagal ambil data favorite:", err);
      }
    };

    fetchFavorites();
  }, []);

  const toggleFavorite = async (id) => {
    try {
      await axios.post(`${API_URL}/api/recipes/${id}/favorites`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setFavorites((prev) => prev.filter((r) => r.id !== id));
    } catch (err) {
      console.error("Gagal update favorite:", err);
    }
  };

  const toggleExpand = (id) => {
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  const filteredFavorites = favorites.filter((item) =>
    item.title?.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <>
      {filteredFavorites.map((item) => (
        <Card
          key={item.id}
          sx={{
            maxWidth: 345,
            height: "auto",
            backgroundColor: "#212121",
            color: "#bdbdbd",
            mb: 2,
          }}
        >
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: red[500] }}>R</Avatar>}
            action={
              <IconButton
                aria-label="remove from favorites"
                sx={{ color: "#ff1313ff" }}
                onClick={() => toggleFavorite(item.id)}
              >
                <FavoriteIcon />
              </IconButton>
            }
            title={item.title}
            titleTypographyProps={{
              sx: {
                fontWeight: "700",
                fontSize: 18,
                fontFamily: "Poppins",
              },
            }}
            subheader={item.category}
            subheaderTypographyProps={{
              sx: {
                color: "#bdbdbd",
              },
            }}
          />

          {item.thumbnail && (
            <CardMedia component="img" height="194" image={item.thumbnail} />
          )}

          <CardContent>
            <Typography variant="body2">{item.description}</Typography>
          </CardContent>

          <CardActions disableSpacing>
            <IconButton aria-label="time" sx={{ color: "#bdbdbd" }}>
              <AccessTimeIcon />
              <Typography variant="body2" sx={{ pl: 0.5 }}>
                {item.cook_time} Menit
              </Typography>
            </IconButton>

            <Typography variant="h5" color="#bdbdbd" sx={{ mx: 1 }}>
              |
            </Typography>

            <IconButton aria-label="person" sx={{ color: "#bdbdbd" }}>
              <PersonIcon />
              <Typography variant="body2">{item.servings} Porsi</Typography>
            </IconButton>

            <ExpandMore
              expand={expanded.includes(item.id)}
              onClick={() => toggleExpand(item.id)}
              aria-expanded={expanded.includes(item.id)}
              aria-label="show more"
              sx={{ color: "#bdbdbd" }}
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>

          <Collapse in={expanded.includes(item.id)} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography fontWeight="700">Bahan:</Typography>
              {item.ingredients?.map((ing, idx) => (
                <Typography key={idx}>
                  - {ing.amount} {ing.name}
                </Typography>
              ))}

              <Typography sx={{ mb: 2, fontWeight: "700" }}>Langkah:</Typography>
              {item.steps?.map((step, idx) => (
                <Typography key={idx} paragraph>
                  {idx + 1}. {step.detail}
                </Typography>
              ))}
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </>
  );
}
