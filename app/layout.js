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

        {children}======={children}
        </body>
    </html>
  )
}
  