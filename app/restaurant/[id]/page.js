"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Burger,Pizza , HotDog, Steak,Appetizer,Drinks} from "./index";
import "../../globals.css"
import BreadCrums from "../BreadCrums"
import clsx from "clsx"
import Navbar from './components/navbar/Navbar';
import style from "./page.module.css"

export default   function Menu(){
   
    return(
        <div>
          <Navbar/>
        </div>
    )

}   
