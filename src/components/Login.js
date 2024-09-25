import Header from "./Header"
import { BG_IMG_URL } from "../utils/constant"
import { useRef, useState } from "react";
import { isValidEmail, isValidPass } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [passValidMsg, setPassValidMsg] = useState("Password shouldn't be empty.");
    const [emailValidMsg, setEmailValidMsg] = useState("Email shouldn't be empty.");
    const [nameValidMsg, setNameValidMsg] = useState("Full Name shouldn't be empty.");
    const [confPassValidMsg, setConfPassValidMsg] = useState("Confirm Password shouldn't be empty.");
    const [clicked, setClicked] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    

    const dispatch = useDispatch();

    const email = useRef();
    const password = useRef();
    const fullName = useRef();
    const confPass = useRef();

    const signUpHandle = () => {
        setIsSignIn(!isSignIn);
    }
    const isPasswordValid = () => {
        const isValid = isValidPass(password.current.value);
        (password.current.value.length > 0) ? setPassValidMsg(isValid) : setPassValidMsg("");
    }
    const isMailVaild = () => {
        const isValid = isValidEmail(email.current.value);
        (email.current.value.length > 0) ? setEmailValidMsg(isValid) : setEmailValidMsg("");
    }
    const isConfPasswordValid = (e) => {
        e !== password.current.value ? setConfPassValidMsg("Password doesn't match.") : setConfPassValidMsg("")
    }
    const signInupClickHandle = () => {
        setClicked(true);
        if (!isSignIn) {
            if (emailValidMsg === "" && passValidMsg === "" && confPassValidMsg === "" && nameValidMsg === "") {
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        updateProfile(auth.currentUser, {
                        displayName: fullName.current.value
                        }).then(() => {
                            dispatch(addUser({displayName : auth.currentUser.displayName, email: auth.currentUser.email}))
                        }).catch((error) => {
                            setErrorMsg(error.message);
                        }); 
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setErrorMsg(errorCode + " " + errorMessage);
                    });
            }
            else return;
        }
        else {
            if (emailValidMsg === "" && passValidMsg === "") {
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        dispatch(addUser({displayName : auth.currentUser.displayName, email: auth.currentUser.email}))
                    })
                    .catch((error) => {
                        setErrorMsg(error.message)
                    });
            }
            else return;
        }
    }

    return (
        <div className="">
            <Header />
            <div className="flex justify-center">
                <div className="absolute opacity-100"><img src={BG_IMG_URL} alt="" /></div>
                <div className="absolute bg-black w-[450px] my-[110px] flex justify-center bg-opacity-85">
                    <div className="w-8/12">
                        <h1 className="text-white font-bold text-3xl mt-8 mb-5">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                        <form action="" className="" onSubmit={(e) => e.preventDefault()}>

                            {!isSignIn &&
                                <><input
                                    ref={fullName}
                                    type="text"
                                    placeholder="Full Name"
                                    name=""
                                    id=""
                                    className="py-3 px-2 mt-3 mb-3 w-full bg-gray-500 text-white rounded border-[1px] border-white bg-opacity-50"
                                    onChange={(e) => { e.target.value.length === 0 ? setNameValidMsg("Name shouldn't be empty.") : setNameValidMsg(""); setClicked(false); setErrorMsg(""); }}
                                />
                                    {clicked && nameValidMsg.length > 0 && <p className="text-red-500 text-xs">{nameValidMsg}</p>}
                                </>
                            }

                            <input
                                ref={email}
                                type="text"
                                placeholder="Email"
                                name=""
                                id=""
                                onChange={(e) => {
                                    setClicked(false); setErrorMsg("");
                                    e.target.value.length === 0 ? setEmailValidMsg("Email shouldn't be empty.") : isMailVaild();
                                }
                                }
                                className="py-3 px-2 mt-3 mb-3 w-full bg-gray-500 text-white rounded border-[1px] border-white bg-opacity-50"
                            />

                            {emailValidMsg === "Email shouldn't be empty." ? (clicked && <p className="text-red-500 text-xs">Email shouldn't be empty.</p>) : <p className="text-red-500 text-xs">{emailValidMsg}</p>}


                            <input
                                ref={password}
                                type="password"
                                placeholder={isSignIn ? "Password" : "Create Password"}
                                className="py-3 px-2 mt-3 mb-3 w-full bg-gray-500 text-white rounded border-[1px] border-white bg-opacity-50"
                                onChange={(e) => {
                                    e.target.value.length === 0 ? setPassValidMsg("Password shouldn't be empty.") : isPasswordValid(); setClicked(false); setErrorMsg("");;
                                }}
                            />
                            {passValidMsg === "Password shouldn't be empty." ? (clicked && <p className="text-red-500 text-xs">Password shouldn't be empty.</p>) : <p className="text-red-500 text-xs">{passValidMsg}</p>}

                            {!isSignIn &&
                                <><input
                                    ref={confPass}
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="py-3 px-2 mt-3 mb-3 w-full bg-gray-500 text-white rounded border-[1px] border-white bg-opacity-50"
                                    onChange={(e) => {
                                        e.target.value.length === 0 ? setConfPassValidMsg("Confirm Password shouldn't be empty.") : isConfPasswordValid(e.target.value); setClicked(false);
                                    }}
                                />
                                    {confPassValidMsg === "Confirm Password shouldn't be empty." ? (clicked && <p className="text-red-500 text-xs">{confPassValidMsg}</p>) : <p className="text-red-500 text-xs">{confPassValidMsg}</p>}
                                </>
                            }
                            {errorMsg.length > 0 ? <p className="text-red-500 text-xs">{errorMsg}</p> : <></>}

                            <button
                                onClick={() => signInupClickHandle()}
                                className="bg-red-600 p-2 w-full my-5 rounded text-white font-semibold"
                            >{isSignIn ? "Sign In" : "Sign Up"}</button>
                            <br />

                            {isSignIn && <>
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
                            </>}

                            <p
                                className="text-white mt-3 mb-8"
                            >{isSignIn ? "New to Netflix? " : "Already an User? "}
                                <span
                                    className="hover:underline text-white font-semibold cursor-pointer"
                                    onClick={() => { signUpHandle(); setClicked(false) }}
                                >{isSignIn ? "Sign Up" : "Sign In"} now.</span></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;