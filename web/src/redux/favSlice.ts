import { createSlice } from "@reduxjs/toolkit"

const initialState={
    value: []
}

const favSlice = createSlice({
    name:"fav",
    initialState,
    reducers:{
        setFav : (state,action) =>{
            state.value = action.payload
        },
        
    }
});

export const {setFav} = favSlice.actions;
export default favSlice.reducer;

