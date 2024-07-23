
import { asyncThunkCreator, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosinstance from "src/Configs/axiosinstance";


let  init={booklist:[]}


export const getallbooks= createAsyncThunk("course/getallbooks",async ()=>{
    try{

        const response= axiosinstance.get('books');
        toast.promise(response,{
            loading:'loading books',
            success:'completed fetching books',
            error:'something went wrong,cant load books'
        });
     
        return await response;
       


    }
    catch(error){
        console.log(error); 
        toast.error("something went wrong");

    }
})

const Bookslice=createSlice({

    name:'book',
    initialState:init,
    reducers:{

    },
    extraReducers: (builder) => {
        builder.addCase(getallbooks.fulfilled, (state, action) => {
            if (action.payload?.data?.data) {
                state.booklist = action.payload.data.data;
            }
        });
    }
})


// export const Bookslice.actions;
export default Bookslice.reducer