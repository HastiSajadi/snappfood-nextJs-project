import style from "./css/priceclass.module.css"

export default function PriceClass(){
    return(
        <>
        <div className={style.main}>
            <div className="w-100">
                <p className={style.priceTitle}> کلاس قیمتی </p>
            <div className={style.priceItems}>
                <div className={style.selectItem}>
                <span  >همه</span>
                </div> 
                <div>
                <span className="ms-4">اقتصادی</span>    
                </div> 
                <div>
                <span className="ms-4">متوسط</span>
                </div>
                <div>
                <span className="ms-4">گران</span>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}