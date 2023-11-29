import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { getGifs } from "../helpers/getGifs";
/* eslint-disable */
export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    if (newImages) {
      setImages(newImages);
    } else {
      console.error("No se pudieron obtener las imágenes");
    }
  };

  useEffect(() => {
    getImages();
  }, [category]);

  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {images.map((image) =>
          image ? <GifItem key={image.id} {...image} /> : null
        )}
      </div>
    </>
  );
};
