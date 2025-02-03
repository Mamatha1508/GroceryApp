import { useState ,useEffect} from "react";



const useCategoryList=()=>{

   const [listOfCategory,setListOfCategory]=useState({});
   const [listOfDiaryItems,setListOfDiaryItems]=useState([]);
    const fetchData= async ()=>{

        const data= await fetch('http://localhost:3000/homepage/data');
        const jsonData= await data.json();
        console.log('json data',jsonData);
       setTimeout(()=>{ //setListOfDiaryItems(jsonData.objects);
        setListOfCategory(jsonData.objects[2]);
        setListOfDiaryItems(jsonData.objects);
       },3000)
   
        
    }

    useEffect(()=>{
        fetchData();
        
    },[])
    return [listOfCategory,listOfDiaryItems];;
}


export default useCategoryList;