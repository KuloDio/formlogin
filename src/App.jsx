import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';
import { Routes, Route, Navigate } from "react-router-dom";
import ResepPublic from './pages/ResepPublic.jsx';
import ResepUser from './pages/ResepUser.jsx';
import TambahResep from './pages/TambahResep.jsx';
import MyResep from './pages/myresep.jsx';
import Favorite from './pages/favorite.jsx';
import Profile from './pages/Profile.jsx';
import EditResep from './pages/EditResep.jsx';
import { FormProvider } from './context/FormContext.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';


const API_URL = import.meta.env.VITE_API_URL;

function PrivateRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      setLoading(false);
      return;
    }

    axios
      .get(`${API_URL}/api/page/dashboard`, {

        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => setValid(true))
      .catch(() => {

        localStorage.removeItem('token');

        setValid(false);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Typography sx={{
    textAlign: "center",
    fontFamily: "poppins",
    color: "white",
  }}>Loading...</Typography>;
  return valid ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reseppublic" element={<ResepPublic />} />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      >
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="resepuser" element={<ResepUser />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="myresep" element={<MyResep />} />
        <Route
          path="tambahresep"
          element={
            <FormProvider>
              <TambahResep />
            </FormProvider>
          }
        />
        <Route path="profile" element={<Profile />} />
        <Route path="editresep/:id" element={<EditResep />} />
      </Route>
    </Routes>
  );
}

export default App;
