'use client'

import './globals.css'
import Header from './components/header/Header'
import { usePathname } from 'next/navigation';




export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html>
      <body>
        {pathname === "/"  && <Header/>}
        {pathname === "/restaurant" && <Header/>}
<<<<<<< HEAD
        {children}
        
=======

        {children}
>>>>>>> cafa8d1fc10ee7a0da057ee3135d49f3c432ae8a
        </body>
    </html>
  )
}
  