'use client'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../../redux/cartSlice";


import style from "./css/order.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBagShopping,faTrashCan,faMinus,faPlus} from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx";
import dynamic from "next/dynamic"

const Order= ()=>{

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const { cartTotalQuantity } = useSelector((state) => state.cart);


    useEffect(() => {
        dispatch(getTotals());
      }, [cart, dispatch]);

      const handleAddToCart = (product) => {
        dispatch(addToCart(product));
      };
      const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product));
      };
      const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
      };
      const handleClearCart = () => {
        dispatch(clearCart());
      };
    return(
       /*  <div className="d-flex align-items-center">
                <a className={clsx("btn p-2",style.order)}> سفارش ها </a>
                <FontAwesomeIcon icon={faFileLines} style={{color: "#121212",}} className="ms-1 fs-6" />
         </div> */
         <div className={clsx(style.cartContainer)}>
           
            {
               cart.cartItems.length === 0 ? (
                    <div className={style.emptyCart}>
                        <FontAwesomeIcon icon={faBagShopping} className="mb-3"/>
                        <p className="fs-6">!سبد خرید شما خالی است</p>
                    </div>    
                ) :
                (
                    <div className="w-100">
                         <div className={clsx("d-flex flex-row-reverse w-100 justify-content-between",style.cartQuantity)}>
                         <p className="mb-0"><span>({cartTotalQuantity})</span>سبد خرید</p>
                         <button onClick={() => handleClearCart(cartItems)}><FontAwesomeIcon icon={faTrashCan} /></button>
                         </div>
                       {
                        cart.cartItems &&
                        cart.cartItems.map( cartItem => (
                            <div key={cartItem.id} className="w-100 mt-3 d-flex flex-column align-items-end">
                                <div>
                                   <p className={clsx("mb-0 fw-bold")}> {cartItem.name} </p>
                                   
                                   {/* <button onClick={() => handleRmoveFromCart(cartItem)}>Remove</button> */}
                                 </div>
                                <div className="d-flex flex-row-reverse justify-content-between w-100 border-bottom mb-1">
                                    <div className={clsx("d-flex flex-row-reverse align-items-center",style.price)}>
                                    <p className="mb-0 ms-1 fw-bold">{cartItem.price}</p>
                                    <span >تومان</span>
                                    </div>
                                    <div className="d-flex my-3 align-items-center ">
                                        <button className={style.quantityBtn} onClick={() => handleAddToCart(cartItem) }>
                                        <FontAwesomeIcon className={style.icon} icon={faPlus} />
                                        </button>
                                        <div className="mx-3">{cartItem.cartQuantity} </div>
                                        <button className={style.quantityBtn} onClick={() => handleDecreaseCart(cartItem) } >
                                        <FontAwesomeIcon className={style.icon} icon={faMinus} />
                                        </button>
                                    </div> 
                                </div>  
 
                             </div>   
                        ))
                       }
                    <div>           
                        <div>
                            <div>
                                <span>
                                قابل پرداخت
                                </span>
                                <span>
                                    {cart.cartTotalAmount}
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
export default dynamic(()=> Promise.resolve(Order),{ssr : false})