import { configureStore } from '@reduxjs/toolkit'
import  CategoryReducer  from './categorySlice.ts'
import  ProductReducer  from './productSlice.ts'
import filteredProductReducer from "./filteredProductSlice.ts"
import clickedReducer from "./clickedSlice.ts"
import basketSlice from "./basketSlice.ts"

export const store = configureStore({
  reducer: {
    product:ProductReducer,
    category:CategoryReducer,
    filteredProduct:filteredProductReducer,
    clicked:clickedReducer,
    basket:basketSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch