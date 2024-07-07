const getImageActor = (profile_path?: string): string => {
  if (profile_path) {
    return `https://image.tmdb.org/t/p/w500${profile_path}`;
  } else {
    return "";
  }
};

export default getImageActor;
