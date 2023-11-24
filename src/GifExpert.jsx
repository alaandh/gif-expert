import { useState } from "react";

export const GifExpert = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);

  console.table(setCategories);

  return (
    <>
      {/*titulo*/}

      <h1>GifExpert</h1>

      {/*Input*/}

      {/*Listado de Gif*/}
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
