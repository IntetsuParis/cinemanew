const getImage = (poster_path?: string): string => {
  if (poster_path) {
    return `https://image.tmdb.org/t/p/w500${poster_path}`;
  } else {
    return "";
  }
};

export default getImage;
