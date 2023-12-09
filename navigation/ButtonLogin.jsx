'use client'


import { useRouter } from "next/navigation" 

export default function ButtonLogin({children}){
    const routerbutton = useRouter();  
    return(
        <button onClick={() => routerbutton.push('/login')} > {children} </button>
    )

}