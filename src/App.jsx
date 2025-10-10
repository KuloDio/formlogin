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
import { Navbar } from './components/navbar.jsx';
import { FormProvider } from './context/FormContext.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
import { FavoriteProvider } from './context/FavoriteContext.jsx';
import { SearchProvider } from './context/SearchContext.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import ResetPassword from './pages/ResetPassword.jsx';


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
    justifyItems: "centerc",
    fontWeight: 800,
    fontSize: {xs: "50px",md: "100px"},
    marginTop: "25%",

  }}>Loading...</Typography>;
  return valid ? children : <Navigate to="/login" />;
}

function App() {
  const hideNavbarRoutes = ["/login", "/register", "/forgot-password", "/reset-password"];
  const currentPath = window.location.pathname;

  return (
    <SearchProvider>
      {!hideNavbarRoutes.includes(currentPath) && <Navbar />}  {/* <-- tampil hanya kalau bukan halaman auth */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reseppublic" element={<ResepPublic />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <FormProvider>
                <Dashboard />
              </FormProvider>
            </PrivateRoute>
          }
        >
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="resepuser" element={<ResepUser />} />
          <Route
            path="favorite"
            element={
              <FavoriteProvider>
                <Favorite />
              </FavoriteProvider>
            }
          />
          <Route path="myresep" element={<MyResep />} />
          <Route path="tambahresep" element={<TambahResep />} />
          <Route path="profile" element={<Profile />} />
          <Route path="editresep/:id" element={<EditResep />} />
        </Route>
      </Routes>
    </SearchProvider>
  );
}


export default App;
