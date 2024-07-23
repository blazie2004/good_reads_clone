import { useDispatch, useSelector } from "react-redux";
import Layout from "src/Layouts/Layout";
import { getAllBookShelves } from "src/Redux/ShelfSlice";
import { useEffect } from "react";
function Shelf(){


    const state=useSelector((state)=>state.Shelf);

    const dispatch=useDispatch();

    async function loadshelves(){
        if(state. shelfList.length==0){
            const response=await dispatch(getAllBookShelves);
            console.log(response);
        }

    }

    useEffect(() => {
      loadshelves();
    }, []);
    console.log(state);
    return (
        <Layout>


            


        



      

       </Layout>
    )

}
export default Shelf;