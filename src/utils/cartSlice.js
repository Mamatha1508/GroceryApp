import { createSlice } from "@reduxjs/toolkit";


const cartSlice= createSlice({
    name :'cart',
    initialState :{
        items : []
    },
    reducers : {
        addItem : (state,action)=>{
             state.items.push(action.payload)
        },
        removeItem : (state,action)=>{
            console.log('action in remove',[...state.items]);
            console.log('action in remove', JSON.stringify(state.items));
          //  if(state.items.)
           // [...state.items, state.items.filter((item)=>  item.product_id== action.payload)]
          state.items.filter((item,index)=>{
            if(item.product_id==action.payload)
            {
                state.items.splice(index,1)
            }
               
          })
             console.log('state items',state.items)
        },
        clearCart : (state)=>{
             state.items=[]
        }
    }
})

export default cartSlice.reducer;
export const {addItem,removeItem,clearCart} = cartSlice.actions