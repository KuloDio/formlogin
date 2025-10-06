import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card, CardHeader, CardMedia, CardContent, CardActions,
  Collapse, Avatar, IconButton, Typography
} from "@mui/material";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

export default function CreateCard() {
  const [masakan, setMasakan] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/myrecipes`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMasakan(res.data.recipes || []);
      } catch (err) {
        console.error("Gagal ambil data:", err);
      }
    };
    fetchData();
  }, []);

  const toggleExpand = (id) => {
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  const handleEdit = (id) => {
    navigate(`/dashboard/editresep/${id}`);
  };

  return (
    <>
      {masakan.map((item) => (
        <Card key={item.id} sx={{ mb: 2, background: "#212121", color: "#fff" }}>
          {item.thumbnail && (
            <CardMedia
              component="img"
              height="200"
              image={item.thumbnail}
            />
          )}
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: red[500] }}>R</Avatar>}
            action={
              <IconButton sx={{ color: "#fff" }} onClick={() => handleEdit(item.id)}>
                <EditIcon />
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
                fontWeight: 600,
              }
            }}
          />
          <CardContent>{item.description}</CardContent>
          <CardActions disableSpacing>
            <IconButton sx={{ color: "#fff" }}>
              <AccessTimeIcon />
              <Typography>{item.cook_time} menit</Typography>
            </IconButton>
            <IconButton sx={{ color: "#fff" }}>
              <PersonIcon />
              <Typography>{item.servings} porsi</Typography>
            </IconButton>
            <IconButton
              onClick={() => toggleExpand(item.id)}
              sx={{ color: "#fff", marginLeft: "auto" }}
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded.includes(item.id)} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography fontWeight="700">Bahan:</Typography>
              {item.ingredients?.map((ing, idx) => (
                <Typography key={idx}>
                  - {ing.amount} {ing.name}
                </Typography>
              ))}

              <Typography fontWeight="700" sx={{ mt: 2 }}>Langkah:</Typography>
              {item.steps?.map((step) => (
                <Typography key={step.number}>
                  {step.number}. {step.detail}
                </Typography>
              ))}
            </CardContent>
          </Collapse>
        </Card>
      ))
      }
    </>
  );
}
