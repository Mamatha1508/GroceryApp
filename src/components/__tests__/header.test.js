import { fireEvent, render ,renderHook,screen} from "@testing-library/react"
//import Header from "../Header"
import '@testing-library/jest-dom'
import Login from "../Login"
import { MemoryRouter } from "react-router"
import Header from "../Header";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartReducer from '../../utils/cartSlice'
import useOnlineStatus from "../../utils/useOnlineStatus";
import { act } from "react";

const mockStore= configureStore({
    reducer : {
        cart : cartReducer
    },
    preloadedState:{
        cart : {
            items:[]
        }
    }
});


test('Should load the login page',()=>{
    render(<MemoryRouter>
        <Login/>
    </MemoryRouter>)

    const heading= screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
});


describe('should render the header component',()=>{
  
    beforeEach(()=>{
        render(<Provider store={mockStore}>
            <MemoryRouter>
                <Header/>
                </MemoryRouter>
                </Provider>);
    })

    test('should load the logo',()=>{

       
        // query
       const image= screen.getByRole('img');
        //checking for image presence in the component
        expect(image).toBeInTheDocument();
   
   })

   test('should load cart count to 0 ',()=>{
    const cartCount= mockStore.getState().cart.items;
    //console.log('cartcount',cartCount)
    expect(cartCount.length).toBe(0)
   })

   test('should load the search input',()=>{
     const searchInput= screen.getByPlaceholderText('Search');
    // console.log('search',searchInput)
   })

   test('should load cart count to 0',()=>{
    const cartCount= screen.getByTestId('cart').textContent;
   // console.log('count',cartCount)
    expect(cartCount).toBe('Cart - 0')
   })

   test('should load logout button',()=>{
    const logoutBtn= screen.getByRole('button');
    expect(logoutBtn).toBeInTheDocument();
   })

   test('should load login and logout buttons',()=>{
    const logoutBtn= screen.getByTestId('logout');
    const logoutText= logoutBtn.textContent;
    //logoutBtn.fireEvent('click')
    fireEvent.click(logoutBtn)
    render(<MemoryRouter><Login/></MemoryRouter>)
    const loginBtn= screen.getByTestId('login');
   // console.log()
    const loginBtnText= loginBtn.textContent;
    //console.log('login btn text',loginBtnText)
    expect(loginBtnText).toBe('Login')
   

   })

  test('should show application status as offline',()=>{
//    const status= screen.getByTestId('onlineStatus').textContent;
//    expect(status).toBe('Online')

  const status= renderHook(()=> useOnlineStatus());
  //console.log('status',status);
  if(status.result.current=='Online')
  {
    act(()=>{
        dispatchEvent(new Event('offline'));
      })
      
     
     expect(status.result.current).toBe('Offline')
  }
  else
  {
    act(()=>{
        dispatchEvent(new Event('online'))
       })
        expect(status.result.current).toBe('Online')
  }

  })
//   test('should show application sattus as online',()=>{
//    const status= renderHook(()=>useOnlineStatus());
//    console.log('online status',status);
//    expect(status.result.current).toBe('Offline');

//    act(()=>{
//     dispatchEvent(new Event('online'))
//    })
//     expect(status.result.current).toBe('Online')
//   })
})
