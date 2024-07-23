import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import BookDescription from "src/Pages/BookDescription/BookDescription";
import Dashboard from "src/Pages/Dashboard/Dashboard";
import Home from "src/Pages/Home/Home";
import NotFound from "src/Pages/NotFound/NotFound";
import Shelf from "src/Pages/Shelf/Shelf";
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
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/book/:id" element={<BookDescription/>}></Route>
            <Route path="/shelf" element={<Shelf/>}> </Route>
        </Routes>
        </>
    )
 
}
export default MainRoutes;