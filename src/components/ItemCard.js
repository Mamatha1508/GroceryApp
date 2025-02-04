import React from 'react';
import { Link } from 'react-router';

const ItemCard=({itemData})=>{
    console.log('item data',itemData)
   // const {image_url,name,price}=itemData?.objects[0]?.data?.product;
    return itemData?.objects!=undefined && itemData?.objects[0]?.data?.product!=undefined && (
      <Link>  <div className='w-70  m-4 shadow-lg '>
           <img className="h-40 w-40 ml-4" src={itemData?.objects[0]?.data?.product?.image_url}/>
           <h3 className='ml-4 h-20'>{itemData?.objects[0]?.data?.product?.name}</h3>
           <h3 className='ml-4 '>Rs . {itemData?.objects[0]?.data?.product?.price}</h3>
           <button className='ml-4 mt-4 border mb-4'>Add </button>
        </div>
        </Link>
    )
}

export default ItemCard