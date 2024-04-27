import {configureStore, createSlice} from "@reduxjs/toolkit"
// import { items } from "../../data/items";
const bagSlice=createSlice({
    name:'bag',
    initialState:[],
    reducers:{
        addtobag:(state,action)=>{
state.push(action.payload)
        },
        remove:(state,action)=>{
           return state.filter(ele=>ele!==action.payload) 
        }
    }
})
export const bagActions=bagSlice.actions
export default bagSlice;
