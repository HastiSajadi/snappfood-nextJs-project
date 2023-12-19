import { selectedSteak } from "../randomFoods"
import style from "../components/content/css/content.module.css"


export const Steak =() => {


    return(
        <div className="mb-5">
        <h6 id="steak" className={style.title}>استیک</h6>
          <div className="d-flex flex-wrap justify-content-end w-100 ">
          {
            selectedSteak.map(({id,img,name,rate,des,price})=>{
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
                            <button className={style.foodBtn}>افزودن</button>
                            <h6 className="fw-bold fs-6">
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