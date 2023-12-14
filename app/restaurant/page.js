import Link from "next/link"
import restaurant from "../../api/restaurants/restaurants.json"
import { Suspense } from "react"
import BreadCrums from "./BreadCrums"

export const metadata = {
    title: ' سفارش آنلاین غذا از تمامی رستوران ها  و فست فود ها',
    description: 'snapp food',
  }
export default function Restaurant(){
 


  
  
const breadcrum = [
    {id:0, name: "اسنپ فود"},
  {id:1, name: "رستوران ها"}
  
  
]

    return(
        <div>
           <select placeholder="به ترتیب پیش فرض">
           <option>به ترتیب پیش فرض</option>
            <option>بالاترین امتیاز </option>
            <option> نزدیک ترین </option>
            <option>جدید ترین </option>
            <option> ارزان ترین</option>
            <option> عملکرد کلی</option>
            <option> گرانترین </option>
            </select> 
            <BreadCrums >
            {
                breadcrum.map(bread=>
                    <li key={bread.id}>
                     <p>{bread.name}</p>
                    </li>
                    )
            }
            </BreadCrums>
            <div>

            <div>
            {
                restaurant.map(({id,img,icon,title,rate,author})=>{

                 

                    return(
                      <Suspense fallback={<div>
                        <h1>
                        Loading ...
                      </h1>
                      </div>}>
                         <Link href={`restaurant/${id}`}>
                        <div key={id}>
                            <img src={img} />
                            <img src={icon} />
                            <h1>{title}</h1>
                            <h3>{rate}</h3>
                            <p>{author}</p>
                        </div>
                       </Link>
                      </Suspense>
                    )
                })
            }
            </div>
           <div>
           <div>
                <ul>
                    <li>همه دسته‌بندی‌ها</li>
                    <Link href="/restaurant"><li>فست‌فود</li></Link>
                    <Link href="*"><li>ایرانی</li></Link>
                    <Link href="*"><li>کباب</li></Link>
                    <Link href="*"><li>سالاد</li></Link>
                    <Link href="*"><li>دریایی</li></Link>
                    <Link href="*"><li>بین الملل</li></Link>
                </ul>
            </div>

            <div>
            کلاس قیمتی 
            <div>
                <span>همه</span> <span>اقتصادی</span>  <span>متوسط</span> <span>گران</span>
            </div>
            </div>
            <div>
                <li>دارای کوپن</li>
                <li>دارای  تخفیف</li>
                <li>ارسال اکسپرس </li>
                <li>فودپرو</li>
                <li>رستوران‌های به‌صرفه</li>
                <li>خوش‌قیمت</li>
            </div>
           </div>
            </div>

          

        </div>
    )
}