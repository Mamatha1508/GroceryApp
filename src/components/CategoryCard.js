import React, { useContext } from "react";
import { Link } from "react-router";
import { CategoryContext,CreateCategoryContext } from "../utils/CategoryContext";

const CategoryCard=({cardData,index})=>{
    //console.log('abc',useContext(createCategoryContext));
  //  const {cardData}= useContext(createCategoryContext)
   // console.log('card dummy',cardData)
   const {categoryList}=useContext(CreateCategoryContext);
  // console.log('category list',categoryList)
    return (
        <div className='flex flex-wrap'>
            {
               categoryList?.data?.items?.map((cardItem)=>{
             //  console.log('cardItem',cardItem)
                return (
                    <Link to={'/items/'+cardItem.id} className="w-40 m-4 shadow-2xl">
                    <div >
                        
                        <img className=' w-40 mt-2 mr-2' src={cardItem.image}/>
                        {/* <div className='pl-8 w-40'> 
                        {cardItem.image_title.split('-')[1]} 
                        </div> */}
                        </div>
                    </Link>
                    
                )

               })
              
            }
        </div>
    ) 
}

export default CategoryCard;