import style from "./css/category.module.css"
import clsx from "clsx";
import { useEffect, useState } from "react";
import Api from "../../../api/categories/categories.json"
import getCategories from "@/requests/getCategories";




export default async function Category(){

    const categ = await getCategories();
    
    return(
        <>
         <div className="container-fluid bg-dark py-1 px-2 d-flex flex-nowrap">
           {
            Api.map( (index,{id,title,icon}) =>{
            return(
                <div key={id} className={clsx(style.categoryItems)}>
                <img className={clsx(style.categoryItemsImg , "mb-2")} src={icon} alt="foods" />
                <p className="m-0">{title}</p>
            </div>
            )

            })
           }
         </div>
        </>
    )
}