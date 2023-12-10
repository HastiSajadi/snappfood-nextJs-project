import clsx from "clsx"
import style from "./css/foodparty.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faChevronLeft , faClock,faStar} from "@fortawesome/free-solid-svg-icons"

export default function FoodParty(){
    return(
        <div className="container-fluid mt-5">
            <div className={clsx("container flex-row-reverse d-flex justify-content-start text-white p-4" , style.partyContainer)}>
                <div className={clsx(style.partyDetail , "d-flex flex-column justify-content-center align-items-center")}>
                    <h4 className="my-5">
                    <FontAwesomeIcon className="me-2" icon={faClock} />
                        12 : 45 : 20</h4>
                    <img className={clsx(style.partyImg)} src="https://cdn.snappfood.ir/uploads/images/review-app/icons/count/jek/1_jek_non_active.png" />
                    <div className="d-flex justify-content-end align-items-center mb-3">
                     <h1 className="mt-4">فود پارتی</h1>
                     <img className={style.sparkles} src="https://s6.uupload.ir/files/sparkles-svgrepo-com_uzt9.png" />
                    </div>
                    <p>تخفیفات لحظه‌ای ویژه شما</p>
                    <button className={clsx(style.partyBtn , "mb-4")}>
                    <FontAwesomeIcon className={clsx(style.iconPink)} icon={faChevronLeft} />
                        مشاهده همه
                    </button>
                </div>
                <div className={clsx(style.cards,"bg-white text-dark col-3 rounded d-flex flex-column p-5 align-items-center justify-content-between")}>
                    <p>رستوران</p>
                    <p>پیک فروشنده 10000</p>
                    <img className="w-50 rounded" alt="food" src="https://cdn.snappfood.ir/641x641/cdn/31/59/0/vendor/5cae3c43d1a4f.jpg"/>
                    <h4>اسم غذا</h4>
                    <div className="w-100 d-flex justify-content-between">
                        <div>
                            <div className="d-flex">
                            <p className="badge bg-danger mmb-2">20%</p>
                            <span>150000</span>
                            </div>
                            <div>
                                <span>250000</span>
                            </div>
                        </div>
                        <div>
                        <div className="d-flex justify-content-end">
                            <span className="mb-2">
                            <FontAwesomeIcon className="text-warning me-2" icon={faStar} />
                            4.1
                            </span>
                        </div>
                        <div >
                            <span>7 عدد باقی مانده</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}