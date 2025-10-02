import React, { useContext } from "react";
import { Box, Typography, Button } from "@mui/material";
import BahanLangkah from "../components/BahanLangkah";
import FormResep from "../components/FormResep";
import { FormContext } from "../context/FormContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TambahResep = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const { formResep, resetForm } = useContext(FormContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      // field utama
      formData.append("title", formResep.nama?.trim() || "");
      formData.append("description", formResep.deskripsi?.trim() || "");
      formData.append("category", formResep.kategori?.trim() || "");
      formData.append("servings", Number(formResep.porsi) || 0);
      formData.append("prep_time", Number(formResep.persiapan) || 0);
      formData.append("cook_time", Number(formResep.waktumasak) || 0);

      // file gambar (optional)
      if (formResep.image instanceof File) {
        formData.append("thumbnail", formResep.image);
      }

      // bahan
      const ingredients = (formResep.ingredients || []).map((b) => ({
        name: b.name?.trim() || "",
        amount: b.amount?.trim() || "",
      }));
      formData.append("ingredients", JSON.stringify(ingredients));

      // langkah
      const steps = (formResep.steps || []).map((l, idx) => ({
        number: Number(l.number) || idx + 1,
        detail: l.detail?.trim() || "",
      }));
      formData.append("steps", JSON.stringify(steps));


      // debug payload
      console.log("Payload Final:");
      for (let [key, val] of formData.entries()) {
        console.log(key, val);
      }

      // ambil token
      const token = localStorage.getItem("token");

      // request ke backend
      await axios.post(`${API_URL}/api/recipes`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Resep berhasil disimpan!");
      resetForm();
      navigate("/dashboard/myresep");
    } catch (err) {
      console.error("API Error Status:", err.response?.status);
      console.error("API Error Data:", err.response?.data);
      alert("Gagal menyimpan resep!");
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
        BUAT RESEP ANDA DI SINI
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
        {/* Form Resep */}
        <FormResep />

        {/* Bahan dan Langkah */}
        <BahanLangkah />

        <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: "2%" }}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              backgroundColor: "#D8E9A8",
              color: "#1E5128",
              fontWeight: "900",
              borderRadius: "15px",
              paddingX: "2%",
            }}
          >
            TAMBAH RESEP
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default TambahResep;
