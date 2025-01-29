import React, { useEffect, useState } from 'react'
//import {homePageDataObj} from '../utils/constants';
import CategoryCard from './CategoryCard';
import IndividualCategoryItems from './IndividualCategoryItems';


const Body=()=>{
    //console.log('home page',homePageDataObj)
    const [listOfDiaryItems,setListOfDiaryItems]=useState([]);
    const [listOfCategory,setListOfCategory]=useState({})
    console.log('list of diary',listOfDiaryItems);
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
   return (
    <div>
        <div>
            <button onClick={()=>{
               // console.log(homePageDataObj);
                const filteredDiaryItems= listOfDiaryItems?.filter((obj,index)=>{
                   return  obj?.header_config?.title=='Dairy, Bread & Eggs';
                })
                console.log('filtered dairy',filteredDiaryItems)
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
       
    )
}

export default Body