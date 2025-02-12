import React from "react";
import { Link } from "react-router-dom";

const LeftMenu = () => {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu min-h-full w-64 p-4 bg-black text-cream" style={{backgroundColor: ''}}>
                {/* Sidebar content here */}
                <li className="rounded hover:bg-gray">
                    <Link to="/userdashboard"> <i className="fa-solid fa-house mr-1"></i> Home</Link>
                </li>
                <li className="rounded hover:bg-gray">
                    <Link> <i className="fa-solid fa-inbox mr-1"></i> Inbox</Link>
                </li>
                <p className="mt-3 font-extralight">Private</p>
                <li className="rounded hover:bg-gray">
                    <Link to="/userdashboard/today">Today</Link>
                </li>
                <li className="rounded hover:bg-gray">
                    <Link to="/userdashboard/upcoming">Upcoming</Link>
                </li>
            </ul>
        </div>
    );
};

export default LeftMenu;
