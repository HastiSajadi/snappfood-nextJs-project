import { Children } from "react"
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function BreadCrums({children}){
const back = <FontAwesomeIcon  icon={"arrow-left"}/>
    const childArray = Children.toArray(children)

    return(
        <div>
            {
                children.map((childArray,(child, index)=>{
                    const isLastItem = index === childArray.length-1;


                    return(
                        <div>
                            {child}
                            {!isLastItem && <span class="material-icons "><FontAwesomeIcon icon={faChevronLeft}/></span>}
                       </div>
                    )
                }))
                            }
                          
                         
        </div>
    )
}