import React, { useContext } from "react";
import { Box, Grid, Typography, TextField, Autocomplete, Input } from "@mui/material";
import { FormContext } from "../context/FormContext";

const kategori = [
  { category: 'Food' },
  { category: 'Drink', },
  { category: 'Snack', },
  { category: 'Sambal', },
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
          id="nama"
          value={formResep.nama || ""}
          onChange={(e) => setFormResep({ ...formResep, nama: e.target.value })}
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
          id="deskripsi"
          value={formResep.deskripsi || ""}
          onChange={(e) =>
            setFormResep({ ...formResep, deskripsi: e.target.value })
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
          id="image"
          type="file"
          accept="image/*"
          onChange={(e) =>
            setFormResep({ ...formResep, image: e.target.files[0] }) // simpan File, bukan string
          }
          placeholder="Masukkan Foto Makanan"
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
          id="kategori"
          options={kategori}
          getOptionLabel={(option) => option.category || ""}
          isOptionEqualToValue={(option, value) => option.category === value.category}
          value={kategori.find((opt) => opt.category === formResep.kategori) || null}
          onChange={(event, newValue) => {
            setFormResep({
              ...formResep,
              kategori: newValue ? newValue.category : "",
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
          id="porsi"
          type="number"
          value={formResep.porsi || ""}
          onChange={(e) =>
            setFormResep({ ...formResep, porsi: e.target.value })
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
          id="persiapan"
          value={formResep.persiapan || ""}
          onChange={(e) => setFormResep({ ...formResep, persiapan: e.target.value })}
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
          id="waktumasak"
          value={formResep.waktumasak || ""}
          onChange={(e) =>
            setFormResep({ ...formResep, waktumasak: e.target.value })
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
