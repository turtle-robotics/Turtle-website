import React from "react";
import NavBar from "./components/layouts/navBar";
import {Outlet, useLocation} from "react-router";

export default function Layout(){
    return (
        <>
          <nav className="w-full">
            <NavBar/>
          </nav>  
           <Outlet />
        </>
    );
}