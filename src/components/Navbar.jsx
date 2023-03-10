import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Button from "./Button";

const Navbar = () => {
  const { user, dispatch } = useAuthContext();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
  };

  return (
    <header className='py-10 flex justify-between'>
      <div className='logo'>
        <Link
          to='/'
          className='text-xl font-semibold hover:text-violet-500 duration-300'
        >
          Pigeon
        </Link>
      </div>
      <nav>
        {!user && (
          <div className='flex gap-5'>
            <Link
              to='/login'
              className='hover:text-violet-500 hover:underline underline-offset-2 duration-300 '
            >
              Login
            </Link>
            <Link
              to='/register'
              className='hover:text-violet-500 hover:underline underline-offset-2 duration-300 '
            >
              Register
            </Link>
          </div>
        )}
        {user && (
          <div className='flex items-center gap-5'>
            <p>
              Logged in as:{" "}
              <span className='text-violet-500 font-semibold'>{user.name}</span>
            </p>
            <Button handleLogout={handleLogout} text='Logout' logout />
          </div>
        )}
      </nav>
    </header>
  );
};

export default React.memo(Navbar);
