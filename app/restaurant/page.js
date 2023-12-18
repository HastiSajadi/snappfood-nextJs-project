import Link from "next/link"
import restaurant from "../../api/restaurants/restaurants.json"
import { Suspense } from "react"
import BreadCrums from "./BreadCrums"
import Sort from "./components/Sort/Sort"
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./page.module.css"
import clsx from "clsx"
import "../globals.css"
import { Restaurants } from "./components/restaurants/Restaurant"
import Sidebar from "./components/sidebar/Sidebar"
import PriceClass from "./components/price class/PriceClass"
import Options from "./components/options/Options"


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

            <div className="container-fluid p-0 mt-5">
                <div className="row">
                    <div className="col-lg-9 col-md-7 col-12 p-0">
                        <Restaurants/>
                    </div>
                    <div className="col-lg-3 col-md-5 col-12 p-0">
                        <Sidebar/>
                        <PriceClass/>
                        <Options/>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}