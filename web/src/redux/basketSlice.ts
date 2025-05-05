import { createSlice } from "@reduxjs/toolkit"

const initialState={
    value: []
}

const basketSlice = createSlice({
    name:"basket",
    initialState,
    reducers:{
        setBasket : (state,action) =>{
            state.value += action.payload
        },
        deleteBasket : (state,)=>{
            state.value = []
        },
        removeFromBasket : (state,action) =>{
            state.value.filter((item)=> item !== action.payload)
            
        }
    }
});

export const {setBasket,deleteBasket} = basketSlice.actions;
export default basketSlice.reducer;

