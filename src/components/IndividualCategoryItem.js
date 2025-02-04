import React from "react";


const IndividualCategoryItem=({item})=>{

    console.log('item data',item)
    return (
       
            <div className=" w-60 m-4 shadow-2xl">
                <img className=' w-40 pl-4' src={item[0].image_url}/>
                <div className='pl-4 w-40'>{item[0].name}</div>

                </div>
        )
    
}


export const IndividualCategoryItemWithOfferLabel=(IndividualCategoryItem)=>{
    return (props)=>{
        console.log('props',props.item[0].offer)
        return (
            <div className="relative">
               
                <IndividualCategoryItem {...props}/>
                <label className="absolute top-4 right-4 bg-green-100">{props.item[0].offer}</label>
            </div>
        )
    }
}

export default IndividualCategoryItem;