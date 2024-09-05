import { LOGO_URL } from "../utils/constant"
import { AVATAR } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const loggedInUser = useSelector((store) => (store.user));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(removeUser());
    navigate("/");
  }

  return (
    <div className="absolute w-full pt-3 pl-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-48" src={LOGO_URL} alt="logo" />
      {loggedInUser &&
        <div className="flex items-center">
          <div>
            <img className="w-[50px]" src={AVATAR} alt="" />
            <p className="text-xs text-center font-medium">{loggedInUser.displayName}</p>
          </div>
          <button
            className="bg-red-600 px-2 py-2 rounded-lg m-2 text-white font-semibold"
            onClick={handleSignOut}
          >Sign Out</button>
        </div>}
    </div>

  )
}

export default Header;