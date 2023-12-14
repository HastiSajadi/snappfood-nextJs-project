
import restaurant from "../../api/restaurants/restaurants.json"
import clsx from "clsx"
import style from "./restaurantsCard.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faChevronLeft,faStar} from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"



export const  RestaurantsComponents =() => {



    return(

      <div className={clsx("d-flex overflow-x-scroll p-1 mt-3", style.restsMain)}>
          {
            restaurant.map(({id,img,icon,title,rate})=>{
                return(
                    <div key={id} className={clsx(style.restCard , "m-2 ")}>
                      <Link className="text-decoration-none text-dark"  href={`restaurant/${id}`} >
                      <div className={clsx(style.restBackgroundContainer)}>
                        <img className={style.restBackground} src={img} />
                      </div>
                      <div className="d-flex flex-column align-items-center">
                        <img className={clsx(style.restLogoImg)} src={icon} />
                        <h3 className={style.restName}>{title}</h3>

                        <div>
                        <span className="mb-2 fw-bold">
                          {rate}
                          <FontAwesomeIcon className="text-warning me-1" icon={faStar} />
                          </span>
                        </div>
                      <p className="text-secondary">category</p>
                      <div className={clsx("d-flex",style.deliveryContainer)}>
                      ۱۰.۰۰۰
                        <p className="m-0 mx-2 "> ارسال اکسپرس</p>
                        <img className={clsx(style.helmet)} src="https://i.ibb.co/98yt2n5/f1-helmet-svgrepo-com.png" />
                      </div>
                      </div>
                      </Link>
                    </div>
                )
            })
          }
          </div>
    )
}