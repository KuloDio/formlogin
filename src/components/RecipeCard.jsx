import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import {
  Card, CardHeader, CardMedia, CardContent,
  CardActions, Collapse, Avatar, IconButton, Typography
} from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import axios from 'axios';

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

export default function RecipeReviewCard() {
  const [masakan, setMasakan] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [expanded, setExpanded] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get(`${API_URL}/api/recipes`, {
      // headers: {
      //   Authorization: `Bearer ${token}`
      // }
    })
      .then((res) => {
        setMasakan(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const toggleExpand = (id) => {
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    );
  };

  return (
    <>
      {masakan.map((item) => (
        <Card key={item.id} sx={{ maxWidth: 345, mb: 2, backgroundColor: '#212121', color: '#bdbdbd' }}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: red[500] }}>R</Avatar>}
            action={
              <IconButton
                aria-label="add to favorites"
                sx={{ color: favorites.includes(item.id) ? "#ff0000ff" : "#bdbdbd" }}
                onClick={() => toggleFavorite(item.id)}
              >
                <FavoriteIcon />
              </IconButton>
            }
            title={item.title}
            titleTypographyProps={{
              sx: {
                fontWeight: '700',
                fontSize: 18,
                fontFamily: 'Poppins',
              }
            }}
            subheader={item.category}
            subheaderTypographyProps={{
              sx: {
                color: "#bdbdbd",
              }
            }}
          />
          <CardMedia component="img" height="194" image={item.image} />
          <CardContent>{item.description}</CardContent>

          <CardActions disableSpacing>
            <IconButton sx={{ color: "#bdbdbd" }}>
              <AccessTimeIcon />
              <Typography variant="body2" sx={{ pl: 0.5 }}>{item.cook_time} Menit</Typography>
            </IconButton>
            <Typography variant="h5" color="#bdbdbd" sx={{ mx: 1 }}>|</Typography>
            <IconButton sx={{ color: "#bdbdbd" }}>
              <PersonIcon />
              <Typography variant="body2">{item.servings} Porsi</Typography>
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
              <Typography sx={{ mb: 2, fontWeight: '700' }}>Method:</Typography>
              {item.steps?.map((step, idx) => (
                <Typography key={idx} paragraph>
                  {step.number}. {step.detail}
                </Typography>
              ))}

              <Typography sx={{ mb: 2, fontWeight: '700' }}>Ingredients:</Typography>
              {item.ingredients?.map((ing, idx) => (
                <Typography key={idx} paragraph>
                  - {ing.amount} {ing.name}
                </Typography>
              ))}
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </>
  );
}
