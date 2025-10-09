import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import {
  Card, CardHeader, CardMedia, CardContent,
  CardActions, Collapse, Avatar, IconButton, Typography
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import axios from 'axios';
import { useSearch } from '../context/SearchContext';

const API_URL = import.meta.env.VITE_API_URL;

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
}));

export default function RecipeReviewCard({ category }) {
  const [masakan, setMasakan] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const token = localStorage.getItem("token");
  const { search } = useSearch();

  useEffect(() => {
    let url = `${API_URL}/api/recipes`;
    if (category) {
      url = `${API_URL}/api/recipesByCategory?category=${encodeURIComponent(category)}`;
    }

    axios
      .get(url)
      .then((res) => {

        if (Array.isArray(res.data.recipes)) {
          setMasakan(res.data.recipes);
        } else if (Array.isArray(res.data)) {
          setMasakan(res.data);
        } else {
          setMasakan([]);
        }
      })
      .catch((err) => {
        console.error("[RecipeCard] Gagal ambil data:", err);
        setMasakan([]);
      });
  }, [category]);

  useEffect(() => {
    if (!token) return;
    const fetchFavorites = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/recipes/favorites`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const favoriteIds = res.data.map((fav) => fav.recipe_id);
        setFavorites(favoriteIds);
      } catch (err) {
      }
    };

    fetchFavorites();
  }, [token]);

  const toggleFavorite = async (id) => {
    try {
      await axios.post(`${API_URL}/api/recipes/${id}/favorites`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFavorites((prev) =>
        prev.includes(id)
          ? prev.filter((f) => f !== id)
          : [...prev, id]
      );
    } catch (err) {
      alert("HARAP LOGIN TERLEBIH DAHULU")
    }
  };

  const toggleExpand = (id) => {
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    );
  };

  const filteredMasakan = masakan.filter((item) =>
    item.title?.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <>
      {filteredMasakan.map((item) => (
        <Card
          key={item.id}
          sx={{
            maxWidth: 345,
            mb: 2,
            backgroundColor: '#212121',
            color: '#bdbdbd',
          }}
        >
          <CardHeader
            avatar={<Avatar
              key={item.user?.avatar}
              src={item.user?.avatar}
              alt={item.user?.name}
            >
              {!item.user?.avatar && item.user?.name?.[0]?.toUpperCase()}
            </Avatar>
            }
            action={
              <IconButton
                aria-label="add to favorites"
                sx={{
                  color: favorites.includes(item.id)
                    ? "#ff0000ff"
                    : "#bdbdbd",
                }}
                onClick={() => toggleFavorite(item.id)}
              >
                <FavoriteIcon />
              </IconButton>
            }
            title={item.title}
            titleTypographyProps={{
              sx: { fontWeight: '700', fontSize: 18, fontFamily: 'Poppins' },
            }}
            subheader={item.category}
            subheaderTypographyProps={{
              sx: { color: "#bdbdbd", fontWeight: 600 },
            }}
          />
          {item.thumbnail && (
            <CardMedia component="img" height="200" image={item.thumbnail} />
          )}

          <CardContent>{item.description}</CardContent>

          <CardActions disableSpacing>
            <IconButton sx={{ color: "#bdbdbd" }}>
              <AccessTimeIcon />
              <Typography variant="body2" sx={{ pl: 0.5 }}>
                {item.cook_time} Menit
              </Typography>
            </IconButton>
            <Typography variant="h5" color="#bdbdbd" sx={{ mx: 1 }}>
              |
            </Typography>
            <IconButton sx={{ color: "#bdbdbd" }}>
              <PersonIcon />
              <Typography variant="body2">
                {item.servings} Porsi
              </Typography>
            </IconButton>
            <ExpandMore
              expand={expanded.includes(item.id)}
              onClick={() => toggleExpand(item.id)}
              aria-expanded={expanded.includes(item.id)}
              sx={{ color: "#bdbdbd" }}
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>

          <Collapse in={expanded.includes(item.id)} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography sx={{ mb: 2, fontWeight: '700' }}>Bahan:</Typography>
              {item.ingredients?.map((ing, idx) => (
                <Typography key={idx} paragraph>
                  - {ing.amount} {ing.name}
                </Typography>
              ))}

              <Typography sx={{ mb: 2, fontWeight: '700' }}>Langkah:</Typography>
              {item.steps?.map((step, idx) => (
                <Typography key={idx} paragraph>
                  {step.number}. {step.detail}
                </Typography>
              ))}
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </>
  );
}
