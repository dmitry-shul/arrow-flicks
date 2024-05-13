export const getGenresName = (genres, genre_ids) => {
  return genres?.genres.filter(item => genre_ids.includes(item.id)).map(item => item.name).join(", ")
}