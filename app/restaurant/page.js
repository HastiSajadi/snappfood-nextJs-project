import Link from "next/link"
import restaurant from "../../api/restaurants/restaurants.json"
import { Suspense } from "react"
import BreadCrums from "./BreadCrums"
export default function Restaurant(){
 
   

   
const breadcrum = [
  {id:0, name: "رستوران ها"},
  
  
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

            <BreadCrums >
            {
                breadcrum.map(bread=>
                    <li key={bread.id}>
                     <p>{bread.name}</p>
                    </li>
                    )
            }
            </BreadCrums>

        </div>
    )
}