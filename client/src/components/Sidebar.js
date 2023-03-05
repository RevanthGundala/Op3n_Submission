import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo">LOGO</div>
            <div className="navlist">
                <div className="navlink"><NavLink to='/'><i>[]</i>Messages</NavLink></div>
                <div className="navlink"><NavLink to='/history'><i>[]</i>History</NavLink></div>
                <div className="navlink"><NavLink to='/connect'><i>[]</i>Settings</NavLink></div>
            </div>
        </div>
    );
}

export default Sidebar;
