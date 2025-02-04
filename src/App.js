
import React from 'react';
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


const AppLayout=()=>{

        const categoryList= CategoryContext();



    return (
        <div>
            <Header/>
            <createCategoryContext.Provider  value={{categoryList : categoryList}}>
                <Outlet/>
            </createCategoryContext.Provider>
           
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
