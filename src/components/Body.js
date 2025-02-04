import React, { useContext, useEffect, useState } from 'react'
//import {homePageDataObj} from '../utils/constants';
import CategoryCard from './CategoryCard';
import IndividualCategoryItems , {IndividualCategoryItemsWithLabel}   from './IndividualCategoryItemsList';
import Shimmer from './Shimmer';
import { Link } from 'react-router';
import useCategoryList from '../utils/useCategoryList';
import IndividualCategoryItemsList from './IndividualCategoryItemsList';
import {createCategoryContext } from '../utils/CategoryContext';


const Body=()=>{
      
   

    const [searchInput,setSearchInput]=useState('');
    //custom hook fetches the categories likst and  the filtered items on click of filter button
    //const [listOfCategory,listOfDiaryItems]=useCategoryList();
    const [listOfCategory,setListOfCategory]=useState({});
    const [listOfDiaryItems,setListOfDiaryItems]=useState([]);
   
  //  const IndividualCategoryItemsWithOffer= IndividualCategoryItemsWithLabel(IndividualCategoryItems);
     const fetchData= async ()=>{
 
         const data= await fetch('http://localhost:3000/homepage/data');
         const jsonData= await data.json();
         console.log('json data',jsonData);
        setTimeout(()=>{ //setListOfDiaryItems(jsonData.objects);
         setListOfCategory(jsonData.objects[2]);
         setListOfDiaryItems(jsonData.objects);
        },500)
    
         
     }
 
     useEffect(()=>{
         fetchData();
         
     },[])

    let timer;   // used for debouncing on serach input

   return ( listOfDiaryItems.length===0  ? <Shimmer/>  : (
    <div className='w-9/12 ml-60'>
        <div >
        
            <input type='text' placeholder='serach items' className="border" onChange={(e)=>{
                // Added debouncing logic to reduce no.of state  updates
                   
                   function doSomeMagic(func, wait) {
                  
                    return function (){
                      //  console.log('returning fn timer',timer)
                        clearTimeout(timer);
                      timer=setTimeout(()=>{
                       // console.log('in timeout',timer)
                      func();
                    },wait)
                    }
                    
                    
                  }
                    function searchFn()
                    {
                      
                        setSearchInput(e.target.value);
                    }
                    let debouncedFn= doSomeMagic(searchFn,1000)
                    debouncedFn();
            }}/>
            
            <button className='border' onClick={()=>{
              
               const inp= document.querySelectorAll("input")[1].value;
               setSearchInput(inp)
               
                const filteredDiaryItems= listOfDiaryItems?.filter((obj,index)=>{
                   // console.log('title',obj?.header_config?.title);
                 //  console.log('serach inp',searchInput.toLowerCase())
                   return  obj?.header_config?.title.includes(searchInput);
                })
              
               
                setListOfDiaryItems(filteredDiaryItems)

            }}>Filter Diary Items</button>
        </div>
        
         <div>
            {
                   <CategoryCard  cardData={listOfCategory}/>
         
            
            
            }
        </div>
        <div>
            {
                listOfDiaryItems?.map((individualCategory)=>{
                    return  <Link>
                    
                    <IndividualCategoryItemsList  individualCategory={individualCategory}/></Link>
                })
               
            }
           
        </div>
    </div>
       
    ))
}

export default Body