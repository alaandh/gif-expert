/* eslint-disable */
export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=LkCEsxb4W9BSn5U6fiSCd92niL46f2oW&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((image) => ({
    id: image.id,
    title: image.title,
    url: image.images.downsized_medium.url,
  }));

  return gifs;
};
