
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser ,faMagnifyingGlass,faLocationCrosshairs,faChevronDown,faStore} from "@fortawesome/free-solid-svg-icons"
import style from "./css/navbar.module.css"
import clsx from "clsx"
import MediaQuery from 'react-responsive'
import LoginModalDesktop from "../loginModal/LoginModalDesktop";
import LoginModalMobile from "../loginModal/LoginModalMobile";



export default function Navbar(){
    return(
        <header className={style.container}>

            {/* //desktop features */}
            <MediaQuery minWidth={1024}>
            <div>
                <LoginModalDesktop/>
                <a className={clsx("btn p-2 link-dark")}>
                        ثبت نام فروشندگان
                        <FontAwesomeIcon className={clsx(style.icons ,"ms-2")} icon={faStore} />
                </a>
            </div>
            <form className={clsx(style.inputContainer)}>
                <input type="search" className={clsx( style.searchInput)} placeholder="جست و جو در اسنپ فود" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" className={clsx("btn")} data-mdb-ripple-init>
                <FontAwesomeIcon className={clsx(style.icons, style.elementGray )} icon={faMagnifyingGlass} />
                </button>
            </form>
            </MediaQuery>
            {/* //end of desktop features    */}

            {/* //mobile features */}
            <MediaQuery maxWidth={1023}> 
                <div>
                    <LoginModalMobile/>
                    <FontAwesomeIcon className={clsx(style.icons, style.elementGray , "ms-4")} icon={faMagnifyingGlass} />
                </div>
            </MediaQuery>       
            {/* //end of mobile features     */}
                
            <div className={clsx("d-flex align-items-center")}>
                <div className={clsx("mx-3 text-end" , style.lineHeight)}>
                    <h5 className={clsx("m-0 fw-bold h6")}>آدرس انتخابی</h5>
                    <div className="d-flex align-items-center">
                    <FontAwesomeIcon className={clsx(style.icons,style.elementGray,style.iconTiny, style.colorPink,"mx-4 ")} icon={faChevronDown} />
                    <p className={clsx("m-0 ",style.textTiny , style.elementGray)}> ...تهران، کشاورز، پارک لاله، </p>
                    
                    </div>
                </div>
                <FontAwesomeIcon className={clsx(style.icons , style.elementGray)} icon={faLocationCrosshairs} />
                <div>
                    <img className={clsx(style.logoImg)} src="https://i.ibb.co/FhQJQDd/snappfood-logo.png"/>
                </div>
            </div>
        </header>
    )
}