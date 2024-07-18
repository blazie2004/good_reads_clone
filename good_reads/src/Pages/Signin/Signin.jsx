import React, { useDeferredValue, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "src/Redux/Authslice";
import { useNavigate } from "react-router-dom";

import Layout from "src/Layouts/Layout";

export default function Signin() {
  const [signindetails, setsignindetails] = useState({
    email: '',
    password: ''
  });
  const dispatch = useDispatch();
  const nav = useNavigate();
  const authState=useSelector((state)=>state.auth);

  async function onsubmitform(event) {
    event.preventDefault();
    console.log(signindetails);
    const response = await dispatch(signin(signindetails));

    nav("/dashboard");

    resetform();
    return response;
  };

  useEffect(()=>{
    if(authState.IsLoggegIn){
      nav("/dashboard");
    }
  },[])

  function resetform() {
    setsignindetails({ email: '', password: '' });
  }

  return (
    <Layout>
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <div>
        <h1 className="text-white text-5xl">Login To Your Account</h1>
      </div>

      <div className="mt-4">
        <p className="text-white">
          Don't have an account?
          <Link to="/signup">
            <button className="btn btn-success rounded-md px-2 mx-5 hover:bg-green-400">
              Sign Up
            </button>
          </Link>
        </p>
      </div>

      <div className="w-full">
        <form className="flex flex-col justify-center items-center w-3/4 mx-auto" onSubmit={onsubmitform}>
          <div className="my-5 w-1/3">
            <input
              onChange={(event) => {
                setsignindetails({ ...signindetails, email: event.target.value });
              }}
              autoComplete="off"
              type="email"
              placeholder="Email..."
              className="px-8 py-3 w-full bg-white"
              value={signindetails.email}
            />
          </div>
          <div className="my-5 w-1/3">
            <input
              onChange={(event) => {
                setsignindetails({ ...signindetails, password: event.target.value });
              }}
              autoComplete="off"
              type="password"
              placeholder="Password..."
              className="px-8 py-3 w-full bg-white"
              value={signindetails.password}
            />
          </div>
          <div className="my-5 w-1/3">
            <button className="btn btn-success w-full hover:bg-green-400 rounded-md px-2 py-1" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
    </Layout>
  );
}
