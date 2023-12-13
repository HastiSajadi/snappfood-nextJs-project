import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../node_modules/swiper/swiper.css';
import Api from "../../../api/foodParty/foodParty.json"
import clsx from "clsx"
import style from "./css/foodparty.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faStar} from "@fortawesome/free-solid-svg-icons"
import { Navigation, A11y } from 'swiper/modules';
import '../../../node_modules/swiper/modules/navigation.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function SwiperContainer(){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
      <Swiper
      breakpoints={{
        480: {
          width: 480,
          slidesPerView: 1,
        },
        // when window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 3,
        },
        1024: {
          width: 970,
          slidesPerView: 3,
        },
      }}
        modules={[Navigation, A11y]}
        navigation
        spaceBetween={-10}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
            Api.map(({id , title , img , restaurant , deliveryPrice , price , deal , rate , count})=>{
                return(
                    <SwiperSlide >
                    <div key={id} onClick={handleShow} className={clsx("bg-white  text-dark rounded-4 d-flex flex-column  p-5 align-items-center " , style.cards)}>
                    <p className={clsx("m-0" , style.cardInfo)}>{restaurant}</p>
                    <p className={clsx("m-0" , style.cardInfo)}>پیک فروشنده {deliveryPrice}</p>
                    <img className="w-75 rounded my-3" alt="food" src={img} />
                    <h4 className={clsx("h5 mb-5" , style.cardFoodTitle)}>{title}</h4>
                    <div className="w-100 d-flex justify-content-between">
                        <div>
                            <div className="d-flex">
                            <p className={clsx("badge me-2 mb-2" , style.badge)}>{deal}</p>
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
                        <div className='d-flex align-items-end'>
                          <span className={style.countText}>عدد باقی مانده</span>
                          <p className='m-0 ms-1 fw-bold'>{count} </p>
                        </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                )
            })
        }
        <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><img className={clsx(style.logoImg)} src="https://i.ibb.co/FhQJQDd/snappfood-logo.png"/></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={clsx("d-flex flex-column p-3  align-items-end" , style.modalBody)}>
          <p className="h5">
            <span className="h3">ورود</span>
            <span className="mx-2">یا</span>
            <span className="h3">عضویت</span>
          </p>

          <p className="mb-2 mt-4 text-secondary">شماره تلفن همراه</p>
          <input className={style.numberInput} type="text" />
          <p className="mb-2 mt-2 text-secondary">شماره با ۰۹ شروع می‌شود</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className={clsx("disabled border-0 w-100 p-3 text-dark fw-bold" , style.submitBtn)} onClick={handleClose}>
            ادامه 
          </Button>
        </Modal.Footer>
      </Modal>
      </Swiper>
      
    );
  };