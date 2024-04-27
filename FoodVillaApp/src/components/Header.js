import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => (
  <a href="/">
    <img
      className="w-44"
      alt="logo"
      src="https://cdn.worldvectorlogo.com/logos/zomato-1.svg"
    />
  </a>
);

const Header = () => {
  const [isLogggedIn, setIsLoggedIn] = useState(false);
  const onlineStatus = useIsOnline();
  const { loggedInUser } = useContext(UserContext);

  const cart = useSelector((state) => state.cart.items);

  return (
    <div className="flex justify-between bg-blue-200 shadow-lg p-2">
      <Title></Title>
      <div className="flex items-center">
        <ul className="flex p-2 m-2 items-center">
          <li className="px-4 font-bold">
            {onlineStatus ? "✅ Online" : "🔴 Offline"}
          </li>
          <li className="px-4 font-bold hover:text-red-800">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 font-bold hover:text-red-800">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 font-bold hover:text-red-800">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-4 font-bold hover:text-red-800">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart">
              Cart <span>({cart.length} Items)</span>
            </Link>
          </li>
          <li className="px-4 font-bold">{loggedInUser}</li>
          <button
            className="px-3 py-2 bg-red-800 text-white rounded-lg"
            onClick={() => setIsLoggedIn(false)}
          >
            {isLogggedIn ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
