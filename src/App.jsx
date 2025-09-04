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
      >
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="resepuser" element={<ResepUser />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="myresep" element={<MyResep />} />
        {/* >>> HANYA route ini yang dibungkus provider <<< */}
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
