import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState = {
   cart:localStorage.getItem("cart")
     ? JSON.parse(localStorage.getItem("cart"))
     : [],
   cartTotalQuantity: 0,
   cartTotalAmount: 0,
  
 };
 


 export const carttSlice = createSlice({
   name:"cart",
   initialState,
   reducers:{
     addToCart(state,action){
      const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id );
      if(itemIndex>= 0){
         state.cart[itemIndex].cartTotalQuantity += 1;
      }else{
         const tempProduct = { ...action.payload, cartTotalQuantity : 1};
         state.cart.push(tempProduct);
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))

        
     },
     removeFromCart(state,action){
      state.cart = state.cart.filter(x => x.id !== action.payload.id)
      localStorage.setItem('cart', JSON.stringify(state.cart))

     }
   }

})

console.log(initialState);
export const{addToCart, removeFromCart} = carttSlice.actions;
export default carttSlice.reducer;