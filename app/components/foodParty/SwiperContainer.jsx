import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../node_modules/swiper/swiper.css';
import Api from "../../../api/foodParty/foodParty.json"
import clsx from "clsx"
import style from "./css/foodparty.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faStar} from "@fortawesome/free-solid-svg-icons"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import '../../../node_modules/swiper/modules/navigation.css';



export default function SwiperContainer(){
    return (
      <Swiper
        modules={[Navigation, A11y]}
        navigation
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        rtl={true}
      >
        {
            Api.map(({id , title , img , restaurant , deliveryPrice , price , deal , rate , count})=>{
                return(
                    <SwiperSlide >
                    <div key={id} className={clsx("bg-white text-dark rounded-4 d-flex flex-column  p-5 align-items-center " , style.cards)}>
                    <p className={clsx("m-0" , style.cardInfo)}>{restaurant}</p>
                    <p className={clsx("m-0" , style.cardInfo)}>پیک فروشنده {deliveryPrice}</p>
                    <img className="w-50 rounded my-4" alt="food" src={img} />
                    <h4 className={clsx("h5 mb-5" , style.cardFoodTitle)}>{title}</h4>
                    <div className="w-100 d-flex justify-content-between">
                        <div>
                            <div className="d-flex">
                            <p className="badge bg-danger me-2 mb-2">{deal}</p>
                            <span className={style.dealText}>{price}</span>
                            </div>
                            <div>
                                <span className='fw-bold'>{price}</span>
                            </div>
                        </div>
                        <div className="d-flex flex-column align-items-end">
                        <div >
                            <span className="mb-2">
                            <FontAwesomeIcon className="text-warning me-1" icon={faStar} />
                            {rate}
                            </span>
                        </div>
                        <div>
                            <span className='text-end'>عدد </span>
                            {count}
                        </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                )
            })
        }
      </Swiper>
    );
  };