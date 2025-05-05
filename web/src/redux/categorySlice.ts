import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [], // bu **mutlaka bir array** olmalı!
}

export const CategorySlice = createSlice({
  name: 'Category',
  initialState,
  reducers: {
    setCategory: (state,action)=>{
        state.value = action.payload;
    },
  }
});

export const {setCategory} = CategorySlice.actions;
export default CategorySlice.reducer