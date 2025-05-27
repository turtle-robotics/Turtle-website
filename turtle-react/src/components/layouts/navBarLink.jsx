import React from "react";
import { Link, useLocation  } from "react-router";
function NavBarLink(props){
    const linkPath = props.path;
    const linkName = props.name;
    const className = props.className;
    const hoverClassName = props.hoverClassName;
    //get active link
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    return(
        <div >
            <Link className={isActive(linkPath) ? hoverClassName : className} to={linkPath}>{linkName}</Link>
        </div>
    )
}

export default NavBarLink;