import React, { useEffect, useState } from 'react'
//import {homePageDataObj} from '../utils/constants';
import CategoryCard from './CategoryCard';
import IndividualCategoryItems from './IndividualCategoryItems';
import Shimmer from './Shimmer';

const Body=()=>{
    //console.log('home page',homePageDataObj)
    const [listOfDiaryItems,setListOfDiaryItems]=useState([]);
    const [listOfCategory,setListOfCategory]=useState({});
    const [searchInput,setSearchInput]=useState('');
    //console.log('list of diary',listOfDiaryItems);
    let counter=0;
    let timer;
    const fetchData= async ()=>{

        const data= await fetch('http://localhost:3000/homepage/data');
        const jsonData= await data.json();
        console.log('json data',jsonData);
       setTimeout(()=>{ setListOfDiaryItems(jsonData[0].objects);
        setListOfCategory(jsonData[0].objects[2]);
       },3000)
   
        
    }

    useEffect(()=>{
        fetchData();
        
    },[])
   return ( listOfDiaryItems.length===0  ? <Shimmer/>  : (
    <div>
        <div>
        
            <input type='text' placeholder='serach items' className="body-input" onChange={(e)=>{
                // Added debouncing logic to reduce no.of state  updates
                   
                   function doSomeMagic(func, wait) {
                    // your code here
                    //let timer;
                  //  clearTimeout(timer)
                  console.log('timer',timer);
                    return function (){
                        console.log('returning fn timer',timer)
                        clearTimeout(timer);
                      timer=setTimeout(()=>{
                        console.log('in timeout',timer)
                      func();
                    },wait)
                    }
                    
                    
                  }
                    function searchFn()
                    {
                        console.log('saerch fn called')
                        console.log('target value',e.target.value,counter++)
                        setSearchInput(e.target.value);
                    }
                    let debouncedFn= doSomeMagic(searchFn,1000)
                    debouncedFn();
            }}/>
            
            <button onClick={()=>{
              
               const inp= document.querySelector(".body-input").value;
               setSearchInput(inp)
               
                const filteredDiaryItems= listOfDiaryItems?.filter((obj,index)=>{
                    console.log('title',obj?.header_config?.title);
                   return  obj?.header_config?.title.includes(searchInput);
                })
              
               
                setListOfDiaryItems(filteredDiaryItems)

            }}>Filter Diary Items</button>
        </div>
        
         <div>
            {
         
             <CategoryCard cardData={listOfCategory} />
            
            
            }
        </div>
        <div>
            {
                listOfDiaryItems?.map((individualCategory)=>{
                    return  <IndividualCategoryItems  individualCategory={individualCategory}/>
                })
               
            }
            {
              //  listOfDiaryItems?.map((item))
            }
        </div>
    </div>
       
    ))
}

export default Body