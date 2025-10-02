import React, { createContext, useContext, useState } from "react";


const initialForm = {
  title: "",
  description: "",
  thumbnail: "",
  category: "",
  servings: 0,
  prep_time: 0,
  cook_time: 0,
  ingredients: [],  
  steps: [],        
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
