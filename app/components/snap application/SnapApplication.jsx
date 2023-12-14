'use client'
import { useState } from "react"



export const SnapApplication = () => {
    const[number, setNumber] = useState('');

    const handleValue = (e) => {
        setNumber(e.target.value)
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()
        if(!number.trim()){
            alert("please enter your phone")
        }setNumber(e.target.value)
    }
    return(
       
        <div>
       <div>
      <div>
      <h1>
        اپلیکیشن اسنپ‌فود
        </h1>
        <p>
        با اپلیکیشن اسنپ‌فود به راحتی و با چند کلیک ساده می‌توانید رستوران‌ها، کافه‌ها، شیرینی‌فروشی‌ها و سوپرمارکت‌های نزدیک خودتان را جست‌و‌جو کرده و از تجربه سفارش آسان از اسنپ‌فود لذت ببرید.
        </p>
      </div>
      <div>
       <form onSubmit={handleSubmitForm}>
       <label> برای دریافت لینک دانلود اپلیکیشن، شماره موبایلتان رو وارد کنید </label>
        <input onChange={handleValue} placeholder="09*********"/  > <button type="submit">دریافت کد</button>
       </form>
       <div>
        <a href="https://cafebazaar.ir/app/com.zoodfood.android/" target="_blank" ><img src="https://cdn.developers.cafebazaar.ir/2021/05/bazaar-badge2.png" /></a>
        <a href="https://myket.ir/app/com.zoodfood.android" target="_blank" ><img src="https://myket.ir/core/images/logo/get1-fa.png" /></a>
        <a href="https://sibapp.com/applications/zoodfood-1" target="_blank" ><img src="https://sibapp.com/static/media/image_sibapp_black_badge.051e9542f3e292ba4d78.png" /></a>
        <a href="https://iapps.ir/app/%D8%A7%D8%B3%D9%86%D9%BE-%D9%81%D9%88%D8%AF-snappfood/312476215" target="_blank" ><img src="https://snappfood.ir/static/images/iapps.svg" /></a>
       </div>
      </div>
       </div>
       <div>
        <img src="https://snappfood.ir/static/images/img_app_mockup@2x.png"/>
       </div>
        </div>
    )
}