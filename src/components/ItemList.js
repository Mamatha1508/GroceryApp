import React, { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import ItemCard from "./ItemCard";
import { useParams } from "react-router";
import useItemList from "../utils/useItemList";
import LeftNav from "./LeftNav";
import { Link } from "react-router";
import { createCategoryContext } from "../utils/CategoryContext";


const ItemList=()=>{

  
    const {itemId}=useParams();

  // custom hook to fetch itemlist for each category
   // const [itemList,leftNavSection]=useItemList(itemId);

     const {categoryList}=useContext(createCategoryContext)

   const [itemList,setItemList]=useState([]);
   const [leftNavSection,setLeftNavSection]=useState([]);
   const [showItemsData,setShowItemsData]=useState(0);
   const [showOrHideData,setShowOrHideData]=useState(false);
   const fetchItemList= async ()=>{
       const data= await fetch('http://localhost:3000/items/itemlist/'+itemId);
       const json= await data.json();
       console.log('json',json.prefetch.with_data['/v1/listing/widgets'].objects);
       setItemList(json.prefetch.with_data['/v1/listing/widgets'].objects);;
       console.log('left navb',json.left_section)
       setLeftNavSection(json.left_section)
   }

   useEffect(()=>{
fetchItemList();

   },[itemId])



  
   // const [categoryList,setCategoryList]=useState([]);
   // console.log('itemlist',itemList)
  
    // const fetchData= async ()=>{
 
    //     const data= await fetch('http://localhost:3000/homepage/data');
    //     const jsonData= await data.json();
    //     console.log('json data',jsonData);
    //    setTimeout(()=>{ 
    //   //  setCategoryList(jsonData.objects[2].data.items);
       
      
    //    },500)
   
        
    // }


    // console.log('itemlist',itemList,leftNavSection)

    // useEffect(()=>{
    //    //fetchData();
    // },[])
    // console.log('categoryList',categoryList)
   // console.log('leftnav section',leftNavSection)
    return  (
        <div>
            <div className="flex justify-between bg-orange-100  mb-4 ml-4 mr-4 p-4 shadow-lg">
             {
                 categoryList?.data?.items?.length!=0 &&   categoryList?.data?.items?.map((category)=>{
                return <Link to={'/items/'+category.id}><li className="list-none w-60 "  >{category.image_title.split('- ')[1]}</li></Link>
               })
             }
            </div>
             <div className="">
            <ul className="">
                {
                   leftNavSection.length!=0 &&  leftNavSection.objects.map((item,index)=>{
                        return <LeftNav itemData={item} itemList={itemList} showItemsData={showItemsData} setShowItemsData={()=>setShowItemsData(index)} index={index} showOrHideData={showOrHideData}
                        setShowOrHideData={setShowOrHideData} />
                    })
                }
            </ul>
            {/* <div className="flex flex-wrap ">
            {
               // console.log()
               itemList.length!=0 &&  itemList.map((item)=>{
                return  <ItemCard itemData={item}/>
                    
                })
            }
        </div> */}
        </div>
        </div>
       
        
    )
}

export default ItemList;