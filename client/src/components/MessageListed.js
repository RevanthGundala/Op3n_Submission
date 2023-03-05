import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function MessageListed(props) {
    let {from, subject, date, address} = props.message
    const [action, setAction] = useState('none')
    function sendAction(event){
        setAction(event.target.getAttribute('action'));
    }
    const render = () => {
        if (action != "none") {
            return <Navigate to={`/view/${action}`} />;
        }
    };

    return (
        <div className="listedMessage" onClick={sendAction} action={address} >
            <div>{subject}</div>
            <div>{from}</div>
            <div>{date}</div>
            {render()}
        </div>
    );
}

export default MessageListed;