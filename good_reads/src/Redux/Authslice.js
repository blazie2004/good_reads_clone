import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import toast, { Toaster } from "react-hot-toast";

import axiosinstance from "src/Configs/axiosinstance";



const intialstate={
    IsLoggedIn:localStorage.getItem('IsLoggedIn ') || '',
    username:localStorage.getItem('username') || '',
    token:localStorage.getItem('token')||'',
}

export const signup=createAsyncThunk("auth/signup", async (data)=>{
    try {
        //write the sinup code using api
        const response=axiosinstance.post("signup",data);
        toast.promise(response,{
            loading:"Submitting Form",
            success:"Signed Up!",
            error:"something went wrong"
        });
        return await response;

        
    } catch (error) {
        Toaster.error("something went wrong");

        
    }
})


export const signin=createAsyncThunk("auth/signin", async (data)=>{
    try {
        //write the sinup code using api
        const response=axiosinstance.post("signin",data);
        toast.promise(response,{
            loading:"Submitting Form",
            success:"Signed Up!",
            error:"something went wrong"
        });
        return await response;

    
        
    } catch (error) {
        Toaster.error("cannot signin,something went wrong");

        
    }
})
const authSlice=createSlice({
    name:'auth',
    initialState:intialstate,
    reducers:{
        logout:(state,action)=>{
            state.IsLoggedIn=false,
            state.token='',
            state.username='',
            localStorage.clear()
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(signin.fulfilled,(state,action)=>{
            if(action?.payload?.data){
                // const ritem=action?.payload?.data?.data;
                state.IsLoggedIn=(action?.payload?.data?.data!=undefined);
                state.username=(action?.payload?.data?.data?.token);
                state.token=action?.payload?.data?.data?.token

                localStorage.setItem("IsLoggedIn",(action?.payload?.data?.data!=undefined));
                localStorage.setItem("username",(action?.payload?.data?.data?.username));
                localStorage.setItem("token",(action?.payload?.data?.data?.token));
            }
        })
    }
    
})

export const  {logout} =authSlice.actions;

export default authSlice.reducer