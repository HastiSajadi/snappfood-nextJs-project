"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import dynamic from "next/dynamic"
import "../../globals.css"
import BreadCrums from "../BreadCrums"
import clsx from "clsx"
import Navbar from './components/navbar/Navbar';
import style from "./page.module.css"

import Content from './components/content/Content';
import { useSelector } from 'react-redux';
import Order from '@/app/order/page';
import axios from "axios"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar,faCircleInfo} from "@fortawesome/free-solid-svg-icons"
import SidebarRight from './components/sidebars/SidebarRight';
import { useParams } from 'next/navigation';



const Menu= ()=>{
 
  const {id} = useParams()
 
  
    const breadcrum = [
        {id:0, name: "اسنپ فود"},
        {id:1, name: "رستوران ها"},
        {id:1, name: "فست فود"}
    ]
const cartItems = useSelector(state => state.cart.cart)
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
    <div className="container-fluid mt-5">
        
        <div className={clsx("row text-center", style.main)}>
        <div className="col-lg-3 mt-3 mt-lg-0  d-lg-flex col-12">
              <div className="sidebar-item w-100">
                <div className={clsx("make-me-sticky" , style.sidebarPosition)} >
                <Order /> 
                </div>
              </div>
            </div>
            <div className="col-md-6  col-12">
                <div className="content-section">
                    <Content/>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 col-12 d-flex flex-column align-items-end">
              <div className={clsx("sidebar-item" , style.sidebarItem)}>
                <div className={clsx("make-me-sticky" , style.sidebarPosition)} >
                  <SidebarRight id={id}/>
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
export default dynamic(()=> Promise.resolve(Menu),{ssr : false})