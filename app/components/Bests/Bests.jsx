import clsx from "clsx"
import style from "../restaurantsCard.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faChevronLeft,faStar} from "@fortawesome/free-solid-svg-icons"
import restaurant from "../../../api/restaurants/restaurants.json"
// import Something from "./restaurantCarousel"

export default function Bests(){


   
    return(
        <>
        <div className={clsx("container-fluid d-flex flex-column align-items-end my-5 ", style.container)}>
          <div className="d-flex justify-content-between px-4 w-100">
          <a className='text-success fw-bold h5 text-decoration-none'> <FontAwesomeIcon className='me-2' icon={faChevronLeft}/>مشاهده همه</a>
          <h3 className="fw-bold text-dark-emphasis">بهترین ها</h3>
          </div>
          <div className={clsx("d-flex overflow-x-scroll p-1 mt-3", style.restsMain)}>
          {
            restaurant.map(({id,img,icon,title,rate})=>{
                return(
                    <div key={id} className={clsx(style.restCard , "m-2")}>
                      <div className={style.restBackgroundContainer}>
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
                    </div>
                )
            })
          }
          </div>
          
        </div>
        {/* <Something/> */}
        </>
    )
}