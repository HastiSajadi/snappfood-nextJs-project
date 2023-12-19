'use client'

import { useSelector } from "react-redux"


export default function Check ()  {
const cartItems = useSelector( state => state.cart.cart)
    return(
     <div>
        {
            cartItems.map(item => {
                return(
                    <div>
                        <h1>{item.title}</h1>
                        <h1>{item.price}</h1>
                        <button>remove</button>
                     </div>   
                     
                )
            })
        }
     </div>
    )
}