import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpert = () => {
  const [categories, setCategories] = useState(["Dragon Ball", "One Piece"]);

  const ondAddCategory = () => {
    setCategories([...categories, "nose"]);
  };

  return (
    <>
      {/*titulo*/}

      <h1>GifExpert</h1>

      {/*Input*/}
      <AddCategory />

      {/*Listado de Gif*/}
      <button onClick={ondAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
        <li></li>
      </ol>
      {/*Gif Item*/}
    </>
  );
};
