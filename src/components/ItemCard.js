import React from 'react';

const ItemCard=({itemData})=>{
    console.log('item data',itemData)
   // const {image_url,name,price}=itemData?.objects[0]?.data?.product;
    return itemData?.objects!=undefined && itemData?.objects[0]?.data?.product!=undefined && (
        <div className='w-70 border m-4'>
           <img className="h-40 w-40 ml-4" src={itemData?.objects[0]?.data?.product?.image_url}/>
           <h3 className='ml-4 h-20'>{itemData?.objects[0]?.data?.product?.name}</h3>
           <h3 className='ml-4 '>Rs . {itemData?.objects[0]?.data?.product?.price}</h3>
           <button className='ml-4 mt-4 border mb-4'>Add </button>
        </div>
    )
}

export default ItemCard