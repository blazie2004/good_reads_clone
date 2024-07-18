import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // Added useSelector
import { Link, useNavigate } from "react-router-dom";
import { signup } from "src/Redux/Authslice";
import Layout from "src/Layouts/Layout";

export default function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector((state) => state.auth); // Added to access state

    const [signupdetails, setSignupdetails] = useState({
        email: '',
        username: '',
        password: ''
    });

    useEffect(() => {
        if (state.IsLoggedIn) {
            navigate("/dashboard");
        }
    }, [state.IsLoggedIn, navigate]); // Added dependency array

    async function onsubmitform(e) {
        e.preventDefault();
        const response = await dispatch(signup(signupdetails));
        console.log(response);
        if (response?.payload?.data) {
            navigate("/signin");
        }
    }

    return (
      <Layout>
        <div className="h-[100vh] flex flex-col items-center justify-center">
            <div>
                <h1 className="text-white text-5xl">Create A New Account</h1>
            </div>
            <div className="mt-4">
                <p className="text-white">
                    Already have an account?
                    <Link to="/signin">
                        <button className="btn btn-success rounded-md px-2 mx-5 hover:bg-green-400">
                            SignIn
                        </button>
                    </Link>
                </p>
            </div>
            <div className="w-full">
                <form className="flex flex-col justify-center items-center w-3/4 mx-auto" onSubmit={onsubmitform}>
                    <div className="my-5 w-1/3">
                        <input
                            onChange={(event) => {
                                setSignupdetails({ ...signupdetails, username: event.target.value });
                            }}
                            autoComplete="off"
                            type="text"
                            placeholder="John"
                            className="px-8 py-3 w-full bg-white"
                            value={signupdetails.username}
                        />
                    </div>
                    <div className="my-5 w-1/3">
                        <input
                            value={signupdetails.email}
                            onChange={(event) => {
                                setSignupdetails({ ...signupdetails, email: event.target.value });
                            }}
                            autoComplete="off"
                            type="email"
                            placeholder="John@gmail.com"
                            className="px-8 py-3 w-full bg-white"
                        />
                    </div>
                    <div className="my-5 w-1/3">
                        <input
                            value={signupdetails.password}
                            onChange={(e) => {
                                setSignupdetails({ ...signupdetails, password: e.target.value });
                            }}
                            autoComplete="off"
                            type="password"
                            placeholder="Password"
                            className="px-8 py-3 w-full bg-white"
                        />
                    </div>
                    <div className="my-5 w-1/3">
                        <button className="btn btn-success w-full hover:bg-green-400 rounded-md px-2 py-1" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </Layout>
    );
}
