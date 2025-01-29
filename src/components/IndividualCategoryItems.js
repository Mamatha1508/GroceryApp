import React from 'react'

const IndividualCategoryItems=({individualCategory})=>{
   // console.log('indi category',individualCategory);
    // if(individualCategory.objects!=undefined && individualCategory.objects[0].data.products!=undefined)
    // console.log('indi categ',individualCategory.objects[0].data.products)
     return (
        (individualCategory.objects!=undefined &&   individualCategory.objects[0].data.products!=undefined) &&  <div className='individual-category'>
            <h1>{individualCategory?.header_config?.title}</h1>
            <div className="individual-category-list">
            {
                
               
                individualCategory.objects[0].data.products.map((item,index)=>{
                 // console.log('item',index)
                   return (
                       <div className="individual-category-items">
                           <img src={item[0].image_url}/>
                           <div>{item[0].name}</div>

                           </div>
                   )
               })
           }
            </div>
           
        </div>
    )
}

export default IndividualCategoryItems;