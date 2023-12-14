import 'bootstrap/dist/css/bootstrap.min.css';
import FoodCategory from './components/food category/FoodCategory';
import FoodParty from './components/foodParty/FoodParty';
import style from "./page.module.css"

export const metadata = {
  title: 'اسنپ فود | سفارش آنلاین غذا از تمامی رستوران ها  و فست فود ها',
  description: 'snapp food',
}

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
 