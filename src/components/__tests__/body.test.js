import { fireEvent, render,screen, waitFor } from "@testing-library/react"
import Body from "../Body"
import { data, MemoryRouter } from "react-router"
import { act } from "react"
import { json } from "express"
import '@testing-library/jest-dom'
import { homePageDataObj } from "../../utils/constants"
import Shimmer from "../Shimmer"

import { CreateCategoryContext } from "../../utils/CategoryContext"

    global.fetch= jest.fn(()=>{
        return Promise.resolve({
            json : (data)=>{
                return Promise.resolve(homePageDataObj)
            }
        })
    })
  

 //console.log('fetch return ',homePageDataObj);

describe('should load body component',()=>{

        beforeEach(()=>{
         //   render(<createCategoryContext><MemoryRouter><Body/></MemoryRouter></createCategoryContext>)
         render(<CreateCategoryContext.Provider value={{homePageDataObj: homePageDataObj}}><MemoryRouter><Body/></MemoryRouter></CreateCategoryContext.Provider>)
            //screen.debug();
        })
      test('should load shimmer ui',()=>{
       // render(<Shimmer/>)
        
       const shimmer=screen.getByTestId('shimmer-ui');
      // console.log('shimmer',shimmer.length);
       expect(shimmer).toBeInTheDocument();

      })
    test('should load serach bar',async ()=>{
        await  waitFor(()=> screen.getByPlaceholderText('serach items')) ;
        const search= screen.getByPlaceholderText('serach items')
      //  console.log('search',search)
        expect(search).toBeInTheDocument();
    })

    test('should load filter btn',async ()=>{
        await waitFor(()=> screen.getByTestId('filterItems'));
        const filterBtn= screen.getByTestId('filterItems');
      // console.log('filter',filterBtn);
      expect(filterBtn).toBeInTheDocument();
       
    })
    test('should load all dairy items on search and button click',async ()=>{
        await waitFor(()=> screen.getByPlaceholderText('serach items'));
        const searchInp= screen.getByPlaceholderText('serach items');
        await waitFor(()=> screen.getByTestId('filterItems'));
        const filterBtn= screen.getByTestId('filterItems');
        fireEvent.change(searchInp,{target : {value :'Dairy'}});
        fireEvent.click(filterBtn);

         await waitFor(()=> {
            //screen.getAllByTestId('item-list');
        const itemList= screen.getAllByTestId('item-list');
        console.log('ite list length',itemList.length)
        expect(itemList.length).toBe(15)
         })
    })

})
