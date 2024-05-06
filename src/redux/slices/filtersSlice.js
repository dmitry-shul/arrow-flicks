import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {},
}

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  }
})

export const { setFilters } = filtersSlice.actions
export default filtersSlice.reducer