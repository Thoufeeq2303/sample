import {createSlice} from '@reduxjs/toolkit'

const storedItem = localStorage.getItem("cartItem")

const initialState = {
    cartItem : storedItem ? JSON.parse(storedItem) : []
}

const Cartslice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state, action)=>{
            const newItem = action.payload
            const existItem = state.cartItem.find((items)=>items.id === newItem.id)

            if(existItem){
                existItem.quantity += newItem.quantity // 1 +1 +1
            }
            else{
                state.cartItem.push({
                    id:newItem.id,
                    title:newItem.title,
                    img:newItem.img,
                    price:newItem.price,
                    des:newItem.des,
                    quantity:1
                })
            }

            localStorage.setItem("cartItem", JSON.stringify(state.cartItem))
        },

        deleteFromCart:(state,action)=>{
            state.cartItem = state.cartItem.filter((items)=>items.id !== action.payload.id)

            localStorage.setItem("cartItem", JSON.stringify(state.cartItem))
        }
    }
})

export default Cartslice.reducer

export const {addToCart, deleteFromCart} = Cartslice.actions
