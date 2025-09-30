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
import { FormProvider } from './context/FormContext.jsx';
import { useEffect, useState } from 'react';
import axios from "axios";


function PrivateRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    axios
      .get("http://localhost:5000/api/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => setValid(true))
      .catch(() => {
        // token tidak valid / sudah di-blacklist
        localStorage.removeItem("token");
        setValid(false);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null;      // bisa ganti dengan spinner/loading state
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
      </Route>
    </Routes>
  );
}

export default App;
