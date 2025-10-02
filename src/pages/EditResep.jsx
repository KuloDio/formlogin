import React, { useContext, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import BahanLangkah from "../components/BahanLangkah";
import FormResep from "../components/FormResep";
import { FormContext } from "../context/FormContext";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditResep = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const { id } = useParams();
  const { formResep, setFormResep, resetForm } = useContext(FormContext);

  // Ambil data resep lama
  useEffect(() => {
    const fetchResep = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${API_URL}/api/recipes/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = res.data;

        // mapping ke formContext
        setFormResep({
          nama: data.title || "",
          deskripsi: data.description || "",
          image: data.photos?.[0]?.url || "",
          kategori: data.category || "",
          porsi: data.servings?.toString() || "",
          persiapan: data.prep_time?.toString() || "",
          waktumasak: data.cook_time?.toString() || "",
          langkah:
            data.steps?.map((s) => ({
              deskripsi: s.detail,
            })) || [],
          bahan:
            data.ingredients?.map((i) => ({
              namaBahan: i.name,
              jumlahBahan: i.amount,
            })) || [],
        });
      } catch (err) {
        console.error("Gagal ambil resep:", err);
        alert("Tidak bisa memuat data resep!");
      }
    };

    fetchResep();
  }, [id, API_URL, setFormResep]);

  // Update resep
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

      await axios.put(`${API_URL}/api/recipes/${id}`, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Resep berhasil diperbarui!");
      resetForm();
      navigate("/dashboard/myresep");
    } catch (err) {
      console.error("Error API:", err);
      alert("Gagal update resep!");
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
        EDIT RESEP ANDA
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
            UPDATE RESEP
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default EditResep;
