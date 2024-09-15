import { useState } from "react";
import img1 from "../../assets/logo (2).png";
import {Link, NavLink } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = () => {
    setIsOpen(false); // Close the navbar when a link is clicked
  };
  return (
    <nav className="bg-white  w-full fixed z-40">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={img1} className="h-8" alt="Autism Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-neutral-700">
            Autism
          </span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10   justify-center text-sm text-neutral-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col text-neutral-500 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li>
              <NavLink
                to="/"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white bg-blue-500 rounded md:bg-transparent md:text-blue-500 md:p-0"
                    : "block py-2 px-3 text-neutral-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white bg-blue-500 rounded md:bg-transparent md:text-blue-500 md:p-0"
                    : "block py-2 px-3 text-neutral-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white bg-blue-500 rounded md:bg-transparent md:text-blue-500 md:p-0 "
                    : "block py-2 px-3 text-neutral-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 "
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/application"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white bg-blue-500 rounded md:bg-transparent md:text-blue-500 md:p-0 "
                    : "block py-2 px-3 text-neutral-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 "
                }
              >
                App
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resource"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white bg-blue-500 rounded md:bg-transparent md:text-blue-500 md:p-0 dark:text-white md:dark:text-blue-500"
                    : "block py-2 px-3 text-neutral-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 "
                }
              >
                Resource
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}