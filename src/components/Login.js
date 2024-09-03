import Header from "./Header"
import { BG_IMG_URL } from "../utils/constant"
import { useState } from "react"

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const signUpHandle = () => {
        setIsSignIn(!isSignIn);
    }

    return (
        <div className="">
            <Header />
            <div className="flex justify-center">
                <div className="absolute opacity-100"><img src={BG_IMG_URL} alt="" /></div>
                <div className="absolute bg-black w-[450px] my-[110px] flex justify-center bg-opacity-85">
                    <div className="w-8/12">
                        <h1 className="text-white font-bold text-3xl mt-8 mb-5">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                        <form action="" className="">

                            {!isSignIn &&
                                <><input
                                    type="text"
                                    placeholder="Full Name"
                                    name=""
                                    id=""
                                    className="py-3 px-2 mt-3 mb-3 w-full bg-gray-500 text-white rounded border-[1px] border-white bg-opacity-50" />
                                    <br /></>

                            }

                            <input
                                type="text"
                                placeholder="Email or Mobile Number"
                                name=""
                                id=""
                                className="py-3 px-2 mt-3 mb-3 w-full bg-gray-500 text-white rounded border-[1px] border-white bg-opacity-50" />
                            <br />
                            <input
                                type="password"
                                placeholder={isSignIn ? "Password" : "Create Password"}
                                className="py-3 px-2 mt-3 mb-3 w-full bg-gray-500 text-white rounded border-[1px] border-white bg-opacity-50" />
                            <br />
                            <button
                                className="bg-red-600 p-2 w-full mt-3 rounded mb-4 text-white font-semibold"
                            >{isSignIn ? "Sign In" : "Sign Up"}</button>
                            <br />
                            <p
                                className="text-white text-center"
                            >OR</p>
                            <button
                                className="bg-white p-2 w-full mt-3 rounded mb-4 text-white font-semibold bg-opacity-30"
                            >Use a sign-in code</button>
                            <p
                                className="text-white hover:underline mb-4 cursor-pointer text-center"
                            >Forgot password?</p>

                            <input type="checkbox" name="remember" id="remember" />
                            
                            <label htmlFor="remember" className="text-white"> Remember me</label>

                            <p
                                className="text-white mt-3 mb-8"
                            >{isSignIn ? "New to Netflix? " : "Already an User? "}
                                <span
                                    className="hover:underline text-white font-semibold cursor-pointer"
                                    onClick={() => { signUpHandle() }}
                                >{isSignIn ? "Sign Up" : "Sign In"} now.</span></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login