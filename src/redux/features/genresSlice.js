import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genres: {},
  mark: false
}

export const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    setGenres: (state, action) => {
      state.genres = action.payload
    },
    setMark: (state) => {
      state.mark = !state.mark
    },
  },
})

export const {setGenres, setMark} = genresSlice.actions
export default genresSlice.reducer