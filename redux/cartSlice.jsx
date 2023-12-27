import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const getStorLocal = (item) => {
  if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(item);
  }
  return null;
}
const setStorLocal = (item, value) => {
  if (typeof localStorage !== 'undefined') {
      localStorage.setItem(item, value);
  }
}


const initialState = {
   cart:getStorLocal("cart")
     ? JSON.parse(getStorLocal("cart"))
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
      setStorLocal('cart', JSON.stringify(state.cart))
     },

     removeFromCart(state,action){
     const nextCartItems =  state.cart.filter(cartItem => cartItem.id !== action.payload.id)
     state.cart = nextCartItems;

     setStorLocal('cart', JSON.stringify(state.cart))
     },
     decreaseCart(state, action){
      const itemIndex = state.cart.findIndex(
        cartItem => cartItem.id === action.payload.id
      ) 
      
      if(state.cart[itemIndex].cartTotalQuantity > 1) {
        state.cart[itemIndex].cartTotalQuantity -= 1
      }else if(state.cart[itemIndex].cartTotalQuantity === 1){
        const nextCartItems =  state.cart.filter(cartItem => cartItem.id !== action.payload.id)
        state.cart = nextCartItems; 
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
     },
     clearCart(state, action){
      state.cart = [];
      setStorLocal('cart', JSON.stringify(state.cart))

     },
     getTotals(state, action){
    let {total, quantity} =  state.cart.reduce((cartTotal, cartItem) => {
       const { price, cartTotalQuantity} = cartItem; 
       const itemTotal = price * cartTotalQuantity;

       cartTotal.total += itemTotal
       cartTotal.quantity += cartTotalQuantity


       return cartTotal;
      }, {
        total: 0,
        quantity:0
      } )
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
     }
   }

})


export const{addToCart, removeFromCart, decreaseCart, clearCart,getTotals} = carttSlice.actions;
export default carttSlice.reducer;