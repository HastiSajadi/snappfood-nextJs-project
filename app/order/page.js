'use client'

import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from "@/redux/cartSlice";
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";

export default function Order () {

    const cartItems = useSelector(state => state.cart.cart)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTotals());
    }, [cartItems, dispatch])

    const handleRmoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem))
    }
    const handleDecreaseCart = (cartItem) => {
        dispatch(decreaseCart(cartItem));
    }
    const handleIncreaseQuantity = (cartItem) => {
        dispatch(addToCart(cartItem))
    }
    const handleClearCart = (cartItem) => {
        dispatch(clearCart(cartItem))
    }
    return(
       /*  <div className="d-flex align-items-center">
                <a className={clsx("btn p-2",style.order)}> سفارش ها </a>
                <FontAwesomeIcon icon={faFileLines} style={{color: "#121212",}} className="ms-1 fs-6" />
         </div> */
         <div>
            <h1>{cartItems.length}</h1>
            {
                cartItems.length === 0 ? (
                    <div>
                        empety
                    </div>    
                ) :
                (
                    <div>
                       {
                        cartItems?.map( cartItem => (
                            <div key={cartItem.id}>
                                <div>
                                   <h1> {cartItem.name} </h1>
                                   
                                   <button onClick={() => handleRmoveFromCart(cartItem)}>Remove</button>
                                 </div>
                                <div>
                                    <h1>
                                        {cartItem.price}
                                    </h1>
                                    <div>
                                        <button onClick={() => handleDecreaseCart(cartItem) } >-</button>
                                        <div>{cartItem.cartTotalQuantity} </div>
                                        <button onClick={() => handleIncreaseQuantity(cartItem) }>+</button>
                                        
                                    </div> 
                                    <div>
                                        <h1>{cartItem.price * cartItem.cartTotalQuantity}</h1>
                                     </div>   

                                </div>    
                             </div>   
                        ))
                       }
                                                            <div>
                                        <button onClick={() => handleClearCart(cartItems)}>clear list</button>
                                        <div>
                                            <div>
                                                <span>
                                                قابل پرداخت
                                                </span>
                                                <span>
                                                   {cartItems.cartTotalAmount}
                                                </span>
                                            </div>
                                        </div>
                                     </div>
                          
                    </div>    
                )
            }
         </div>
    )
}