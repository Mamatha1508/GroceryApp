import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import { AddItemsToCartContext } from '../utils/AddItemsToCartContext';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ItemCard=({itemData})=>{
    console.log('item data',itemData)
   // const {image_url,name,price}=itemData?.objects[0]?.data?.product;
 //  const [btnCount,setBtnCount]=useState(0);
 //const {btnCount,setBtnCount}=useContext(AddItemsToCartContext);
// console.log('btncount',btnCount);

   const dispatch = useDispatch();
    const handleAddItem=()=>{
        dispatch(addItem(itemData?.objects!=undefined && itemData?.objects[0]?.data?.product!=undefined && itemData?.objects!=undefined && itemData?.objects[0]?.data?.product))
        //dispatch(addItem("pizza"));
    }
    return itemData?.objects!=undefined && itemData?.objects[0]?.data?.product!=undefined && (
      <Link>  <div className='w-70  m-4 shadow-lg '>
           <img className="h-40 w-40 ml-4" src={itemData?.objects[0]?.data?.product?.image_url}/>
           <h3 className='ml-4 h-20'>{itemData?.objects[0]?.data?.product?.name}</h3>
           <h3 className='ml-4 '>Rs . {itemData?.objects[0]?.data?.product?.price}</h3>
           <button className='ml-4 mt-4 border mb-4' onClick={()=>{
           // setBtnCount(btnCount+1)
           handleAddItem()
           }}>Add </button>
        </div>
        </Link>
    )
}

export default ItemCard