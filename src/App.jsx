 reval
// App.jsx
import './App.css';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { Routes, Route, Navigate } from "react-router-dom";
import Orders from './pages/Orders.jsx';
=======
import { useState } from 'react'
import './App.css'
import Register from './pages/register'

main

function App() {
  return (
 reval
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
      </Route>
      {/* Rute baru untuk Orders */}
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );

    <>
      <Register/>
    </>
  )
 main
}

export default App;