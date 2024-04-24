import { useState } from "react";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";

const Title = () => (
  <a href="/">
    <img
      className="w-52"
      alt="logo"
      src="https://cdn.worldvectorlogo.com/logos/zomato-1.svg"
    />
  </a>
);

const Header = () => {
  const [isLogggedIn, setIsLoggedIn] = useState(false);
  const onlineStatus = useIsOnline();

  return (
    <div className="flex justify-between bg-slate-300 shadow-lg p-3">
      <Title></Title>
      <div className="flex items-center">
        <ul className="flex p-2 m-2 items-center">
          <li className="px-4">{onlineStatus ? "✅ Online" : "🔴 Offline"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">Cart</li>
          {isLogggedIn ? (
            <button className="px-4" onClick={() => setIsLoggedIn(false)}>
              Logout
            </button>
          ) : (
            <button
              className="p-2 bg-red-600 text-white"
              onClick={() => setIsLoggedIn(true)}
            >
              Login
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
