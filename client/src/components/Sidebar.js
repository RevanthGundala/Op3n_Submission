import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo">LOGO</div>
            <ul>
                <li><i>[]</i>Messages</li>
                <li><i>[]</i>History</li>
                <li><i>[]</i>Settings</li>
            </ul>
        </div>
    );
}

export default Sidebar;
