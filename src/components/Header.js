import { LOGO_URL } from "../utils/constant"
import { AVATAR } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Header = () => {

  const loggedInUser = useSelector((store) => (store.user));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(removeUser());
    }).catch((error) => {
      console.log(error.message)
    });
  }

  useEffect(()=>{
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser({email: user.email, displayName :user.displayName}));
        navigate("/browse");
      } else {
        navigate("/");
      }
    });

    return () => unsubcribe();
  },[])

  return (
    <div className="absolute w-full bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-48" src={LOGO_URL} alt="logo" />
      {loggedInUser &&
        <div className="flex items-center">
          <div>
            <img className="w-[50px] rounded-lg" src={AVATAR} alt="" />
            <p className="text-xs text-center text-white font-medium">{loggedInUser.displayName}</p>
          </div>
          <button
            className="bg-red-600 px-2 py-2 rounded-lg mx-2 text-white font-semibold"
            onClick={handleSignOut}
          >Sign Out</button>
        </div>}
    </div>

  )
}

export default Header;