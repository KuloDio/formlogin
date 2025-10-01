import React, { createContext, useContext, useState } from "react";

const initialForm = {
  nama: "",
  deskripsi: "",
  image: "",
  kategori: "",
  porsi: "",
  persiapan: "",
  waktumasak: "",
  langkah: [],
  bahan: [],
};

export const FormContext = createContext({
  formResep: initialForm,
  setFormResep: () => {},
  resetForm: () => {},
});

export const FormProvider = ({ children }) => {
  const [formResep, setFormResep] = useState(initialForm);

  const resetForm = () => setFormResep(initialForm);

  return (
    <FormContext.Provider value={{ formResep, setFormResep, resetForm }}>
      {children}
    </FormContext.Provider>
  );
};


export const useFormContext = () => useContext(FormContext);
