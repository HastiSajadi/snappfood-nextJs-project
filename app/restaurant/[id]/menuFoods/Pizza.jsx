import { selectedPizzas } from "../randomFoods"



export const Pizza =() => {


    return(
        <div>
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
        </div>
    )
}