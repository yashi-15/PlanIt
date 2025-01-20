import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar bg-base-100">
            <div className="flex-1">
                <Link to="/" className="text-pink font-serif font-bold p-3 text-xl">
                    PlanIt
                </Link>
            </div>
            <div className="flex-none gap-4">
                <ul className="menu-horizontal px-1">
                    <li className="p-3">
                        <NavLink to="/about" className={({isActive}) => `${isActive ?  "text-red" : "text-black"}`}>About</NavLink>
                    </li>
                    <li className="p-3">
                    <NavLink to="/contact" className={({isActive}) => `${isActive ?  "text-red" : "text-black"}`}>Contact</NavLink>
                    </li>
                </ul>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <Link to="#" className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">Settings</Link>
                        </li>
                        <li>
                            <Link to="#">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
