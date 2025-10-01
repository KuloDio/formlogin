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
      const payload = {
        title: formResep.nama,
        description: formResep.deskripsi,
        category: formResep.kategori,
        servings: parseInt(formResep.porsi, 10) || 0,
        prep_time: parseInt(formResep.persiapan, 10) || 0,
        cook_time: parseInt(formResep.waktumasak, 10) || 0,
        photos: formResep.image ? [{ url: formResep.image }] : [],
        steps:
          formResep.langkah?.map((l, idx) => ({
            number: idx + 1,
            detail: l.deskripsi,
          })) || [],
        ingredients:
          formResep.bahan?.map((b) => ({
            name: b.namaBahan,
            amount: b.jumlahBahan,
          })) || [],
      };

      const token = localStorage.getItem("token");

      const res = await axios.post(`${API_URL}/api/recipes`, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Resep berhasil disimpan!");

      resetForm();
      navigate("/dashboard/myresep");

    } catch (err) {
      console.error("Error API:", err);
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

        <Box
          sx={{ display: "flex", justifyContent: "flex-end", marginTop: "2%" }}
        >
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
