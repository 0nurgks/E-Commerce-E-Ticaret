import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  value: [], // bu **mutlaka bir array** olmalı!
}

export const filteredProductSlice = createSlice({
    name: "filteredProduct",
    initialState,
    reducers: {
        setFilteredProduct: (state,action)=>{
            state.value = action.payload
        },
    }
});

export const {setFilteredProduct} = filteredProductSlice.actions;
export default  filteredProductSlice.reducer;