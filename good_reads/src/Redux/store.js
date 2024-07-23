import { configureStore } from "@reduxjs/toolkit";
import Authslice from "./Authslice";
import Bookslice from "./Bookslice";
import ShelfSlice from "./ShelfSlice";


const store=configureStore({
    reducer:{
        auth:Authslice,
        book:Bookslice,
        shelf:ShelfSlice,
       
    },
    devTools:true,
})
export default store;