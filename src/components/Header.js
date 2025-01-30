import React, { useState } from 'react'

const Header= ()=>{
    const [loginStatus,setLoginStatus]=useState('Login')
    return (
        <div className="headerContainer">
            <div className="logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTpGFeGuTlHj03t2UvM_97HNF_SHJ315rgrQ&s"/>
            </div>
            <div>
                <ul className="nav-items">
                    <li>Address</li>
                    <li><input placeholder="Search"/></li>
                    <li>Cart</li>
                    <li>
                        <button onClick={()=>{
                            if(loginStatus=='Login')
                            setLoginStatus('Logout')
                           else
                           setLoginStatus('Login')
                        }}>{loginStatus}</button></li>
                </ul>
            </div>
           
        </div>
    )
}

export default Header;