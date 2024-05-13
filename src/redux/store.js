import { configureStore } from '@reduxjs/toolkit'
import genresSlice from './features/genresSlice'

export const store = configureStore({
  reducer: {
    genre: genresSlice,
  },
})