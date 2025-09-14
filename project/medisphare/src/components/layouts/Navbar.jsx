import React from "react";
import { NavLink } from "react-router-dom";
import { navBarData } from "../../staticData/navbarData";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-blue-300 shadow-sm">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navBarData.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      `px-3 py-2 transition font-montserrat ${
                        isActive
                          ? "text-blue-900 font-bold" // aktif → biru lebih terang + bold
                          : "text-blue-900 font-medium hover:font-bold" // default → biru tua medium
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
          <NavLink to="/" className="btn btn-ghost text-xl font-bold">
            Medishphere
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
                        ? "text-blue-900 font-bold" // aktif → biru lebih terang + bold
                        : "text-blue-900 font-medium hover:font-bold" // default → biru tua medium
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
    </div>
  );
};

export default Navbar;
