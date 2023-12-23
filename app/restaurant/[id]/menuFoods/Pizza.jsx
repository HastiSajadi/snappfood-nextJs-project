'use client'
import style from "../components/content/css/content.module.css"
import { useEffect, useState } from 'react';
import axios from "axios"
import FoodModalPizza from "../components/foodModal/FoodModalPizza"
import { useDispatch } from "react-redux"
import { addToCart } from "@/redux/cartSlice"

export const Pizza =() => {

    const [data , setData] = useState(null)
  const [modalState , setModalState] = useState({
    show : false,
    itemId : 0,
  })
  useEffect(()=>{
    const getData = async ()=>{
        let data = await axios.get("http://localhost:3002/pizzas");
        console.log(data.data)
        setData(data.data)
    }
    getData()
  },[])
const dispatch = useDispatch();


    return(
        <div className="mb-5">
            <h6 id="pizza" className={style.title}>پیتزا</h6>
            <div className="d-flex flex-wrap justify-content-center w-100 ">
            {
               data?.map(({id,img,name,rate,des,price})=>{
               return(
              <>
              {modalState.show &&  <FoodModalPizza itemId={modalState.itemId} show={modalState.show} setModalState={setModalState} />}
               <div key={id} onClick={()=>{setModalState((state)=>({...state , show:true , itemId:id}))}}  className={style.foodCart}>
                        <div className="d-flex">
                            <img className={style.foodImg} src={img} />
                            <div className="d-flex text-end flex-column">
                              <h6 className="fw-bold">{name}</h6>
                              <p className={style.foodDes}>{des}</p>
                            </div>
                        </div>
                        <div className="d-flex w-100 justify-content-between align-items-center">
                            <button className={style.foodBtn} onClick={() => dispatch(addToCart({price,name,id}))}>افزودن</button>
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