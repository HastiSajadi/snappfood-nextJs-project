import 'bootstrap/dist/css/bootstrap.min.css';
import FoodCategory from './components/food category/FoodCategory';
import FoodParty from './components/foodParty/FoodParty';
import style from "./page.module.css"


export default function Home() {
  return (
    <>
     <main className={style.main}>
     <FoodCategory/>
     <FoodParty/>
     </main>
    </>
  )
}
 