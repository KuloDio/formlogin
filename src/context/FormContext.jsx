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

  const addIngredient = (name, amount) => {
    setFormResep(prev => ({
      ...prev,
      ingredients: [
        ...prev.ingredients,
        { id: Date.now().toString(), name, amount }
      ]
    }));
  };

  const removeIngredient = (id) => {
    setFormResep(prev => ({
      ...prev,
      ingredients: prev.ingredients.filter(b => b.id !== id)
    }));
  };

  const addStep = (detail) => {
    setFormResep(prev => ({
      ...prev,
      steps: [
        ...prev.steps,
        { id: Date.now().toString(), number: prev.steps.length + 1, detail }
      ]
    }));
  };

  const removeStep = (id) => {
    setFormResep(prev => ({
      ...prev,
      steps: prev.steps.filter(s => s.id !== id).map((s, i) => ({
        ...s,
        number: i + 1,
      }))
    }));
  };

  return (
    <FormContext.Provider
      value={{ formResep, setFormResep, resetForm, addIngredient, removeIngredient, addStep, removeStep }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
