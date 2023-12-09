import style from "./css/foodcategory.module.css"
import clsx from "clsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons"
import Api from "../../../api/food-category/foodCategory.json"

export default function FoodCategory(){
    return(
        <>
        <div className={clsx("d-flex  align-items-end container-fluid" , style.container)}>
            <h5 className={clsx(style.title)}>دسته بندی ها</h5>
            <div className={clsx(style.foodContainer , "mt-lg-5 flex-row-reverse ")}>
                {
                    Api.map(({id,title,img})=>{
                        return(
                            <div key={id} className={clsx(style.foodCart ,"d-flex justify-content-center align-items-center my-lg-4")}>
                                <img className={clsx(style.foodImg)} src={img} alt={title} />
                                <div className={clsx(style.foodTitle)}>
                                  <FontAwesomeIcon className={clsx(style.foodTitleIcon)} icon={faChevronLeft} />
                                  <a > {title}</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}