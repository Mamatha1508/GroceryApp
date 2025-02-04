import React, { useState } from "react";
import { Link } from "react-router";
import ItemCard from "./ItemCard";
import useItemList from "../utils/useItemList";



const LeftNav=({itemData,itemList,showItemsData,setShowItemsData,index,showOrHideData,setShowOrHideData})=>{

  //const [itemList,leftNavSection]=useItemList(itemId);
  console.log('left nav items',itemList)
    const [showItems,setShowItems]=useState(false)
    return (
      <div className="w-9/12 ml-90">
        <div onClick={()=>{
          setShowItemsData();
          setShowItems(!showItems)
        }}>
           <li className="shadow-lg cursor-pointer">
          <h3 className=" p-2 bg-green-100">{itemData.data.text}</h3>
         
        </li>
        </div>
        <div className="flex flex-wrap mb-8">
          {
            index==showItemsData &&  showItems==true &&itemList.length!=0 && itemList.map((item)=>{
              return  <ItemCard itemData={item}/>
                  
              })
          }
        </div>
      </div>
       
    )
}

export default LeftNav;