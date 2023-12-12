import Link from "next/link"
import restaurant from "../../api/restaurants/restaurants.json"


export default function Restaurant(){



    return(
        <div>
            {
                restaurant.map(({id,img,icon,title,rate,author})=>{
                    return(
                       <Link href={'/:id'}>
                        <div key={id}>
                            <img src={img} />
                            <img src={icon} />
                            <h1>{title}</h1>
                            <h3>{rate}</h3>
                            <p>{author}</p>
                        </div>
                       </Link>
                    )
                })
            }
        </div>
    )
}