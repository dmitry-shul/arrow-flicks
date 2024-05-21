export const useSearch = (data, searchValue) => {
  if(searchValue === "") return data
  return data.filter(item => 
    item.original_title.toLowerCase()?.includes(searchValue.toLowerCase())
  )
}
