import { render,screen } from "@testing-library/react"
import Body from "../Body"
import { data, MemoryRouter } from "react-router"
import { act } from "react"
import { json } from "express"
import '@testing-library/jest-dom'
import { homePageDataObj } from "../../utils/constants"

    global.fetch= jest.fn(()=>{
        return Promise.resolve({
            json : (data)=>{
                return Promise.resolve(homePageDataObj)
            }
        })
    })
  

 console.log(global.fetch);

describe('should load body component',()=>{

        beforeEach(()=>{
            render(<MemoryRouter><Body/></MemoryRouter>)
            screen.debug();
        })
      
    test('should load serach bar',()=>{
        // const serach=screen.getByPlaceholderText('serach items');
        // console.log('search',serach);
    })

    test('should load filter btn',async ()=>{
       const filterBtn= await screen.findByTestId('filterItems')
       console.log('filter',filterBtn);
       
    })

})
