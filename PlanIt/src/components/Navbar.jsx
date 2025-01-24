import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () =>{
        localStorage.removeItem('token');
        navigate("/")
    }

    return (
        <div className="p-2">
            <nav className="navbar bg-ashrose shadow-md rounded-lg">
                <div className="flex-1">
                    <Link to="/" className="text-black font-serif font-bold p-3 text-xl">
                        PlanIt
                    </Link>
                </div>
                <div className="flex-none gap-4">
                    <ul className="menu-horizontal px-1">
                        <li className="p-3">
                            <NavLink to="/mynotes" className={({ isActive }) => `${isActive ? "text-red" : "text-black"}`}>
                                My Notes
                            </NavLink>
                        </li>
                        <li className="p-3">
                            <NavLink to="/about" className={({ isActive }) => `${isActive ? "text-red" : "text-black"}`}>
                                About
                            </NavLink>
                        </li>
                        <li className="p-3">
                            <NavLink to="/contact" className={({ isActive }) => `${isActive ? "text-red" : "text-black"}`}>
                                Contact
                            </NavLink>
                        </li>
                        {!localStorage.getItem("token") ? (
                            <>
                                {" "}
                                <li className="p-3">
                                    <NavLink to="/login" className={({ isActive }) => `${isActive ? "text-red" : "text-black"}`}>
                                        Login
                                    </NavLink>
                                </li>
                                <li className="p-3">
                                    <NavLink to="/signup" className={({ isActive }) => `${isActive ? "text-red" : "text-black"}`}>
                                        Signup
                                    </NavLink>
                                </li>{" "}
                            </>
                        ) : (
                            <li>
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
                                            <button onClick={handleLogout}>Logout</button>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
