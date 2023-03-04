import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo">LOGO</div>
            <div className="navlist">
                <div className="navlink"><Link to='/'><i>[]</i>Messages</Link></div>
                <div className="navlink"><Link to='/'><i>[]</i>History</Link></div>
                <div className="navlink"><Link to='/'><i>[]</i>Settings</Link></div>
            </div>
        </div>
    );
}

export default Sidebar;
