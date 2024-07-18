import { useSelector } from "react-redux";
import Layout from "src/Layouts/Layout";
import BookCard from "src/Components/BookCard";
import { useEffect } from "react";
import { getallbooks } from "src/Redux/Bookslice";
import { useDispatch } from "react-redux";

function Dashboard(){
    
    console.log("enterd dashboard");
    const state=useSelector((state)=>state.book);
    const dispatch=useDispatch();
    

   async  function loadbooks(){
        if(state.booklist.length==0){
            const response=await dispatch(getallbooks());
            console.log(response);
        }
    }
    useEffect(()=>{
        loadbooks();
        


    },[])
    
    console.log(state);
    return (
        <>
       <Layout>
     
         <BookCard title={"book1"}/>
       
       </Layout>
       </>
    )

}
export default Dashboard;