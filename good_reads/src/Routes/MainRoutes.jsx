import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "src/Pages/Home/Home";
import NotFound from "src/Pages/NotFound/NotFound";
import Signin from "src/Pages/Signin/Signin";
import Signup from "src/Pages/Signup/Signup";

function MainRoutes(){

    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="signin" element={<Signin/>} ></Route>
        </Routes>
        </>
    )

}
export default MainRoutes;