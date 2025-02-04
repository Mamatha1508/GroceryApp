import { createContext, useState,useEffect } from "react";


export const createCategoryContext=createContext();
    
export const CategoryContext=()=>{
    const [category,setCategory]=useState([])

    
    
    const fetchData= async ()=>{
     
        const data= await fetch('http://localhost:3000/homepage/data');
        const jsonData= await data.json();
        console.log('json data',jsonData);
        setCategory(jsonData.objects[2]);
    
        
    }
    
    useEffect(()=>{
        fetchData();
        
    },[])
    return category;
    
}



