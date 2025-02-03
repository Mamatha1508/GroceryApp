import {useState,useEffect} from "react";

const useItemList=(itemId)=>{

    const [itemList,setItemList]=useState([]);
    const [leftNavSection,setLeftNavSection]=useState([]);

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

    },[])

    return [itemList,leftNavSection];
}

export default useItemList;