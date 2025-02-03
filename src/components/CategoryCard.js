import React from "react";
import { Link } from "react-router";

const CategoryCard=({cardData,index})=>{
    return (
        <div className='flex flex-wrap'>
            {
               cardData?.data?.items?.map((cardItem)=>{
               console.log('cardItem',cardItem)
                return (
                    <Link to={'/items/'+cardItem.id} className="w-60 h-60 m-4 border">
                    <div >
                        
                        <img className='h-40 w-40 ml-4' src={cardItem.image}/>
                        <div className='pl-8 w-40'> 
                        {cardItem.image_title.split('-')[1]} 
                        </div>
                        </div>
</Link>
                    
                )

               })
              
            }
        </div>
    ) 
}

export default CategoryCard;