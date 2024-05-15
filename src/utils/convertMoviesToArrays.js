export const convertMoviesToArrays = (movies) => {
  let moviesArray = []
  let arr = []
  movies?.forEach((item, index) => {
    arr.push(item)
    if((index + 1) % 20 === 0) {
      moviesArray.push(arr)
      arr = []
    }
  })
  moviesArray.push(arr)
  return moviesArray
}