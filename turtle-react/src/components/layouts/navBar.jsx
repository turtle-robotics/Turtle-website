import React from "react";
import { Link, Outlet } from "react-router";
import NavBarLink from "./navBarLink";
function NavBar(){
    return(

        <>
            <div className="w-full mt-2 flex gap-6 z-10 items-center sticky h-[30px]">
                <div className="size-[25px] bg-gray-700 ms-2 me-auto"></div>
                <NavBarLink className="font-[Times]" hoverClassName="font-[Times] underline text-red-500" path="/" name="Home"/>
                <NavBarLink className="font-[Times]" hoverClassName="font-[Times] underline text-red-500" path="/about" name="About" />
                <NavBarLink className="font-[Times]" hoverClassName="font-[Times] underline text-red-500" path="/hatchling" name="Hatchling"/>
                <NavBarLink className="font-[Times]" hoverClassName="font-[Times] underline text-red-500" path="/projects" name="Projects"/>
                <NavBarLink className="font-[Times] me-6" hoverClassName="font-[Times] me-6 underline text-red-500" path="/apply" name="Apply"/>
            </div>

        </>
    )
}

export default NavBar;