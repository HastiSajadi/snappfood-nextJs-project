import { selectedHotdogs } from "./randomFoods"


export const HotDog =() => {


    return(
        <div>
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
        </div>
    )
}