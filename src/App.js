
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body';
import { HydratedRouter, Outlet, RouterProvider } from "react-router";
import { createBrowserRouter } from 'react-router';
//import {  RouterProvider} from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Login from './components/Login'
import ItemList from './components/ItemList';
import { createCategoryContext , CategoryContext } from './utils/CategoryContext';
import { AddItemsToCartContext } from './utils/AddItemsToCartContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';


const AppLayout=()=>{

    const [btnCount,setBtnCount]=useState(0);

        const categoryList= CategoryContext();
    


    return (
        <div>
             {/* <AddItemsToCartContext.Provider value={{btnCount : btnCount , setBtnCount : setBtnCount}}> */}

             <Provider store={appStore}>
            <Header/>
            <createCategoryContext.Provider  value={{categoryList : categoryList,}}>
               
                <Outlet/>
               
            </createCategoryContext.Provider>
            {/* </AddItemsToCartContext.Provider> */}
            </Provider>
           
        </div>
    )
}

const appRouter=createBrowserRouter([
    {
        path : '/',
        element : <AppLayout/>,
        children:[
            {
                path :'/',
                element:<Body/>
            },
            {
                path:'/about',
                element : <About/>
            },
            {
                path:'/items/:itemId',
                element:<ItemList/>
            },
            {
                path :'/cart',
                element : <Cart/>
            }
            
        ],
        errorElement:<Error/>
    },
    {
        path :'/login',
        element: <Login/>
    }
    
])

let root= ReactDOM.createRoot(document.getElementById('root'));




root.render(<RouterProvider router={appRouter}/>);
