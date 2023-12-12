import Link from "next/link"
import restaurant from "../../api/restaurants/restaurants.json"
import { Suspense } from "react"
export default function Restaurant(){



    return(
        <div>
  
            {
                restaurant.map(({id,img,icon,title,rate,author})=>{
                    return(
                      <Suspense fallback={<h1>
                        Loading ...
                      </h1>}>
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
    )
}