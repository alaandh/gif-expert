import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

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

      <small>Creado por Alan Heizenreder.</small>
    </>
  );
};
