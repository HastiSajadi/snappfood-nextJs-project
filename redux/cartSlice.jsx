import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState = {
   cartItems:[],
   cartTotalQuantity:0,
   cartTotalAmount:0
}

 export const carttSlice = createSlice({
   name:"cart",
   initialState,
   reducers:{
     addToCart(state,action){
        state.cartItems.push(action.payload);
     }

   }
})


export const{addToCart} = carttSlice.actions;
export default carttSlice.reducer;