

import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./page.module.css"
import dynamic from "next/dynamic"
import { Bests, FoodCategory, FoodParty,Gifts,NewsInSnapp,Options ,SpecialTastes,UsersSuggestion,SnapApplication } from './components'
export const metadata = {
  title: 'اسنپ فود | سفارش آنلاین غذا از تمامی رستوران ها  و فست فود ها',
  description: 'snapp food',
}

const Home = ()=> {
  
  return (
    <>
     <main className={style.main}>
     <FoodCategory/>
     <FoodParty/>
     <UsersSuggestion/>
     <NewsInSnapp/>
     <Bests/>
     <Gifts/>
     <SpecialTastes/>
     <Options/>
     <SnapApplication />
     </main>
    </>
  )
}

export default dynamic(()=> Promise.resolve(Home),{ssr : false})
 