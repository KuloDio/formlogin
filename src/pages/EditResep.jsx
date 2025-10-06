import React, { useEffect, useContext } from "react";
import { Box, Typography, Button } from "@mui/material";
import { FormContext } from "../context/FormContext";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import FormResep from "../components/FormResep";
import BahanLangkah from "../components/BahanLangkah";

const EditResep = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();
  const { formResep, setFormResep, resetForm } = useContext(FormContext);

  const token = localStorage.getItem("token");

  // ambil data resep by id
  useEffect(() => {
    const fetchResep = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/recipes/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = res.data;

        setFormResep({
          title: data.title || "",
          description: data.description || "",
          category: data.category || "",
          servings: data.servings || 0,
          prep_time: data.prep_time || 0,
          cook_time: data.cook_time || 0,
          thumbnail: data.thumbnail || "",
          ingredients: (data.ingredients || []).map((b, idx) => ({
            id: idx + "_" + Date.now(),
            name: b.name,
            amount: b.amount,
          })),
          steps: (data.steps || []).map((s, idx) => ({
            id: idx + "_" + Date.now(),
            number: s.number || idx + 1,
            detail: s.detail,
          })),
        });

      } catch (err) {
        console.error("Gagal ambil data resep:", err);
      }
    };

    fetchResep();
  }, [id]);



  // submit update
  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      formData.append("title", formResep.title);
      formData.append("description", formResep.description);
      formData.append("category", formResep.category);
      formData.append("servings", formResep.servings);
      formData.append("prep_time", formResep.prep_time);
      formData.append("cook_time", formResep.cook_time);

      if (formResep.thumbnail instanceof File) {
        formData.append("thumbnail", formResep.thumbnail);
      }

      formData.append(
        "ingredients",
        JSON.stringify(
          formResep.ingredients.map((b) => ({
            name: b.name,
            amount: b.amount,
          }))
        )
      );

      formData.append(
        "steps",
        JSON.stringify(
          formResep.steps.map((s, idx) => ({
            number: idx + 1,
            detail: s.detail,
          }))
        )
      );

      await axios.put(`${API_URL}/api/recipes/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Resep berhasil diperbarui!");
      resetForm();
      navigate("/dashboard/myresep");
    } catch (err) {
      console.error("Gagal update:", err);
      alert("Update resep gagal, cek console!");
    }
  };



  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
          border: "5px solid",
          borderRadius: "25px",
          borderColor: "#D8E9A8",
          fontWeight: "800",
          paddingY: "1%",
          marginTop: "1%",
        }}
      >
        EDIT RESEP
      </Typography>

      <Box
        sx={{
          border: "5px solid",
          borderRadius: "25px",
          borderColor: "#D8E9A8",
          backgroundColor: "#12372A",
          paddingX: { xs: "3%", sm: "3%", md: "2%" },
          marginTop: { xs: "8%", sm: "8%", md: "4%" },
          paddingBottom: "5%",
          height: "fit-content",
        }}
      >
        <FormResep />
        <BahanLangkah />

        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Button variant="contained" onClick={handleSubmit}
            sx={{
              backgroundColor: "#D8E9A8",
              color: "#1E5128",
              fontWeight: "900",
              borderRadius: "15px",
              paddingX: "2%",
            }}
          >
            UPDATE RESEP
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default EditResep;
