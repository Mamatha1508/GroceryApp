import React from "react";
import { Link } from "react-router";



const LeftNav=({itemData})=>{
    return (
        <li className="w-50">
          <Link><h3 className="border p-2 bg-green-50">{itemData.data.text}</h3></Link> 
        </li>
    )
}

export default LeftNav;