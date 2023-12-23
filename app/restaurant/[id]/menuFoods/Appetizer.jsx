import style from "../components/content/css/content.module.css"
import { Order } from "../components/content/addToOreder/Order"
import { useEffect, useState } from 'react';
import axios from "axios"
import FoodModalAppetizer from "../components/foodModal/FoodModalAppetizer"



export const Appetizer =() => {

    const [data , setData] = useState(null)
    const [modalState , setModalState] = useState({
      show : false,
      itemId : 0,
    })
    useEffect(()=>{
      const getData = async ()=>{
          let data = await axios.get("http://localhost:3002/salads_fries");
          console.log(data.data)
          setData(data.data)
      }
      getData()
    },[])
    return(
        <div className="mb-5"> 
      <h6 id="salads" className={style.title}>سالاد و پیش غذا</h6>
           <div className="d-flex flex-wrap justify-content-end w-100 ">
           {
            selectedSalads.map(({id,img,name,rate,des,price})=>{
            return(
                <div key={id} className={style.foodCart}>
                        <div className="d-flex">
                            <img className={style.foodImg} src={img} />
                            <div className="d-flex text-end flex-column">
                              <h6 className="fw-bold">{name}</h6>
                              <p className={style.foodDes}>{des}</p>
                            </div>
                        </div>
                        <div className="d-flex w-100 justify-content-between align-items-center">
                        <Order  
                           name={name}
                           price={price}
                           id={id}
                            />                          
                              <h6 className="fw-bold fs-6">
                                {price}
                            </h6>
                        </div>
                    </div>
            )

            })
           { data?.map(({id,img,name,rate,des,price})=>{
                return(
               <>
               {modalState.show &&  <FoodModalAppetizer itemId={modalState.itemId} show={modalState.show} setModalState={setModalState} />}
                <div key={id} onClick={()=>{setModalState((state)=>({...state , show:true , itemId:id}))}}  className={style.foodCart}>
                         <div className="d-flex">
                             <img className={style.foodImg} src={img} />
                             <div className="d-flex text-end flex-column">
                               <h6 className="fw-bold">{name}</h6>
                               <p className={style.foodDes}>{des}</p>
                             </div>
                         </div>
                         <div className="d-flex w-100 justify-content-between align-items-center">
                             <button className={style.foodBtn}>افزودن</button>
                             <h6 className="fw-bold fs-6">
                                 {price}
                             </h6>
                         </div>
                     </div>
                     </>
                 )})
           }
           </div>
        </div>
    )
}