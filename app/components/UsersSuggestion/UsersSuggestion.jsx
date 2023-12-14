import clsx from "clsx"
import style from "../restaurantsCard.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faChevronLeft,faStar} from "@fortawesome/free-solid-svg-icons"
import restaurant from "../../../api/restaurants/restaurants.json"
import { RestaurantsComponents } from "../RestaurantsComponents"
import Link from "next/link"
// import Something from "./restaurantCarousel"

export default function UsersSuggestion(){


   
    return(
        <>
        <div className={clsx("container-fluid d-flex flex-column align-items-end my-5 ", style.container)}>
          <div className="d-flex justify-content-between px-4 w-100">
          <Link href="/restaurant"  className='text-success fw-bold h5 text-decoration-none'> <FontAwesomeIcon className='me-2' icon={faChevronLeft}/>مشاهده همه</Link>
          <h3 className="fw-bold text-dark-emphasis">پیشنهاد کاربران</h3>
          </div>
         
         <RestaurantsComponents />
          
        </div>
        {/* <Something/> */}
        </>
    )
}