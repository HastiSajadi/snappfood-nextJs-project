

'use client'

/* import piz from "../../../api/foods/pizzas.json"
 */

import { pizza } from "./index.js";


export default   function restaurantsDetail(){



    for( let i=0; i<3;  i++){
      
        var pizzas =  [pizza[Math.floor(Math.random() * 6 )]]
       
       console.log(pizzas);


    }

 
    return(
        <div>
           {
            pizzas.map(({id,img,name,rate,des,price})=>{
            return(
                <div key={id}>
                             <img src={img} />
                          
                            <h1>{name}</h1>
                            <h2>{des}</h2>
                            <h3>{rate}</h3>
                            <h6>{price}</h6>
                           

                </div>
            )

            })
           }
        </div>
    )

}