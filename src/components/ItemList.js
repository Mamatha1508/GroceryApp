import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import ItemCard from "./ItemCard";
import { useParams } from "react-router";
import useItemList from "../utils/useItemList";
import LeftNav from "./LeftNav";

const ItemList=()=>{

  
    const {itemId}=useParams();
     // custom hook to fetch itemlist for each category
    const [itemList,leftNavSection]=useItemList(itemId)
    console.log('leftnav section',leftNavSection)
    return  itemList.length==0 ? <Shimmer/> : (
        <div className="flex">
            <ul className="w-100">
                {
                    leftNavSection.objects.map((item)=>{
                        return <LeftNav itemData={item}/>
                    })
                }
            </ul>
            <div className="flex flex-wrap ">
            {
                itemList.map((item)=>{
                return  <ItemCard itemData={item}/>
                    
                })
            }
        </div>
        </div>
        
    )
}

export default ItemList;