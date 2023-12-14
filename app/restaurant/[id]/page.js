



import 'bootstrap/dist/css/bootstrap.min.css';
import { Burger,Pizza , HotDog, Steak,Appetizer,Drinks} from "./index";
import restaurant from "../../../api/restaurants/restaurants.json";


export default   function Menu(){
   
  
  
    return(
        <div>
           
             <div id="list-example" class="list-group">
     <a class="list-group-item list-group-item-action" href="#pizza"> پیتزا</a>
     <a class="list-group-item list-group-item-action" href="#burger">برگر</a>
     <a class="list-group-item list-group-item-action" href="#hotdog">هات داگ</a>
     <a class="list-group-item list-group-item-action" href="#steak">استیک</a>
     <a class="list-group-item list-group-item-action" href="#salads">سالاد و پیش غذا</a>
     <a class="list-group-item list-group-item-action" href="#drinks"> نوشیدنی</a>
   </div>
            <div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example">
            <Pizza  />
            <Burger  />
            <HotDog  />
            <Steak  />
            <Appetizer  />
            <Drinks />
           </div>

          
         {/*  {
            restaurant.map(({id, img, rate})=>{
                const array = [id]

                const found = array.find((id)=> id === 2)

                console.log(found);
               
            })
          } */}
        </div>
    )

}   
