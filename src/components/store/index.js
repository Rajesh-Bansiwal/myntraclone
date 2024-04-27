import {configureStore, createSlice} from "@reduxjs/toolkit"
import itemsSlice from "./item";
import bagSlice from "./bag";

const myntraStore=configureStore({
    reducer:{
        items:itemsSlice.reducer,
        bag:bagSlice.reducer
    }
})
export default myntraStore;