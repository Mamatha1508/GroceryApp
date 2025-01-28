import React from 'react'
import {homePageDataObj} from '../utils/constants';
import CategoryCard from './CategoryCard';
import IndividualCategoryItems from './IndividualCategoryItems';


const Body=()=>{
    console.log('home page',homePageDataObj)
   return (
    <div>
        <div>
            <button>Filter</button>
        </div>
         <div>
            {
         
             <CategoryCard cardData={homePageDataObj.objects[2]} />
            
            
            }
        </div>
        <div>
            {
                homePageDataObj?.objects?.map((individualCategory)=>{
                    return  <IndividualCategoryItems  individualCategory={individualCategory}/>
                })
               
            }
        </div>
    </div>
       
    )
}

export default Body