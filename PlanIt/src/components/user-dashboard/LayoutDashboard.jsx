import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import LeftMenu from './LeftMenu'


const Layout = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem('token')){
            navigate("/login") 
        }
    }, []);

  return (
    <>
    <div className="">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center bg-darkgray text-linen">
                    <Outlet />
                </div>
                <LeftMenu />
            </div>
        </div>
    </>
  )
}

export default Layout
