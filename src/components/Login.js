import React, { useState } from "react";
import { Link } from "react-router";

const Login=()=>{
    const [isSignIn,setIsSignIn]=useState(true);
    return (
        <div className="relative">
           <div className="w-100 h-100 absolute mx-180 my-60 bg-white shadow-lg rounded-lg opacity-75">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTpGFeGuTlHj03t2UvM_97HNF_SHJ315rgrQ&s' className="h-20 w-20 mx-40 mt-4" />
            <h2 className="mt-4 ml-25">Everything at your door step</h2>
            <h2 className="mt-4 ml-45"><b>{isSignIn==true ? 'Log In' : 'Sign Up'}</b></h2>
            <input type="email" placeholder="               email address" className="border-2 border-solid mx-20 mt-4 w-60  h-8 rounded-lg"/>
            <input type="password" placeholder='                 Password' className="border-2 border-black mx-20 mt-4 w-60 h-8 rounded-lg"/>
            <div>
                {
                   isSignIn==true ?  <Link to='/' className=" mx-20 mt-4 "><button  className='bg-green-500 h-8 w-60 mt-4 rounded-xl' data-testid='login'><b>Login</b></button></Link> : 
                   <Link to='/login' className=" mx-20 mt-4 "><button  className='bg-green-500 h-8 w-60 mt-4 rounded-xl' data-testid='login' onClick={()=>{
                    setIsSignIn(true)
                   }}><b>Sign In </b></button></Link>
                }
            
            </div>
           <div>
            <h4 className=" mx-20 mt-4" onClick={()=>{
                setIsSignIn(false)
            }}> New to the app? click Sign up</h4>
           </div>

           </div>
          
         
            <div className="bg-[url('https://img.freepik.com/free-photo/vegetables_23-2148023455.jpg?t=st=1741067900~exp=1741071500~hmac=4eed668897ee842c852fe7bc3908ae9c869dcd9b16b07809ddbfd6fe085c9aac&w=1060')] bg-cover bg-center h-screen w-full"></div>
           
           

          
          
            
         
            
            
        </div>
    )
}

export default Login;