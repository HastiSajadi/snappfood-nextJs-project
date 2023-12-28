'use client'

import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from "@/redux/cartSlice";
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import style from "./css/order.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBagShopping,faTrashCan,faMinus,faPlus} from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx";
import dynamic from "next/dynamic"

const Order= ()=>{

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
         <div className={clsx(style.cartContainer)}>
           
            {
                cartItems.length === 0 ? (
                    <div className={style.emptyCart}>
                        <FontAwesomeIcon icon={faBagShopping} className="mb-3"/>
                        <p className="fs-6">!سبد خرید شما خالی است</p>
                    </div>    
                ) :
                (
                    <div className="w-100">
                         <div className={clsx("d-flex flex-row-reverse w-100 justify-content-between",style.cartQuantity)}>
                         <p className="mb-0"><span>({cartItems.length})</span>سبد خرید</p>
                         <button onClick={() => handleClearCart(cartItems)}><FontAwesomeIcon icon={faTrashCan} /></button>
                         </div>
                       {
                        cartItems?.map( cartItem => (
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
                                        <button className={style.quantityBtn} onClick={() => handleIncreaseQuantity(cartItem) }>
                                        <FontAwesomeIcon className={style.icon} icon={faPlus} />
                                        </button>
                                        <div className="mx-3">{cartItem.cartTotalQuantity} </div>
                                        <button className={style.quantityBtn} onClick={() => handleDecreaseCart(cartItem) } >
                                        <FontAwesomeIcon className={style.icon} icon={faMinus} />
                                        </button>
                                    </div> 
                                </div>  
                                <div className={clsx("d-flex justify-content-between border-bottom py-2 w-100 align-items-center")}>
                                    <div className={clsx("d-flex flex-row-reverse align-items-center",style.price)}>
                                    <p className="mb-0 ms-1 fw-bold">{cartItem.price * cartItem.cartTotalQuantity}</p>
                                    <span >تومان</span>
                                    </div>
                                    <div className={style.price}>
                                        <span>مجموع</span>
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
export default dynamic(()=> Promise.resolve(Order),{ssr : false})