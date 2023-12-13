import { selectedBurger } from "./randomFoods"



export const Burger =() => {


    return(
        <div>
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
        </div>
    )
}