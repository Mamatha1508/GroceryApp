import React from "react";

const CategoryCard=({cardData,index})=>{
    return (
        <div className='card-items'>
            {
               cardData?.data?.items?.map((cardItem)=>{
               // console.log('cardItem',cardItem,cardData,index)
                return (
                    <div className="card">
                        
                        <img src={cardItem.image}/>
                        <div>
                        {cardItem.image_title.split('-')[1]} 
                        </div>
                        </div>
                )

               })
              
            }
        </div>
    ) 
}

export default CategoryCard;