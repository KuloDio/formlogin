import React, { useState, useMemo } from "react";
import axios from "axios";
import { Box, TextField, Button } from "@mui/material";


const FormRegister = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const passwordMatch = useMemo(
    () =>
      form.password.trim() !== "" &&
      form.confirmpassword.trim() !== "" &&
      form.password === form.confirmpassword,
    [form.password, form.confirmpassword]
  );

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      form.name.trim() === "" ||
      form.email.trim() === "" ||
      form.password.trim() === ""
    ) {
      alert("Wajib di isi semua");
      return;
    }
    if (!passwordMatch) {
      alert("Password tidak sama");
      return;
    }
    if (form.password.length < 6) {
      alert("Password minimal 6 karakter");
      return;
    }

    try {
      const res = await axios.post("http://192.168.100.247:8080/auth/register", {
        name: form.name,
        email: form.email,
        password: form.password,
      });
      alert(res.data.message || "Registrasi account berhasil");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Registrasi account gagal");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TextField
        id="name"
        placeholder="Your Name"
        type="text"
        variant="standard"
        value={form.name}
        onChange={handleChange}
        sx={{
          mt: 2,
          input: { color: "white" },
          "& .MuiInput-underline:before": { borderBottomColor: "white" },
        }}
      />
      <TextField
        id="email"
        placeholder="Your Email"
        type="email"
        variant="standard"
        value={form.email}
        onChange={handleChange}
        sx={{
          mt: 2,
          input: { color: "white" },
          "& .MuiInput-underline:before": { borderBottomColor: "white" },
        }}
      />
      <TextField
        id="password"
        placeholder="Create Your Password"
        type="password"
        variant="standard"
        value={form.password}
        onChange={handleChange}
        sx={{
          mt: 2,
          input: { color: "white" },
          "& .MuiInput-underline:before": { borderBottomColor: "white" },
        }}
      />
      <TextField
        id="confirmpassword"
        placeholder="Confirm Your Password"
        type="password"
        variant="standard"
        value={form.confirmpassword}
        onChange={handleChange}
        sx={{
          mt: 2,
          input: { color: "white" },
          "& .MuiInput-underline:before": { borderBottomColor: "white" },
        }}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{
          textTransform: "none",
          mt: 4,
          backgroundColor: "#00673B",
          color: "white",
        }}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default FormRegister;
