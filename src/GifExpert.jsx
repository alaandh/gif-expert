import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
/* eslint-disable */
export const GifExpert = () => {
  const [categories, setCategories] = useState([""]);

  const ondAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpert</h1>

      <AddCategory onNewCategory={ondAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      <small className="small">Creado por Alan Heizenreder</small>
    </>
  );
};
