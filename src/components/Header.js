import React, { useContext, useState } from 'react'
import { Link } from 'react-router'
import useOnlineStatus from '../utils/useOnlineStatus';
import { AddItemsToCartContext } from '../utils/AddItemsToCartContext';
import { useSelector } from 'react-redux';


const Header= ()=>{
    const [loginStatus,setLoginStatus]=useState('Logout');
    const onlineStatus=useOnlineStatus();
    //const {btnCount}=useContext(AddItemsToCartContext);

    // subscriv=bing to the store

      const cart= useSelector((store)=>store.cart.items)

      console.log('cart',cart)
   // console.log()
    return (
        <div className='flex justify-between shadow-lg mb-15'>
            <div className="ml-16  mt-4 w-40 h-40">
           <Link to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTpGFeGuTlHj03t2UvM_97HNF_SHJ315rgrQ&s"/></Link> 
            </div>
            <div>
                <ul className="flex justify-evenly">
                    <li className='mr-8 p-8'>{
                        onlineStatus
                        }</li>
                    <li className='p-8'><Link to='/about'>About</Link></li>
                    <li className='p-8'><input className='border' placeholder="Search" type='text' onMouseEnter={(e)=>{
                        console.log('header serach',e.target.value)
                    }}/></li>
                    <li className='p-8'><Link to='/cart'>Cart - {cart.length}</Link></li>
                    <li className='p-8'>
                        <Link to='/login'>
                        <button className='border bg-green-50 p-2' onClick={()=>{
                            if(loginStatus=='Login')
                            setLoginStatus('Logout')
                           else
                           setLoginStatus('Login')
                        }}>{loginStatus}</button>
                        </Link>
                    </li>
                </ul>
            </div>
           
        </div>
    )
}

export default Header;