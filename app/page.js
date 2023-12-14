

import 'bootstrap/dist/css/bootstrap.min.css';
import Bests from './components/Bests/Bests';
import FoodCategory from './components/food category/FoodCategory';
import FoodParty from './components/foodParty/FoodParty';
import Gifts from './components/Gifts/Gifts';
import NewsInSnapp from './components/NewsInSnapp/NewsInSnapp';
import Options from './components/Options/Options';
import SpecialTastes from './components/SpecialTastes/SpecialTastes';
import UsersSuggestion from './components/UsersSuggestion/UsersSuggestion';
import style from "./page.module.css"
import dynamic from "next/dynamic"

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
     </main>
    </>
  )
}

export default dynamic(()=> Promise.resolve(Home),{ssr : false})
 