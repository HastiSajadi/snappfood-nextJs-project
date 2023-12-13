import { Children } from "react"


export default function BreadCrums({children}){

    const childArray = Children.toArray(children)

    return(
        <div>
            {
                children.map((childArray,(child, index)=>{
                    const isLastItem = index === childArray.length-1;


                    return(
                        <div>
                            {child}
                            {!isLastItem && <span> / </span>}
                       </div>
                    )
                }))
            }
        </div>
    )
}