'use client'

import snapImage from "./snappfood_logo.png"
import Image from 'next/image'
import { useRouter } from "next/navigation" 
import { useState } from "react";


export default function Login(){
    const router = useRouter();  
   const[number, setNumber] = useState('')

    async function formSubmit (event)  {
        event.preventDefault();
        
       
    }
    const handleInput = (e) => {
        
        const num = String(e.target.number);
        setNumber(num)
       console.log(number);
    }
    
    return(
        <div>
            <div>
                <Image src={snapImage}  />
                <button onClick={()=> router.push('/') } >⨉</button>
            </div>
            <form onChange={formSubmit}>
            <label>شماره تلفن‌همراه</label>
            <input type="number"  onChange={handleInput}   />
            <label>شماره با ۰۹ شروع می‌شود</label>
            <button type="submit"> "ادامه"  </button>
            </form>
        </div>
    )
}    