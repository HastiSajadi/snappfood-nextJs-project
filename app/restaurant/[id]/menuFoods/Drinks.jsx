import { selectedDrink } from "../randomFoods"
import style from "../components/content/css/content.module.css"
import { Order } from "../components/content/addToOreder/Order"

export const Drinks =() => {


    return(
        <div>
       <h6  id="drinks" className={style.title}>نوشیدنی</h6>
           <div className="d-flex flex-wrap justify-content-center w-100 ">
           {
            selectedDrink.map(({id,img,name,rate,des,price})=>{
            return(
                <div key={id} className={style.foodCart}>
                <div className="d-flex">
                    <img className={style.foodImg} src={img} />
                    <div className="d-flex text-end flex-column">
                      <h6 className="fw-bold">{name}</h6>
                      <p className={style.foodDes}>{des}</p>
                    </div>
                </div>
                <div className="d-flex w-100 justify-content-between align-items-center">
                <Order  
                           name={name}
                           price={price}
                           id={id}
                            />                    <h6 className="fw-bold fs-6">
                        {price}
                    </h6>
                </div>
            </div>
            )

            })
           }
           </div>
        </div>
    )
}