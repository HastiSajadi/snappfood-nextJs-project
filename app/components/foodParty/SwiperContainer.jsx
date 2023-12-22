'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../node_modules/swiper/swiper.css';
import Foodparty from "../../../api/foodParty/foodParty.json"
import Api2 from "../../../api/foodParty/usersComment.json"
import clsx from "clsx"
import style from "./css/foodparty.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faStar,faClock,faChevronLeft} from "@fortawesome/free-solid-svg-icons"
import { Navigation, A11y } from 'swiper/modules';
import '../../../node_modules/swiper/modules/navigation.css';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addToCart } from '@/redux/cartSlice';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

export default function SwiperContainer(){

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispath = useDispatch();
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
            Foodparty.map(({id , title ,des , img , restaurant , deliveryPrice , price , deal , rate , count})=>{

              const handleAddToCart=(product) => {

                dispath(addToCart(product))

              }
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


                <Modal size="lg" show={show} onHide={handleClose}>
                  <div className={clsx('d-flex justify-content-between px-2 rounded-top-2',style.modalHead)} >
                    <h4 className="my-3 h6">
                        <FontAwesomeIcon className="me-2" icon={faClock} />
                        12 : 45 : 20
                    </h4>
                    <div className='d-flex align-items-center'>
                      <h5 className="">فود پارتی</h5>
                      <img className={style.sparkles} src="https://s6.uupload.ir/files/sparkles-svgrepo-com_uzt9.png" />
                    </div>
                  </div>
                  <Modal.Header closeButton></Modal.Header>
                  <Modal.Body>
                    <div className={clsx('container-fluid p-2', style.modalBody)} >
                      <div className={clsx(style.foodSec , 'row d-flex justify-content-end')} >
                        <div className='col-12 col-lg-7 d-flex flex-column mt-2 '>
                          <div className='d-flex mb-3 justify-content-between w-100'>
                            <div >
                              <span className=" px-1 border-opacity-10 border rounded-1">
                              {rate}<FontAwesomeIcon className="text-warning  ms-1" icon={faStar} />
                              </span>
                            </div> 
                            <h4 className={clsx("fw-bold")}>{title}</h4>
                          </div>
                          <p className='text-end text-black-50'>{des}</p>
                          <div className='d-flex w-100 justify-content-end align-items-end'>
                            <span className="text-secondary">عدد باقی مانده</span>
                            <p className='m-0 ms-1 h5 fw-bold'>{count} </p>
                          </div>
                          <div className='w-100 border border-2 border-secondary-subtle mt-3'></div>
                          <div className='d-flex w-100 my-3 justify-content-between'>
                          <button type='submit' className={style.modalSubmitBtn} onClick={() => handleAddToCart(product)} >افزودن </button>


                          
                          <div>
                            <div className="d-flex mt-2 align-items-center">
                              <div className='d-flex flex-column'>
                                <span className={style.dealText}>{price}</span>
                                <span className='fw-bold'>{price}</span>
                              </div>
                              <div><p className={clsx("badge p-2 ms-2 mb-2" , style.modalBadge)}>{deal}</p></div>
                              
                            </div>
                          </div>
                          </div>
                          <div className='d-flex justify-content-between mt-4'>
                            <a className='text-success fw-bold text-decoration-none'> <FontAwesomeIcon className='me-2' icon={faChevronLeft}/>{restaurant} </a>
                            <p className='h6'>ارسال اکسپرس</p>
                          </div>
                        </div>
                        <div className='col-12 col-lg-5 d-flex'>
                        <img className="w-100 rounded my-3" alt="food" src={img} />
                        </div>
                      </div>
                      {/* بخش نظرات کاربران */}
                      <div className={clsx('w-100 mt-5 d-flex flex-column align-items-end',style.commentSec)}>
                              <p className={clsx(style.commentSecTitle)}>نظرات کاربران</p>
                              {
                                Api2.map(({names,rate,text,id})=>{
                                  return(
                                    <div className='w-100' key={id}>
                                      <div className=' border-bottom border-black-50 p-2 d-flex align-items-center'>
                                        <div className='text-end w-100 me-5'>
                                          <p>{text}</p>
                                        </div>
                                        <div className='d-flex flex-column text-end'>
                                          <h4 className='fw-bold h5'>{names}</h4>
                                          <div className='d-flex justify-content-end my-2'>
                                            <p className='m-0'> ۱۴۰۲ </p>
                                            <span className='mx-1'>آذر</span>
                                            <p className='m-0'> ۱۷ </p>
                                          </div>
                                          <span className="mb-2">
                                            {rate}
                                            <FontAwesomeIcon className="text-warning ms-1" icon={faStar} />
                                          </span>
                                        </div>                                
                                      </div>
                                    </div>
                                  )
                                })
                              }
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
                </SwiperSlide>
                )
            })
        }
      </Swiper>
    );
  };