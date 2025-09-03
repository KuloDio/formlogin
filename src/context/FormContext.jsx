import React, { createContext, useContext, useState } from "react";

// Default value
export const FormContext = createContext({
  formResep: {
    nama: "",
    deskripsi: "",
    image: "",
    kategori: "",
    porsi: "",
    persiapan: "",
    waktumasak: "",
    langkah: [],   // ✅ tambahkan
    bahan: [],     // ✅ tambahkan
  },
  setFormResep: () => {},
});

export const FormProvider = ({ children }) => {
  const [formResep, setFormResep] = useState({
    nama: "",
    deskripsi: "",
    image: "",
    kategori: "",
    porsi: "",
    persiapan: "",
    waktumasak: "",
    langkah: [],
    bahan: [],
  });

  return (
    <FormContext.Provider value={{ formResep, setFormResep }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
