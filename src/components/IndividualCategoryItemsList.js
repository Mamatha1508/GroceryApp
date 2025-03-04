import React from 'react'
import { Link } from 'react-router'
import IndividualCategoryItem , {IndividualCategoryItemWithOfferLabel}from './IndividualCategoryItem'


const IndividualCategoryItemsList=({individualCategory})=>{
   // console.log('indi category',individualCategory);
    // if(individualCategory.objects!=undefined && individualCategory.objects[0].data.products!=undefined)
    // console.log('indi categ',individualCategory);
    const IndividualCategoryItemWithOffer= IndividualCategoryItemWithOfferLabel(IndividualCategoryItem);
     return (
        (individualCategory.objects!=undefined &&   individualCategory.objects[0].data.products!=undefined) &&  <div className='individual-category'>
            <h1 className='text-3xl mt-4 mb-4 ml-8 '>{individualCategory?.header_config?.title}</h1>
            <Link>
            <div className="flex flex-wrap">
        {
            
           
            individualCategory.objects[0].data.products.map((item,index)=>{
            // let item1=item[0];
             {  return (item[0].offer)==null ?  <IndividualCategoryItem  item={item}/> :  <IndividualCategoryItemWithOffer item={item}/> } 
         
           })
       }
        </div>
            </Link>
           
        </div>
    )
}




export default IndividualCategoryItemsList;