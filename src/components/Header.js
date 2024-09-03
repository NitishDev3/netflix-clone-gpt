import {LOGO_URL} from "../utils/constant"

const Header = () => {
  return (
    <div className="absolute w-48 pt-3 pl-2 bg-gradient-to-b from-black z-10">
        <img src={LOGO_URL} alt="logo" />
    </div>
  )
}

export default Header;