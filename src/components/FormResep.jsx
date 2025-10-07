import React, { useContext } from "react";
import { Box, Grid, Typography, TextField, Autocomplete, Input, Button } from "@mui/material";
import { FormContext } from "../context/FormContext";

const kategori = [
  { category: 'Food' },
  { category: 'Drink', },
  { category: 'Snack', },
  { category: 'Cake', },
]

const FormResep = () => {

  const defaultProps = {
    options: kategori,
    getOptionLabel: (option) => option.category,
  };
  const flatProps = {
    options: kategori.map((option) => option.category),
  };
  const [value, setValue] = React.useState(null);

  const { formResep, setFormResep } = useContext(FormContext);


  return (
    <Grid
      container
      direction={{ xs: "row", sm: "column", md: "row", lg: "row" }}
      sx={{
        justifyContent: "space-around",
        marginTop: "1.5%",
      }}
    >
      {/* NAMA RESEP */}
      <Box
        xs={12}
        md={4}
        sx={{
          width: { xs: "100%", md: "32%" },
          height: "40vh",
          marginTop: { xs: "2%", md: "2" },
          padding: "1%",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            backgroundColor: "#D8E9A8",
            alignItems: "center",
            borderRadius: "25px",
            fontWeight: "800",
            paddingY: "2%",
            color: "#1E5128",
            boxShadow: "0 4px 2px #00000035",
          }}
        >
          NAMA RESEP
        </Typography>
        <TextField
          id="title"
          value={formResep.title || ""}
          onChange={(e) => setFormResep({ ...formResep, title: e.target.value })}
          placeholder="Masukkan Nama Resep"
          sx={{
            width: "100%",
            marginTop: "5%",
            textAlign: "center",
            "& .MuiOutlinedInput-root": {
              border: "4px solid",
              borderColor: "#D8E9A8",
              borderRadius: "20px",
              "& fieldset": { borderColor: "transparent" },
              "&:hover fieldset": { borderColor: "transparent" },
              "&.Mui-focused fieldset": { borderColor: "transparent" },
              "& .MuiInputBase-input": { color: "white" },
            },
          }}
        />

        {/* DESKRIPSI */}
        <Typography
          sx={{
            textAlign: "center",
            backgroundColor: "#D8E9A8",
            alignItems: "center",
            borderRadius: "25px",
            fontWeight: "800",
            paddingY: "2%",
            color: "#1E5128",
            marginTop: { xs: "5%", md: "5%" },
            boxShadow: "0 4px 2px #00000035",
          }}
        >
          DESKRIPSI RESEP
        </Typography>
        <TextField
          id="description"
          value={formResep.description || ""}
          onChange={(e) =>
            setFormResep({ ...formResep, description: e.target.value })
          }
          placeholder="Masukkan Deskripsi Resep"
          sx={{
            width: "100%",
            marginTop: "5%",
            textAlign: "center",
            "& .MuiOutlinedInput-root": {
              border: "4px solid",
              borderColor: "#D8E9A8",
              borderRadius: "20px",
              "& fieldset": { borderColor: "transparent" },
              "&:hover fieldset": { borderColor: "transparent" },
              "&.Mui-focused fieldset": { borderColor: "transparent" },
              "& .MuiInputBase-input": { color: "white" },
            },
          }}
        />

        {/* FOTO MAKANAN */}
        <Typography
          sx={{
            textAlign: "center",
            backgroundColor: "#D8E9A8",
            alignItems: "center",
            borderRadius: "25px",
            fontWeight: "800",
            paddingY: "2%",
            color: "#1E5128",
            marginTop: { xs: "5%", md: "5%" },
            boxShadow: "0 4px 2px #00000035",
          }}
        >
          FOTO MAKANAN
        </Typography>
        <Input
          type="file"
          placeholder="Foto Max 2mb"
          inputProps={{ accept: "image/*" }}
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              setFormResep((prev) => ({ ...prev, thumbnail: file }));
            }
          }}
          sx={{
            width: "100%",
            marginTop: "5%",
            paddingY: "3%",
            paddingX: "4%",
            textAlign: "center",
            color: "white",
            border: "4px solid",
            borderColor: "#D8E9A8",
            borderRadius: "20px",
            alignItems: "center",
            textDecoration: "none",
          }}
        />
      </Box>


      {/* KATEGORI */}
      <Box
        xs={12}
        md={4}
        sx={{
          width: { xs: "100%", md: "32%" },
          height: "40vh",
          marginTop: { xs: "40%", md: "2%" },
          padding: "1%",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            backgroundColor: "#D8E9A8",
            alignItems: "center",
            borderRadius: "25px",
            fontWeight: "800",
            paddingY: "2%",
            color: "#1E5128",
            boxShadow: "0 4px 2px #00000035",
          }}
        >
          KATEGORI RESEP
        </Typography>
        <Autocomplete
          id="category"
          options={kategori}
          getOptionLabel={(option) => option.category || ""}
          isOptionEqualToValue={(option, value) => option.category === value.category}
          value={kategori.find((opt) => opt.category === formResep.category) || null}
          onChange={(event, newValue) => {
            setFormResep({
              ...formResep,
              category: newValue ? newValue.category : "",
            });
          }}
          sx={{
            width: "100%",
            marginTop: "5%",
            textAlign: "center",
            "& .MuiOutlinedInput-root": {
              border: "4px solid",
              borderColor: "#D8E9A8",
              borderRadius: "20px",
              "& fieldset": { borderColor: "transparent" },
              "&:hover fieldset": { borderColor: "transparent" },
              "&.Mui-focused fieldset": { borderColor: "transparent" },
              "& .MuiInputBase-input": { color: "white" },
            },
          }}
          renderInput={(params) => (
            <TextField {...params} placeholder="Masukan Kategori Resep Masakan" />
          )}
        />
        {/* JUMLAH PORSI */}
        <Typography
          sx={{
            textAlign: "center",
            backgroundColor: "#D8E9A8",
            alignItems: "center",
            borderRadius: "25px",
            fontWeight: "800",
            paddingY: "2%",
            color: "#1E5128",
            marginTop: { xs: "5%", md: "5%" },
            boxShadow: "0 4px 2px #00000035",
          }}
        >
          JUMLAH PORSI
        </Typography>
        <TextField
          id="servings"
          type="number"
          value={formResep.servings || ""}
          onChange={(e) =>
            setFormResep({ ...formResep, servings: e.target.value })
          }
          placeholder="Masukkan Jumlah Porsi"
          sx={{
            width: "100%",
            marginTop: "5%",
            textAlign: "center",
            "& .MuiOutlinedInput-root": {
              border: "4px solid",
              borderColor: "#D8E9A8",
              borderRadius: "20px",
              "& fieldset": { borderColor: "transparent" },
              "&:hover fieldset": { borderColor: "transparent" },
              "&.Mui-focused fieldset": { borderColor: "transparent" },
              "& .MuiInputBase-input": { color: "white" },
            },
          }}
        />
      </Box>


      {/* WAKTU MEMASAK */}
      <Box
        xs={12}
        md={4}
        sx={{
          width: { xs: "100%", md: "32%" },
          height: "40vh",
          marginTop: { xs: "2%", md: "2" },
          padding: "1%",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            backgroundColor: "#D8E9A8",
            alignItems: "center",
            borderRadius: "25px",
            fontWeight: "800",
            paddingY: "2%",
            color: "#1E5128",
            boxShadow: "0 4px 2px #00000035",
          }}
        >
          WAKTU MEMASAK
        </Typography>

        {/* WAKTU PERSIAPAN */}
        <TextField
          id="prep_time"
          value={formResep.prep_time || ""}
          onChange={(e) => setFormResep({ ...formResep, prep_time: e.target.value })}
          placeholder="Waktu Persiapan Memasak (Menit)"
          sx={{
            width: "100%",
            marginTop: "5%",
            textAlign: "center",
            "& .MuiOutlinedInput-root": {
              border: "4px solid",
              borderColor: "#D8E9A8",
              borderRadius: "20px",
              "& fieldset": { borderColor: "transparent" },
              "&:hover fieldset": { borderColor: "transparent" },
              "&.Mui-focused fieldset": { borderColor: "transparent" },
              "& .MuiInputBase-input": { color: "white" },
            },
          }}
        />

        {/* WAKTU MEMASAK */}
        <TextField
          id="cook_time"
          value={formResep.cook_time || ""}
          onChange={(e) =>
            setFormResep({ ...formResep, cook_time: e.target.value })
          }
          placeholder="Waktu Memasak ( Menit )"
          sx={{
            width: "100%",
            marginTop: "5%",
            textAlign: "center",
            "& .MuiOutlinedInput-root": {
              border: "4px solid",
              borderColor: "#D8E9A8",
              borderRadius: "20px",
              "& fieldset": { borderColor: "transparent" },
              "&:hover fieldset": { borderColor: "transparent" },
              "&.Mui-focused fieldset": { borderColor: "transparent" },
              "& .MuiInputBase-input": { color: "white" },
            },
          }}
        />
      </Box>

    </Grid>
  );
};

export default FormResep;
