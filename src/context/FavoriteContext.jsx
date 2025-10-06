import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");

  // 🔹 Ambil data favorite user saat halaman pertama kali dimuat
  useEffect(() => {
    if (!token) return;

    const fetchFavorites = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/recipes/favorites`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        // Berdasarkan struktur JSON:
        // res.data -> array of { id, recipe_id, recipe: {...}, user_id }
        const favoriteIds = res.data.map((item) => item.recipe_id);
        setFavorites(favoriteIds);
      } catch (err) {
        console.error("Gagal ambil data favorite:", err);
      }
    };

    fetchFavorites();
  }, [token]);

  // 🔹 Fungsi toggle favorite (tambah / hapus)
  const toggleFavorite = async (id) => {
    try {
      if (favorites.includes(id)) {
        // Hapus dari favorite
        await axios.delete(`${API_URL}/api/recipes/${id}/favorites`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setFavorites((prev) => prev.filter((f) => f !== id));
      } else {
        // Tambahkan ke favorite
        await axios.post(`${API_URL}/api/recipes/${id}/favorites`, {}, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setFavorites((prev) => [...prev, id]);
      }
    } catch (err) {
      console.error("Gagal update favorite:", err);
    }
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoriteContext);
