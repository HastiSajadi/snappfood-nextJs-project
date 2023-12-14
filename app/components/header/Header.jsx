

import Category from "./Category"
import Navbar from "./Navbar"

export default function Header(){
    return(
        <div className="fixed-top bg-white">
        <Navbar/>
        <Category/>
        </div>
    )
}