import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{


    const cart= useSelector((store)=> store.cart.items)
    console.log('cart in cart ',cart);
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    }
    
      return(
        <div>
            <div className=""> 
                <button className="bg-green-100 shadow-xl p-4  ml-100" onClick={handleClearCart}>Clear Cart</button>
            </div>
             <div className="flex flex-wrap">

                {
                    cart.map((item)=>{
                         return <CartItems item={item}/>
                 })
}

</div>
        </div>
       
      )
}

export default Cart;