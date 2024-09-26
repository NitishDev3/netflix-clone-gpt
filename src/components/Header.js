import { LOGO_URL, AVATAR, PREFFERED_LANG } from "../utils/constant"
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { gptSearchClick } from "../utils/gptSlice"
import { changeLang } from "../utils/configSlice";

const Header = () => {

  const loggedInUser = useSelector((store) => (store.user));
  const gptPageShow = useSelector((store) => (store.gpt.gptPageShow));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(removeUser());
    }).catch((error) => {
      console.log(error.message)
    });
  }

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser({ email: user.email, displayName: user.displayName }));
        navigate("/browse");
      } else {
        navigate("/");
      }
    });

    return () => unsubcribe();
  }, [])

  const gptSearchClickHandle = () => {
    dispatch(gptSearchClick());
  }

  const changeLanguage = (e) => {
    dispatch(changeLang(e));
  }

  return (
    <div className="absolute w-full bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-48" src={LOGO_URL} alt="logo" />
      {loggedInUser &&
        <div className="flex items-center">
          {gptPageShow ? 
           <div className="flex items-center"> 
            <div>
              <select
                name="lang" id="lang"
                className="bg-gray-700 px-[3px] py-[8px] text-sm rounded-sm text-white"
                onChange={(e) => { changeLanguage(e.target.value) }}
              >
                <option value="" disabled defaultValue hidden>Language</option>
                {PREFFERED_LANG.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
              </select>
            </div>
            <div>
            <button
              className="px-3 py-2 bg-purple-500 my-2 mx-8 rounded-lg"
              onClick={gptSearchClickHandle}
            >Homepage</button>
          </div>
          </div>
            : <div>
            <button
              className="px-3 py-2 bg-purple-500 my-2 mx-8 rounded-lg"
              onClick={gptSearchClickHandle}
            >GPT Search</button>
          </div>
          }

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