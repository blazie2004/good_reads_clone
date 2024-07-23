import { useSelector } from "react-redux";
import Layout from "src/Layouts/Layout";
import BookCard from "src/Components/BookCard";
import { useEffect } from "react";
import { getallbooks } from "src/Redux/Bookslice";
import { useDispatch } from "react-redux";

function Dashboard(){
    
    console.log("enterd dashboard");
    const bookstate=useSelector((state)=>state.book);
    const dispatch=useDispatch();
    

   async  function loadbooks(){
        if(bookstate.booklist.length==0){
            const response=await dispatch(getallbooks());
        
        }
    }
    useEffect(()=>{
        loadbooks();
        


    },[])
    
    
    return (
        <>
       <Layout>
     
         <BookCard title={"book1"}/>
          {bookstate.booklist.map((eachbook)=>{
             return <BookCard  key={eachbook._id} author={eachbook.author} title={eachbook.title} description={eachbook.description} id={eachbook._id} />
          })}
       
       </Layout>
       </>
    )

}
export default Dashboard;