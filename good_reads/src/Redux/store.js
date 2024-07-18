import { configureStore } from "@reduxjs/toolkit";
import Authslice from "./Authslice";
import Bookslice from "./Bookslice";


const store=configureStore({
    reducer:{
        auth:Authslice,
        book:Bookslice
    },
    devTools:true,
})
export default store;