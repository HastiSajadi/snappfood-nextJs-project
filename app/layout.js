'use client'

import './globals.css'
import Header from './components/header/Header'
import { usePathname } from 'next/navigation';
import Footer from './components/footer/Footer';




export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html>
      <body>
        {pathname === "/"  && <Header/>}
        {pathname === "/restaurant" && <Header/>}

        {children}
        <Footer/>
        </body>
    </html>
  )
}
  