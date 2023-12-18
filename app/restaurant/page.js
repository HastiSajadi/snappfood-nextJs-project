import Link from "next/link"
import restaurant from "../../api/restaurants/restaurants.json"
import { Suspense } from "react"
import BreadCrums from "./BreadCrums"
import Sort from "./components/Sort/Sort"
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./page.module.css"
import clsx from "clsx"
import "../globals.css"

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
        <>
        <main className={style.main}>
            <BreadCrums>
            {
                breadcrum.map(bread=>
                    <li className={style.breadItem} key={bread.id}>
                     <p className={clsx("m-0 " , style.breadFontsize)}>{bread.name}</p>
                    </li>
                )
            }
            </BreadCrums>
            <Sort/>
        </main>
        </>
    )
}