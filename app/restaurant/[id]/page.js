"use client"

import 'bootstrap/dist/css/bootstrap.min.css';

import "../../globals.css"
import BreadCrums from "../BreadCrums"
import clsx from "clsx"
import Navbar from './components/navbar/Navbar';
import style from "./page.module.css"
import SidebarRight from './components/sidebars/SidebarRight';
import Content from './components/content/Content';

export default   function Menu(){
   
    const breadcrum = [
        {id:0, name: "اسنپ فود"},
        {id:1, name: "رستوران ها"},
        {id:1, name: "فست فود"}
    ]

    return(
        <div>
          <Navbar/>

          <main className={style.main} >
          <BreadCrums>
            {
              breadcrum.map(bread=>
                <li className={style.breadItem} key={bread.id}>
                  <p className={clsx("m-0 " , style.breadFontsize)}>{bread.name}</p>
                </li>
              )
            }
          </BreadCrums>
          <article>
    <div class="container-fluid mt-5">
        
        <div className={clsx("row text-center", style.main)}>
        <div class="col-lg-3 d-none d-lg-flex col-12">
              <div class="sidebar-item">
                <div className={clsx("make-me-sticky" , style.sidebarPosition)} >
                  <h3>Item 1</h3>
                  {/*  {
//             restaurant.map(({id, img, rate})=>{
//                 const array = [id]

//                 const found = array.find((id)=> id === 2)

//                 console.log(found);
               
//             })
//           } */}
                </div>
              </div>
            </div>
            <div className="col-md-6  col-12">
                <div class="content-section">
                    <Content/>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 col-12 d-flex flex-column align-items-end">
              <div className={clsx("sidebar-item" , style.sidebarItem)}>
                <div className={clsx("make-me-sticky" , style.sidebarPosition)} >
                  <SidebarRight/>
                </div>
              </div>
            </div>
        </div>
    </div>
</article>
          </main>
        </div>
    )

}   
