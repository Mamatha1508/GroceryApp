import React from 'react'
import { Link } from 'react-router'

const IndividualCategoryItems=({individualCategory})=>{
   // console.log('indi category',individualCategory);
    // if(individualCategory.objects!=undefined && individualCategory.objects[0].data.products!=undefined)
     console.log('indi categ',individualCategory)
     return (
        (individualCategory.objects!=undefined &&   individualCategory.objects[0].data.products!=undefined) &&  <div className='individual-category'>
            <h1>{individualCategory?.header_config?.title}</h1>
            <Link>
            <div className="flex flex-wrap">
            {
                
               
                individualCategory.objects[0].data.products.map((item,index)=>{
                 // console.log('item',index)
                   return (
                       <div className=" w-60 m-4 border">
                           <img className=' w-40 pl-4' src={item[0].image_url}/>
                           <div className='pl-4 w-40'>{item[0].name}</div>

                           </div>
                   )
               })
           }
            </div>
            </Link>
           
        </div>
    )
}

export default IndividualCategoryItems;