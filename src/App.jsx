// App.jsx
import './App.css';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { Routes, Route, Navigate } from "react-router-dom";
import Orders from './pages/Orders.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
      </Route>
      {/* Rute baru untuk Orders */}
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
}

export default App;