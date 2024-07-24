import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  salesData: [],
};

export const salesSlice = createSlice({
  name: 'sales',
  initialState,
  reducers: {
    setSalesData: (state, action) => {
      state.salesData = action.payload;
    },
  },
});

export const { setSalesData } = salesSlice.actions;
export default salesSlice.reducer;