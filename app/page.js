import 'bootstrap/dist/css/bootstrap.min.css';
import FoodCategory from './components/food category/FoodCategory';
import FoodParty from './components/foodParty/FoodParty';
import "./page.module.css"


export default function Home() {
  return (
    <>
     <FoodCategory/>
     <FoodParty/>
    </>
  )
}
 