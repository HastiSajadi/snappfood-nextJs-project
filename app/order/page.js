'use client'

import { removeFromCart } from "@/redux/cartSlice";
import { useSelector, useDispatch } from "react-redux"


export default function Order () {

    const cartItems = useSelector(state => state.cart.cart)
    const dispatch = useDispatch();

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
                                   
                                   <button>Remove</button>
                                 </div>
                                <div>
                                    <h1>
                                        {cartItem.price}
                                    </h1>
                                    <div>
                                        <button>-</button>
                                        <div>{cartItem.cartTotalQuantity} </div>
                                        <button>+</button>
                                        
                                    </div> 
                                    <div>
                                        <h1>{cartItem.price * cartItem.cartTotalQuantity}</h1>
                                     </div>   

                                </div>    
                             </div>   
                        ))
                       }
                                                            <div>
                                        <button>clear list</button>
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