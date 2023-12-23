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
            <h>Order</h>
            {cartItems.length}
            {
                cartItems.map( item => {
                    return(
                        <div id={item.id} >
                            
                            <h1>
                                {item.name}
                            </h1>
                            <p>
                                {item.price}
                            </p>
                            <button 
                            onClick={ () => dispatch(removeFromCart({ id: item.id}))}
                            > remove</button>
                        </div>
                    )
                })
            }
         </div>
    )
}