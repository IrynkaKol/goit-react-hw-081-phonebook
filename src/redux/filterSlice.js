import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
filter: "",
}

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilterValue(state, action) {
      state.filter = action.payload;
      },
  },
});


export const filterReducer = filterSlice.reducer;
export const { setFilterValue } = filterSlice.actions;
