import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx'
import { Routes, Route, Navigate } from "react-router-dom";
import ResepPublic from './pages/ResepPublic.jsx';

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
      <Route path="/reseppublic" element={<ResepPublic />} />
      <Route
        path="/dashboard"
        element={
          // <PrivateRoute>
            <Dashboard />
          /* </PrivateRoute> */
        }
      />
    </Routes>
  );
}

export default App;
