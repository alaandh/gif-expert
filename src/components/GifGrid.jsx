import { getGifs } from "../helpers/getGifs";
/* eslint-disable */ 
export const GifGrid = ({ category }) => {
  getGifs(category);

  return (
    <>
      <h3>{category}</h3>
    </>
  );
};
