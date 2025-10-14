import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { navBarData } from "../../staticData/navbarData";
import logo from "../../assets/medisphere-logo.jpeg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Deteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`navbar fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-blue2-50" : "bg-blue2-150"
      }`}
    >
      {/* Bagian Kiri */}
      <div className="navbar-start">
        {/* Dropdown untuk mobile */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>

          {/* Menu dropdown */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2"
          >
            {navBarData.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `px-3 py-2 transition font-montserrat ${
                      isActive
                        ? "text-blue2-900 font-bold"
                        : "text-blue2-900 font-medium hover:font-bold"
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo / Brand */}
        <NavLink
          to="/"
          className="btn btn-ghost"
        >
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={logo}
              />
            </div>
          </div>
        </NavLink>
      </div>

      {/* Bagian Tengah (menu versi desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          {navBarData.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `px-3 py-2 transition font-montserrat ${
                    isActive
                      ? "text-blue-900 font-bold"
                      : "text-blue-900 font-medium hover:font-bold"
                  }`
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
