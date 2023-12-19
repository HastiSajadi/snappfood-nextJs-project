import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

 const carttSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        addToCart : (state, action) => {
            state.cart.push(action.payload)
        }
    }
    
})
export default carttSlice.reducer;
export const {addToCart} = carttSlice.actions