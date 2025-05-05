import { createSlice } from "@reduxjs/toolkit"

const initialState={
    value: 0
}

const clickedSlice = createSlice({
    name:"clicked",
    initialState,
    reducers:{
        setClicked : (state,action) =>{
            state.value = action.payload
        }
    }
});

export const {setClicked} = clickedSlice.actions;
export default clickedSlice.reducer;

