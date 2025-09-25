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
import drink from "../assets/image/drink.png";
import banner4 from '../assets/image/banner4.png';

const masakan = [
  {
    id: 1,
    title: "Nasi Uduk",
    category: "Sarapan",
    image: imghome,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde officia iusto facere! Aperiam alias, sit animi quidem sunt, totam dolor praesentium incidunt dolores dolore aut!",
    time: "30 Menit",
    portion: "1 porsi",
    method: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, obcaecati.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum repudiandae aliquid iure iusto, ipsa perferendis repellat quo qui enim laborum iste laboriosam quia dolorum ut quam. Nulla vitae vero officia ad itaque, quidem, veritatis iste sunt autem rerum eos ipsum?",
    ],
    Ingredients: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, obcaecati.",
      "lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum repudiandae aliquid iure iusto, ipsa perferendis repellat quo qui enim laborum iste laboriosam quia dolorum ut quam. Nulla vitae vero officia ad itaque, quidem, veritatis iste sunt autem rerum eos ipsum?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo est voluptatibus inventore fuga cumque eaque voluptatum, reiciendis repellat. Eum assumenda incidunt voluptatum facere ipsam, veritatis dolores obcaecati voluptas saepe repellat neque aliquid beatae libero dolor atque inventore repellendus iste minima officia minus nostrum commodi reiciendis eaque non. Dolorem, consequatur aliquam?",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eaque numquam facere nobis amet nam!",
    ],
  },
  {
    id: 2,
    title: "Nasi Goreng",
    category: "Makan Malam",
    image: drink,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde officia iusto facere! Aperiam alias, sit animi quidem sunt, totam dolor praesentium incidunt dolores dolore aut!",
    time: "30 Menit",
    portion: "2 porsi",
    method: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, obcaecati.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum repudiandae aliquid iure iusto, ipsa perferendis repellat quo qui enim laborum iste laboriosam quia dolorum ut quam. Nulla vitae vero officia ad itaque, quidem, veritatis iste sunt autem rerum eos ipsum?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo est voluptatibus inventore fuga cumque eaque voluptatum, reiciendis repellat. Eum assumenda incidunt voluptatum facere ipsam, veritatis dolores obcaecati voluptas saepe repellat neque aliquid beatae libero dolor atque inventore repellendus iste minima officia minus nostrum commodi reiciendis eaque non. Dolorem, consequatur aliquam?",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eaque numquam facere nobis amet nam!"
    ],
    Ingredients: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, obcaecati.",
      "lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum repudiandae aliquid iure iusto, ipsa perferendis repellat quo qui enim laborum iste laboriosam quia dolorum ut quam. Nulla vitae vero officia ad itaque, quidem, veritatis iste sunt autem rerum eos ipsum?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo est voluptatibus inventore fuga cumque eaque voluptatum, reiciendis repellat. Eum assumenda incidunt voluptatum facere ipsam, veritatis dolores obcaecati voluptas saepe repellat neque aliquid beatae libero dolor atque inventore repellendus iste minima officia minus nostrum commodi reiciendis eaque non. Dolorem, consequatur aliquam?",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eaque numquam facere nobis amet nam!",
    ],
  },
  {
    id: 3,
    title: "Kue Cubit",
    category: "Snack",
    image: banner4,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde officia iusto facere! Aperiam alias, sit animi quidem sunt, totam dolor praesentium incidunt dolores dolore aut!",
    time: "30 Menit",
    portion: "3 porsi",
    method: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, obcaecati.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum repudiandae aliquid iure iusto, ipsa perferendis repellat quo qui enim laborum iste laboriosam quia dolorum ut quam. Nulla vitae vero officia ad itaque, quidem, veritatis iste sunt autem rerum eos ipsum?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo est voluptatibus inventore fuga cumque eaque voluptatum, reiciendis repellat. Eum assumenda incidunt voluptatum facere ipsam, veritatis dolores obcaecati voluptas saepe repellat neque aliquid beatae libero dolor atque inventore repellendus iste minima officia minus nostrum commodi reiciendis eaque non. Dolorem, consequatur aliquam?",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eaque numquam facere nobis amet nam!"
    ],
    Ingredients: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, obcaecati.",
      "lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum repudiandae aliquid iure iusto, ipsa perferendis repellat quo qui enim laborum iste laboriosam quia dolorum ut quam. Nulla vitae vero officia ad itaque, quidem, veritatis iste sunt autem rerum eos ipsum?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo est voluptatibus inventore fuga cumque eaque voluptatum, reiciendis repellat. Eum assumenda incidunt voluptatum facere ipsam, veritatis dolores obcaecati voluptas saepe repellat neque aliquid beatae libero dolor atque inventore repellendus iste minima officia minus nostrum commodi reiciendis eaque non. Dolorem, consequatur aliquam?",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eaque numquam facere nobis amet nam!",
    ],
  },
  {
    id: 4,
    title: "Nasi Uduk",
    category: "Sarapan",
    image: imghome,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde officia iusto facere! Aperiam alias, sit animi quidem sunt, totam dolor praesentium incidunt dolores dolore aut!",
    time: "30 Menit",
    portion: "1 porsi",
    method: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, obcaecati.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum repudiandae aliquid iure iusto, ipsa perferendis repellat quo qui enim laborum iste laboriosam quia dolorum ut quam. Nulla vitae vero officia ad itaque, quidem, veritatis iste sunt autem rerum eos ipsum?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo est voluptatibus inventore fuga cumque eaque voluptatum, reiciendis repellat. Eum assumenda incidunt voluptatum facere ipsam, veritatis dolores obcaecati voluptas saepe repellat neque aliquid beatae libero dolor atque inventore repellendus iste minima officia minus nostrum commodi reiciendis eaque non. Dolorem, consequatur aliquam?",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eaque numquam facere nobis amet nam!"
    ],
    Ingredients: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, obcaecati.",
      "lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum repudiandae aliquid iure iusto, ipsa perferendis repellat quo qui enim laborum iste laboriosam quia dolorum ut quam. Nulla vitae vero officia ad itaque, quidem, veritatis iste sunt autem rerum eos ipsum?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo est voluptatibus inventore fuga cumque eaque voluptatum, reiciendis repellat. Eum assumenda incidunt voluptatum facere ipsam, veritatis dolores obcaecati voluptas saepe repellat neque aliquid beatae libero dolor atque inventore repellendus iste minima officia minus nostrum commodi reiciendis eaque non. Dolorem, consequatur aliquam?",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eaque numquam facere nobis amet nam!",
    ],
  },
  {
    id: 5,
    title: "Nasi Goreng",
    category: "Makan Malam",
    image: imghome,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde officia iusto facere! Aperiam alias, sit animi quidem sunt, totam dolor praesentium incidunt dolores dolore aut!",
    time: "30 Menit",
    portion: "2 porsi",
    method: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, obcaecati.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum repudiandae aliquid iure iusto, ipsa perferendis repellat quo qui enim laborum iste laboriosam quia dolorum ut quam. Nulla vitae vero officia ad itaque, quidem, veritatis iste sunt autem rerum eos ipsum?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo est voluptatibus inventore fuga cumque eaque voluptatum, reiciendis repellat. Eum assumenda incidunt voluptatum facere ipsam, veritatis dolores obcaecati voluptas saepe repellat neque aliquid beatae libero dolor atque inventore repellendus iste minima officia minus nostrum commodi reiciendis eaque non. Dolorem, consequatur aliquam?",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eaque numquam facere nobis amet nam!"
    ],
    Ingredients: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, obcaecati.",
      "lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum repudiandae aliquid iure iusto, ipsa perferendis repellat quo qui enim laborum iste laboriosam quia dolorum ut quam. Nulla vitae vero officia ad itaque, quidem, veritatis iste sunt autem rerum eos ipsum?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo est voluptatibus inventore fuga cumque eaque voluptatum, reiciendis repellat. Eum assumenda incidunt voluptatum facere ipsam, veritatis dolores obcaecati voluptas saepe repellat neque aliquid beatae libero dolor atque inventore repellendus iste minima officia minus nostrum commodi reiciendis eaque non. Dolorem, consequatur aliquam?",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eaque numquam facere nobis amet nam!",
    ],
  },
  {
    id: 6,
    title: "Nasi Uduk",
    category: "Sarapan",
    image: imghome,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde officia iusto facere! Aperiam alias, sit animi quidem sunt, totam dolor praesentium incidunt dolores dolore aut!",
    time: "30 Menit",
    portion: "3 porsi",
    method: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, obcaecati.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum repudiandae aliquid iure iusto, ipsa perferendis repellat quo qui enim laborum iste laboriosam quia dolorum ut quam. Nulla vitae vero officia ad itaque, quidem, veritatis iste sunt autem rerum eos ipsum?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo est voluptatibus inventore fuga cumque eaque voluptatum, reiciendis repellat. Eum assumenda incidunt voluptatum facere ipsam, veritatis dolores obcaecati voluptas saepe repellat neque aliquid beatae libero dolor atque inventore repellendus iste minima officia minus nostrum commodi reiciendis eaque non. Dolorem, consequatur aliquam?",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eaque numquam facere nobis amet nam!"
    ],
    Ingredients: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, obcaecati.",
      "lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum repudiandae aliquid iure iusto, ipsa perferendis repellat quo qui enim laborum iste laboriosam quia dolorum ut quam. Nulla vitae vero officia ad itaque, quidem, veritatis iste sunt autem rerum eos ipsum?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo est voluptatibus inventore fuga cumque eaque voluptatum, reiciendis repellat. Eum assumenda incidunt voluptatum facere ipsam, veritatis dolores obcaecati voluptas saepe repellat neque aliquid beatae libero dolor atque inventore repellendus iste minima officia minus nostrum commodi reiciendis eaque non. Dolorem, consequatur aliquam?",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eaque numquam facere nobis amet nam!",
    ],
  },
  {
    id: 7,
    title: "Nasi Uduk",
    category: "Sarapan",
    image: imghome,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde officia iusto facere! Aperiam alias, sit animi quidem sunt, totam dolor praesentium incidunt dolores dolore aut!",
    time: "30 Menit",
    portion: "3 porsi",
    method: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, obcaecati.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum repudiandae aliquid iure iusto, ipsa perferendis repellat quo qui enim laborum iste laboriosam quia dolorum ut quam. Nulla vitae vero officia ad itaque, quidem, veritatis iste sunt autem rerum eos ipsum?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo est voluptatibus inventore fuga cumque eaque voluptatum, reiciendis repellat. Eum assumenda incidunt voluptatum facere ipsam, veritatis dolores obcaecati voluptas saepe repellat neque aliquid beatae libero dolor atque inventore repellendus iste minima officia minus nostrum commodi reiciendis eaque non. Dolorem, consequatur aliquam?",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eaque numquam facere nobis amet nam!"
    ],
    Ingredients: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, obcaecati.",
      "lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum repudiandae aliquid iure iusto, ipsa perferendis repellat quo qui enim laborum iste laboriosam quia dolorum ut quam. Nulla vitae vero officia ad itaque, quidem, veritatis iste sunt autem rerum eos ipsum?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo est voluptatibus inventore fuga cumque eaque voluptatum, reiciendis repellat. Eum assumenda incidunt voluptatum facere ipsam, veritatis dolores obcaecati voluptas saepe repellat neque aliquid beatae libero dolor atque inventore repellendus iste minima officia minus nostrum commodi reiciendis eaque non. Dolorem, consequatur aliquam?",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eaque numquam facere nobis amet nam!",
    ],
  },
]



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
  // state per item
  const [favorites, setFavorites] = React.useState([]);
  const [expanded, setExpanded] = React.useState([]);

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
        <Card
          key={item.id}
          sx={{
            maxWidth: 345,
            height: "auto",
            backgroundColor: '#212121',
            color: '#bdbdbd',
            mb: 2
          }}
        >
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
            <IconButton aria-label="time" sx={{ color: "#bdbdbd" }}>
              <AccessTimeIcon />
              <Typography variant="body2" sx={{ pl: 0.5 }}>{item.time}</Typography>
            </IconButton>

            <Typography variant="h5" color="#bdbdbd" sx={{ mx: 1 }}>|</Typography>

            <IconButton aria-label="person" sx={{ color: "#bdbdbd" }}>
              <PersonIcon />
              <Typography variant="body2">{item.portion}</Typography>
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
              <Typography sx={{
                mb: 2,
                fontWeight: '700',
                fontSize: 16,
                fontFamily: 'Poppins',
              }}>Method:</Typography>
              {item.method.map((step, idx) => (
                <Typography key={idx} paragraph>
                  {idx + 1}. {step}
                </Typography>
              ))}
              <Typography sx={{
                mb: 2,
                fontWeight: '700',
                fontSize: 16,
                fontFamily: 'Poppins',
              }}>Ingredients:</Typography>
              {item.Ingredients.map((ing, idx) => (
                <Typography key={idx} paragraph>
                  - {ing}
                </Typography>
              ))}
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </>
  );
}

