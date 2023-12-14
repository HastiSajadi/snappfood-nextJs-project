import clsx from "clsx"
import style from "../restaurantsCard.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faChevronLeft,faStar} from "@fortawesome/free-solid-svg-icons"
import restaurant from "../../../api/restaurants/restaurants.json"
import { RestaurantsComponents } from "../RestaurantsComponents"
// import Something from "./restaurantCarousel"

export default function SpecialTastes(){


   
    return(
        <>
        <div className={clsx("container-fluid d-flex flex-column align-items-end my-5 ", style.container)}>
          <div className="d-flex justify-content-between px-4 w-100">
          <a className='text-success fw-bold h5 text-decoration-none'> <FontAwesomeIcon className='me-2' icon={faChevronLeft}/>مشاهده همه</a>
          <h3 className="fw-bold text-dark-emphasis">مزه های خاص</h3>
          </div>
         <RestaurantsComponents />
          
        </div>
        {/* <Something/> */}
        </>
    )
}