

'use client'

/* import piz from "../../../api/foods/pizzas.json"
 */

import {  selectedPizzas,selectedBurger, selectedDrink,selectedHotdogs,selectedSalads, selectedSteak } from "./randomFoods"
import 'bootstrap/dist/css/bootstrap.min.css';
export default   function restaurantsDetail(){

 
    return(
        <div>
            <div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example">

            <h6 id="pizza">پیتزا</h6>
           {
            selectedPizzas.map(({id,img,name,rate,des,price})=>{
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
           <h6 id="burger">برگر</h6>
           {
            selectedBurger.map(({id,img,name,rate,des,price})=>{
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
           <h6 id="hotdog">هات داگ</h6>
           {
            selectedHotdogs.map(({id,img,name,rate,des,price})=>{
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
           <h6 id="steak">استیک</h6>
           {
            selectedSteak.map(({id,img,name,rate,des,price})=>{
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
           <h6 id="salads">سالاد و پیش غذا</h6>
           {
            selectedSalads.map(({id,img,name,rate,des,price})=>{
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
            <h6 id="drinks">نوشیدنی</h6>
           {
            selectedDrink.map(({id,img,name,rate,des,price})=>{
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

           <div id="list-example" class="list-group">
  <a class="list-group-item list-group-item-action" href="#pizza"> پیتزا
</a>
  <a class="list-group-item list-group-item-action" href="#burger">برگر</a>
  <a class="list-group-item list-group-item-action" href="#hotdog">هات داگ</a>
  <a class="list-group-item list-group-item-action" href="#steak">استیک</a>
  <a class="list-group-item list-group-item-action" href="#salads">سالاد و پیش غذا</a>
  <a class="list-group-item list-group-item-action" href="#drinks"> نوشیدنی</a>
</div>

        </div>
    )

}   
