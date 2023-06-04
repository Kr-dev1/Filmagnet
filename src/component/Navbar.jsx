import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../assets/VectorLogo.png";
import line from "../assets/Line 5.png";
import searchIcon from "../assets/Vectorsearch.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/Ai";
const Navbar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [nav, setNav] = useState(false);
  function submitHandler(event) {
    event.preventDefault();
    if (search.length > 1) {
      navigate(`/query/${search}`);
    } else {
      alert("Please enter a value for search");
    }
    setSearch("");
  }

  function handleChnage(e) {
    setSearch(e.target.value);
  }

  function handleSidebar() {
    setNav((prevNav) => !prevNav);
  }

  const activeStyling = {
    color: "#fff",
    textDecoration: "underline",
    fontWeight: "bold",
  };

  return (
    <nav className="flex justify-between items-center px-2 md:px-6 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <Link to="/">
        <div className="flex gap-1 items-center">
          <img className="h-8" src={logo} />
          <p className="font-french capitalize">filmagnet</p>
        </div>
      </Link>
      <div className="hidden md:flex gap-20">
        <NavLink
          end
          to="/"
          style={({ isActive }) => (isActive ? activeStyling : null)}
        >
          <p className="font-imprima uppercase hover:underline hover:font-bold">
            home
          </p>
        </NavLink>
        <img src={line} />
        <NavLink
          to="/movie"
          style={({ isActive }) => (isActive ? activeStyling : null)}
        >
          <p className="font-imprima uppercase hover:underline hover:font-bold">
            movie
          </p>
        </NavLink>
        <img src={line} />
        <NavLink
          to="/tv"
          style={({ isActive }) => (isActive ? activeStyling : null)}
        >
          <p className="font-imprima uppercase hover:underline hover:font-bold">
            tvshow
          </p>
        </NavLink>
      </div>
      <form onSubmit={submitHandler} className="hidden md:flex gap-2">
        <input
          className="rounded-2xl px-2 py-1 focus:outline-none bg-gray-700"
          type="text"
          onChange={handleChnage}
          value={search}
        />
        <button>
          <img className="object-contain" src={searchIcon} />
        </button>
      </form>

      {/* Menu Icon */}
      <div
        onClick={handleSidebar}
        className="block md:hidden cursor-pointer z-10"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={25} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-[60px] flex flex-col items-center justify-between w-full h-full bg-gradient-to-r from-purple-800 via-purple-700 to-indigo-800 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 text-white ease-in-out duration-500 z-10"
            : "fixed left-[100%] top-[60px] h-full flex flex-col items-center justify-between ease-in-out duration-10"
        }
      >
        <ul className="w-full p-4">
          <form onSubmit={submitHandler} className="flex items-center gap-4">
            <input
              className="rounded-2xl px-2 py-1 focus:outline-none bg-gray-700"
              type="text"
              onChange={handleChnage}
              value={search}
            />
            <button onClick={handleSidebar}>
              <img className="object-contain" src={searchIcon} />
            </button>
          </form>

          <NavLink
            style={({ isActive }) => (isActive ? activeStyling : null)}
            to="/"
          >
            <li
              onClick={handleSidebar}
              className="border-b py-6 uppercase hover:underline hover:font-bold"
            >
              Home
            </li>
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyling : null)}
            to="movie"
          >
            <li
              onClick={handleSidebar}
              className="border-b py-6 uppercase hover:underline hover:font-bold"
            >
              movie
            </li>
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyling : null)}
            to="/tvshow"
          >
            <li
              onClick={handleSidebar}
              className="py-6 uppercase hover:underline hover:font-bold"
            >
              tvshow
            </li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
