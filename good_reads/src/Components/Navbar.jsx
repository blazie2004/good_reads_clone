import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "src/Layouts/Layout";
// import { logout } from "Redux/Slices/AuthSlice";
import { logout } from "src/Redux/Authslice";

export default function Navbar() {
   

    const authState=useSelector((state)=>state.auth);
    const dispartcher=useDispatch();

    


    const onlogout =()=>{
        dispartcher(logout());
        
    }
    
    

    return (
      
        <div className="navbar bg-gray-800 px-20">
            <div className="flex-1">
                <Link to="/dashboard" className="btn btn-success-content normal-case text-xl">BookShelf</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    { localStorage.getItem("IsLoggedIn") && <li><Link to="/shelf">Shelfs</Link></li> }
                    { localStorage.getItem("IsLoggedIn")&& <li><Link>{localStorage.getItem("username")}</Link></li> }
                    <li>
                        <details>
                            <summary>Options</summary>
                            <ul className="p-2 bg-base-100">
                            {localStorage.getItem("IsLoggedIn") && <li><Link to="/signin" onClick={()=>onlogout()

                            }>Logout</Link></li>}
                                {!localStorage.getItem("IsLoggedIn") && <li><Link to="/signup" >Signup</Link></li>}
                                {!localStorage.getItem("IsLoggedIn") && <li><Link to="/signin" >Signin</Link></li>}

                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
       
    );
}