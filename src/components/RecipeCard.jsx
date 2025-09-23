import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';

import imghome from "../assets/image/imghome.png";

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
  const [expanded, setExpanded] = React.useState(false);
  const [favorited, setFavorited] = React.useState(false); // 🔴 state untuk favorite

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavoriteClick = () => {
    setFavorited(!favorited); // toggle true/false
  };

  return (
    <Card sx={{
      maxWidth: 345,
      backgroundColor: '#212121',
      color: '#bdbdbd',
      height: 'auto',
    }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton
            aria-label="add to favorites"
            sx={{ color: favorited ? "#ff0000ff" : "#bdbdbd" }} // 🔴 ganti warna sesuai state
            onClick={handleFavoriteClick}
          >
            <FavoriteIcon />
          </IconButton>
        }
        title="Nasi Uduk"
        subheader="Sarapan"
        titleTypographyProps={{
          sx: {
            fontWeight: '700',
            fontSize: 18,
            fontFamily: 'Poppins',
          }
        }}
        subheaderTypographyProps={{
          sx: {
            color: "#bdbdbd",
          }
        }}
      />
      <CardMedia
        component="img"
        height="194"
        image={imghome}
        alt="Nasi Uduk"
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: '#bdbdbd' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde officia iusto facere! Aperiam alias, sit animi quidem sunt, totam dolor praesentium incidunt dolores dolore aut!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="time" sx={{ color: "#bdbdbd", alignItems: 'center' }}>
          <AccessTimeIcon />
          <Typography variant="body2" color="#bdbdbd" sx={{ pl: 0.5 }}>30 Menit</Typography>
        </IconButton>
        <Typography variant="h5" color="#bdbdbd" sx={{ justifyContent: 'center' }}>|</Typography>
        <IconButton aria-label="person" sx={{ color: "#bdbdbd", alignItems: 'center' }}>
          <PersonIcon />
          <Typography variant="body2" color="#bdbdbd">1 porsi</Typography>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{ color: "#bdbdbd" }}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, obcaecati.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum repudiandae aliquid iure iusto, ipsa perferendis repellat quo qui enim laborum iste laboriosam quia dolorum ut quam. Nulla vitae vero officia ad itaque, quidem, veritatis iste sunt autem rerum eos ipsum?
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo est voluptatibus inventore fuga cumque eaque voluptatum, reiciendis repellat. Eum assumenda incidunt voluptatum facere ipsam, veritatis dolores obcaecati voluptas saepe repellat neque aliquid beatae libero dolor atque inventore repellendus iste minima officia minus nostrum commodi reiciendis eaque non. Dolorem, consequatur aliquam?
          </Typography>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eaque numquam facere nobis amet nam!
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
