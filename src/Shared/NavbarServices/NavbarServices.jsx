import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const NavbarServices = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar sticky top-0 z-[99999] lg:bg-base-500 px-16 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
          >
            <li className="hover:text-green-500">
              <Link>Home</Link>
            </li>
            <li tabIndex={0} className="hover:text-green-500">
              <Link className="justify-between">
                About Us
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </Link>
              <ul className="p-2">
                <li className="hover:text-green-500">
                  <Link>Submenu 1</Link>
                </li>
                <li className="hover:text-green-500">
                  <Link>Submenu 2</Link>
                </li>
              </ul>
            </li>
            <li className="hover:text-green-500">
              <Link>Department</Link>
            </li>
            <li className="hover:text-green-500">
              <Link>Shop</Link>
            </li>
            {user?.email ? (
              <>
                <li className="hover:text-green-500">
                  <Link to="/bookings">My Bookings</Link>
                </li>
                <li className="hover:text-green-500">
                  <button onClick={handleLogOut}>Log Out</button>
                </li>
              </>
            ) : (
              <li className="hover:text-green-500">
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="bg-green-500 rounded-md p-2">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  text-xl font-semibold px-1">
          <li className="hover:text-green-500">
            <Link>Home</Link>
          </li>
          <li tabIndex={0} className="hover:text-green-500">
            <Link>
              About Us
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>
            <ul className="p-2">
              <li className="hover:text-green-500">
                <Link>Submenu 1</Link>
              </li>
              <li className="hover:text-green-500">
                <Link>Submenu 2</Link>
              </li>
            </ul>
          </li>
          <li className="hover:text-green-500">
            <Link>Department</Link>
          </li>
          <li className="hover:text-green-500">
            <Link>Shop</Link>
          </li>
          {user?.email ? (
            <>
              <li className="hover:text-green-500">
                <Link to="/bookings">My Bookings</Link>
              </li>
              <li className="hover:text-green-500">
                <button onClick={handleLogOut}>Log Out</button>
              </li>
            </>
          ) : (
            <li className="hover:text-green-500">
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <Link className="btn btn-wide text-xl bg-green-500 text-white hover:bg-black-500 hover:text-white font-semibold">
          Get An Appointment
        </Link>
      </div>
    </div>
  );
};

export default NavbarServices;
