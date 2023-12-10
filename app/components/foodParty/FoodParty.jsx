import clsx from "clsx"
import style from "./css/foodparty.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faChevronLeft , faClock} from "@fortawesome/free-solid-svg-icons"

export default function FoodParty(){
    return(
        <div className="container-fluid mt-5">
            <div className={clsx("container d-flex justify-content-end text-white p-4" , style.partyContainer)}>
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
            </div>
        </div>
    )
}