import React from "react";

const LeftMenu = () => {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu min-h-full w-64 p-4 bg-black text-linen" style={{backgroundColor: ''}}>
                {/* Sidebar content here */}
                <li>
                    <a>Sidebar Item 1</a>
                </li>
                <li>
                    <a>Sidebar Item 2</a>
                </li>
            </ul>
        </div>
    );
};

export default LeftMenu;
