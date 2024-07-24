import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../../types';
import  data from '../../data/stackline_frontend_assessment_data_2021.json';

export const fetchProduct = createAsyncThunk<Product[], string, { rejectValue: string }>(
  'product/fetchProduct',
  async (productId, { rejectWithValue }) => {
    try {
      //Mock API call
      const response = await Promise.resolve(data.filter(item => item.id === productId));
      return response; 
    } catch (error) {
      const errorMsg  =  'Failed to fetch product';
      return rejectWithValue(errorMsg);
    }
  }
);

type ProductState = {
  product: Product | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState: ProductState = {
  product: null,
  status: 'idle',
  error: null
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.product = action.payload[0];
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  }
});

export default productSlice.reducer;