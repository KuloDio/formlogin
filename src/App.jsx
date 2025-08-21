import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx'
import DaftarResep from './pages/Daftar-Resep.jsx';
import { Routes, Route, Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/resep" element={<DaftarResep />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
