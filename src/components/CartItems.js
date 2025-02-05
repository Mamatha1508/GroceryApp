import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";


const CartItems=({item})=>{

   console.log('cart each item',item)
    const dispatch= useDispatch();
    const handleRemoveItem=()=>{
       dispatch(removeItem(item.product_id))
    }
    return (
          
            <div className='w-70  m-4 shadow-lg flex flex-wrap '>
               
           <img className="h-40 w-40 ml-4" src={item.image_url}/>
           <h3 className='ml-4 h-20'>{item?.name}</h3>
           <h3 className='ml-4 '>Rs . {item.price}</h3>
           <button className='ml-4 mt-4 border mb-4' onClick={()=>{
          handleRemoveItem()
           
           }}>Remove </button>
        </div>
        

    )
}

export default CartItems;