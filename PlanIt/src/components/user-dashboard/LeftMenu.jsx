import React from "react";
import { Link } from "react-router-dom";

const LeftMenu = () => {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu min-h-full w-64 p-4 bg-black text-linen" style={{backgroundColor: ''}}>
                {/* Sidebar content here */}
                <li className="rounded hover:bg-gray">
                    <Link> <i class="fa-solid fa-house mr-1"></i> Home</Link>
                </li>
                <li className="rounded hover:bg-gray">
                    <Link> <i class="fa-solid fa-inbox mr-1"></i> Inbox</Link>
                </li>
                <p className="mt-3 font-extralight">Private</p>
                <li>
                    <Link>notes</Link>
                </li>
            </ul>
        </div>
    );
};

export default LeftMenu;
