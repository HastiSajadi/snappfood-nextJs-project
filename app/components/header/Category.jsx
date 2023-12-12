'use client'

import style from "./css/category.module.css"
import clsx from "clsx";
import Api from "../../../api/categories/categories.json"
import Link from "next/link";

export default  function Category(){
    return(
        <>
         <div className={clsx("container-fluid py-1 border-bottom px-2 d-flex flex-row-reverse justify-content-between flex-nowrap" , style.categoryContainer)}>
           {
            Api.map( ({id,title,icon}) =>{
            return(
                <Link href={'./restaurant'}  key={id} >
                <div  className={clsx(style.categoryItems)}>
               <img className={clsx(style.categoryItemsImg , "mb-2")} src={icon} alt="foods" />
                <p className="m-0">{title}   </p>
            </div>
            </Link>
            )
            })
           }
         </div>
        </>
    )
}